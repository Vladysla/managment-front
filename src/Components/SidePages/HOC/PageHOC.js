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
            place_id: null,
            searchProduct: ''
        }

        componentDidMount() {
            this.loadMoreData()
            this.props.loadPlaces()
        }

        componentWillUnmount() {
            this.setState({
                isDataFetching: true,
                orderBy: '',
                orderAsc: false,
                place_id: null,
                selectedProduct: null,
                searchProduct: ''
            })
        }

        componentDidUpdate(prevProps, prevState) {
            if(this.state.currentPage !== prevState.currentPage || this.state.place_id !== prevState.place_id) {
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

        placeHandler = place_id => this.setState({ place_id })

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
            if (this.state.searchProduct.trim().length < 2) return;

            this.loadMoreData()
        }

        loadMoreData = () => {
            const queryParams = {
                page: this.state.currentPage,
                order: this.state.orderBy,
                order_dir: this.state.orderAsc ? 'asc' : 'desc',
                q: this.state.searchProduct,
                place_id: this.state.place_id
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
                        if (nextState.currentPage < this.props.last_page) {
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



        render() {
            console.log(this.props)
            const { last_page, per_page, total, productsIsLoading } = this.props.products
            const { selectedProduct } = this.state
            return (
                <div>
                    {
                        options.page === 'place' && <ChoosePlate data={this.props.products.places} handler={this.placeHandler} />
                    }
                    <ComponentWrapper>
                        <Form
                            inline
                            onSubmit={this.searchOnSubmit}
                        >
                            <FormInput value={this.state.searchProduct} onChange={this.searchOnChange} type="text" placeholder="Найти..." className="mr-sm-2 search-input" />
                            <Button type="submit" variant="outline-info">Поиск</Button>
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
}