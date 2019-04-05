import React, { Component } from 'react'

import {
    ComponentWrapper
} from '../Components'

import {
    Form,
    Button,
    FormInput
} from '../../Table'


import Pagination from '../../Pagination'
import ChoosePlate from "../../ChoosePlate";
const Modal = React.lazy(() => import('../../Modal'));
const ProductModal = React.lazy(() => import('../Products/ProductModal'));


export default (TableBody, options = {}) => {
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
        }

        componentDidMount() {
            this.loadMoreData()
            if(options.page === 'place' || options.page === 'transfer') {
                this.props.loadPlaces()
                this.props.loadTypes()
            }
        }

        componentWillUnmount() {
            this.setState({
                isDataFetching: true,
                orderBy: '',
                orderAsc: false,
                place_id: null,
                selectedProduct: null,
                checkedProducts: [],
                searchProduct: ''
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if(this.state.currentPage !== prevState.currentPage
                || this.state.type_id !== prevState.type_id) {
                this.loadMoreData()
            }
        }

        menuOpenHandler = (key, value) => {
            this.setState(prevState => ({[key]: (prevState[key] !== value) ? value : null}));
        }

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
        }

        placeHandler = (place_id, page) => {
            this.setState({ place_id })
            if (page !== 'transfer') {
                this.loadMoreData()
            }
        }
        typeHandler = type_id => this.setState({ type_id })

        searchOnChange = e => {
            this.setState({
                searchProduct: e.target.value
            }, () => {
                if (!this.state.searchProduct) {
                    this.loadMoreData()
                }
            })
        }

        searchOnSubmit = e => {
            e.preventDefault()
            if (this.state.searchProduct.trim().length < 1) return;

            this.loadMoreData()
        }

        loadMoreData = () => {
            const queryParams = {
                page: this.state.currentPage,
                order: this.state.orderBy,
                order_dir: this.state.orderAsc ? 'asc' : 'desc',
                q: this.state.searchProduct,
                place_id: this.state.place_id,
                type_id: this.state.type_id
            }

            this.props.loadData(queryParams)
        }

        switchCurrentPage = pageNumber => {
            if(typeof pageNumber === 'number') {
                this.setState({ currentPage: pageNumber })
            }
        }

        switchNextPageClick = simbol => {
            switch (simbol) {
                case 'next':
                    this.setState(nextState => {
                        if (nextState.currentPage < this.props.products.last_page) {
                            return { currentPage: nextState.currentPage+1 }
                        }
                        return { nextDisable: true }
                    })
                    break
                case 'prev':
                    this.setState(nextState => {
                        if(nextState.currentPage > 1) {
                            return { currentPage: nextState.currentPage-1 }
                        }
                    })
                    break
                default:
                    break
            }
        }

        transferProducts = () => {
            const { checkedProducts, place_id } = this.state
            const { transferProducts, user } = this.props

            if (checkedProducts.length !== 0 && place_id && user.place_id) {
                this.props.closeAlert()
                return transferProducts(checkedProducts, user.place_id, place_id)
            }

            this.props.showAlert('Вы должны выбрать товары и точку для перемещения!', 'transfer')
        }



        render() {
            const { last_page, per_page, total, productsIsLoading } = this.props.products
            const { selectedProduct } = this.state

            return (
                <div>
                    {
                        ((options.page === 'place') || (options.page === 'transfer')) &&
                        <ChoosePlate
                            places={this.props.places}
                            types={this.props.types}
                            placeHandler={this.placeHandler}
                            typeHandler={this.typeHandler}
                            page={options.page}
                            transferProducts={this.transferProducts}
                            alert={this.props.alert}
                            closeAlert={this.props.closeAlert}
                        />
                    }
                    <ComponentWrapper>
                        <Form
                            inline
                            onSubmit={this.searchOnSubmit}
                        >
                            <FormInput value={this.state.searchProduct} onChange={this.searchOnChange} type="text" placeholder="Найти..." className="mr-sm-2 search-input" />
                            <Button isSearch type="submit" variant="outline-info">Поиск</Button>
                        </Form>
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
                        />
                        <Pagination
                            currentPage={this.state.currentPage}
                            lastPage={last_page}
                            perPage={per_page}
                            total={total}
                            pageNeighbours={2}
                            switchCurrentPage={this.switchCurrentPage}
                            switchNextPageClick={this.switchNextPageClick}
                        />
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
}