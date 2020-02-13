import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import BootsButton from 'react-bootstrap/Button';

import {
    ComponentWrapper
} from '../Components'

import {
    Form,
    Button,
    FormInput
} from '../../Table'

import {
    clearSeparatedData,
} from '../../../Store/Modules/SeparatedProducts/actions'

import {
    clearSeparatedProductsStorage,
    transferApplyAll,
    transferCancelAll
} from '../../../Store/Modules/SeparatedProductsStorage/actions'


import Pagination from '../../Pagination'
import ChoosePlate from '../../ChoosePlate';
import ScrollButton from '../../ScrollButton';
const Modal = React.lazy(() => import('../../Modal'));
const ProductModal = React.lazy(() => import('../Products/ProductModal'));


const PageHOC = (TableBody, options = {}) => {
    return class extends Component {
        state = {
            isDataFetching: true,
            orderBy: '',
            orderAsc: false,
            hasMenuOpen: null,
            hasActionsMenuOpened: null,
            currentPage: 1,
            selectedProduct: null,
            checkedProducts: [],
            place_id: null,
            type_id: null,
            searchProduct: ''
        };

        componentDidMount() {
            this.loadMoreData();
            if(options.page === 'place' || options.page === 'transfer' || options.page === 'sell') {
                this.props.loadTypes();
                this.props.loadPlaces()
                    .then((resp) => {
                        if(resp.length !== 0 && options.page === 'transfer') {
                            const filtered = resp.filter(place => (this.props.user.place_id !== place.id));
                            this.setState({ place_id: filtered[0].id })
                        }
                    })
            }
        }

        componentWillUnmount() {
            this.props.clearSeparatedData();
            this.props.clearSeparatedProductsStorage();
        }

        componentDidUpdate(prevProps, prevState) {
            const transferIncomePageChanges = options.page === 'transfer_income'
                && !this.props.products.productsIsLoading
                && !this.props.transferLoading
                && (this.props.products.total !== this.props.transferCount);

            if(this.state.currentPage !== prevState.currentPage
                || this.state.type_id !== prevState.type_id) {
                this.loadMoreData()
            }
            if (transferIncomePageChanges) {
                alert('Список входящих перемещений обновлен!');
                this.loadMoreData()
            }
        }

        menuOpenHandler = (key, value) => {
            this.setState(prevState => ({[key]: (prevState[key] !== value) ? value : null}));
        };

        orderHandler = key => {
            this.setState(prevState => ({
                orderBy: key,
                orderAsc: prevState.orderBy !== key
                    ? true
                    : !prevState.orderAsc
            }), () => {
                this.loadMoreData()
            })
        };

        setCheckedProducts = (productId) => {
            if (this.state.checkedProducts.includes(productId)) {
                this.setState(prevState => ({
                    checkedProducts: prevState.checkedProducts.filter(checkedId => checkedId !== productId)
                }))
            } else {
                this.setState(prevState => ({
                    checkedProducts: [...prevState.checkedProducts, productId]
                }))
            }
        };

        placeHandler = (place_id, page) => {
            this.setState({ place_id }, () => {
                if (page !== 'transfer') {
                    this.loadMoreData()
                }
            })

        };
        typeHandler = type_id => this.setState({ type_id });

        searchOnChange = e => {
            this.setState({
                searchProduct: e.target.value
            }, () => {
                if (!this.state.searchProduct) {
                    this.loadMoreData()
                }
            })
        };

        searchOnSubmit = e => {
            e.preventDefault();
            if (!this.state.searchProduct || this.state.searchProduct.length <= 1) return null;

            this.setState({ currentPage: 1 }, () => this.loadMoreData());
        };

        loadMoreData = () => {
            let queryParams = {
                page: this.state.currentPage,
                order: this.state.orderBy,
                order_dir: this.state.orderAsc ? 'asc' : 'desc',
                q: this.state.searchProduct,
                place_id: this.state.place_id,
                type_id: this.state.type_id
            };

            if(options.subPage === 'perDay') {
                queryParams = {
                    ...queryParams,
                    place: this.props.match.params.place
                };
                this.props.loadData(this.props.match.params.date, queryParams)
                return
            }

            this.props.loadData(queryParams)
        };

        switchCurrentPage = pageNumber => {
            if(typeof pageNumber === 'number') {
                this.setState({ currentPage: pageNumber })
            }
        };

        switchNextPageClick = simbol => {
            switch (simbol) {
                case 'next':
                    this.setState(nextState => {
                        if (nextState.currentPage < this.props.products.last_page) {
                            return { currentPage: nextState.currentPage+1 }
                        }
                        return { nextDisable: true }
                    });
                    break;
                case 'prev':
                    this.setState(nextState => {
                        if(nextState.currentPage > 1) {
                            return { currentPage: nextState.currentPage-1 }
                        }
                    });
                    break;
                default:
                    break
            }
        };

        transferProducts = () => {
            const { checkedProducts, place_id } = this.state;
            const { transferProducts, user } = this.props;

            if (checkedProducts.length !== 0 && place_id && user.place_id) {
                this.props.closeAlert();
                return transferProducts(checkedProducts, user.place_id, place_id)
            }

            this.props.showAlert('Вы должны выбрать товары и точку для перемещения!', 'transfer', 'danger')
        };

        sellProducts = () => {
            const { checkedProducts } = this.state;
            if (checkedProducts.length !== 0) {
                this.props.closeAlert();
                return this.props.sellProducts(checkedProducts, this.props.user.place_id)
                    .then((data) => {
                        if(data.length > 1) {
                            this.props.showAlert('Продукты проданы!', 'sell', 'success');
                        }
                        this.props.showAlert('Продукт продан!', 'sell', 'success');
                    })
            }

            this.props.showAlert('Вы должны выбрать товар(ы) для продажи!', 'sell', 'danger')
        };

        renderAllTransferButtons = (transferApply, transferCancel) => {
            if (options.page === 'transfer_income' && this.props.products.total > 1) {
                return (
                    <>
                        <BootsButton
                            variant="outline-success"
                            className="font-weight-bold mb-2"
                            onClick={transferApply}
                        >
                            Принять все
                        </BootsButton>
                        <BootsButton
                            variant="outline-danger"
                            className="font-weight-bold mb-2"
                            onClick={transferCancel}
                        >
                            Отклонить все
                        </BootsButton>
                    </>
                )
            }

            return null;
        };



        render() {
            const { last_page, per_page, total, productsIsLoading } = this.props.products;
            const { user } = this.props;
            const { selectedProduct } = this.state;
            return (
                <div>
                    {
                        (((options.page === 'place') || (options.page === 'transfer') || (options.page === 'sell')) && (options.subPage !== 'history') && (options.subPage !== 'perDay')) &&
                        <ChoosePlate
                            places={(options.page !== 'sell' || user.role === 'admin') && this.props.places}
                            types={this.props.types}
                            placeHandler={this.placeHandler}
                            typeHandler={this.typeHandler}
                            page={options.page}
                            transferProducts={this.transferProducts}
                            alert={this.props.alert}
                            closeAlert={this.props.closeAlert}
                            sellProducts={this.sellProducts}
                        />
                    }
                    <ComponentWrapper>
                        {total >= 10 && <ScrollButton top />}
                        <Form
                            inline
                            onSubmit={this.searchOnSubmit}
                        >
                            <FormInput value={this.state.searchProduct} onChange={this.searchOnChange} type="text" placeholder="Найти..." className="mr-sm-2 search-input" />
                            <Button forsearch='true' type="submit" variant="outline-info">Поиск</Button>
                        </Form>
                        {this.renderAllTransferButtons(this.props.transferApplyAll, this.props.transferCancelAll)}
                        <TableBody
                            menuOpenHandler={this.menuOpenHandler}
                            hasMenuOpen={this.state.hasMenuOpen}
                            data={this.props.products.data}
                            onSelect={productId => this.setState({ selectedProduct: productId })}
                            orderHandler={this.orderHandler}
                            orderBy={this.state.orderBy}
                            options={options}
                            productsIsLoading={productsIsLoading}
                            orderAsc={this.state.orderAsc}
                            setChecked={this.setCheckedProducts}
                            checkedProducts={this.state.checkedProducts}
                            USA={this.props.USA}
                            theme={this.props.theme}
                        />
                        {
                            total > per_page &&
                            <Pagination
                                currentPage={this.state.currentPage}
                                lastPage={last_page}
                                perPage={per_page}
                                total={total}
                                pageNeighbours={2}
                                switchCurrentPage={this.switchCurrentPage}
                                switchNextPageClick={this.switchNextPageClick}
                            />
                        }
                        <React.Suspense fallback={null}>
                            {
                                selectedProduct &&
                                <Modal onClose={() => this.setState({ selectedProduct: null })}>
                                    <ProductModal productId={selectedProduct}/>
                                </Modal>
                            }
                        </React.Suspense>
                    </ComponentWrapper>
                </div>
            )
        }
    }
};

const mapStateToProps = state => ({
    USA: state.localSettings.currency.value
});

const mapDispatchToProps = {
    clearSeparatedProductsStorage,
    clearSeparatedData,
    transferApplyAll,
    transferCancelAll
};

export default compose(connect(mapStateToProps, mapDispatchToProps), PageHOC);

