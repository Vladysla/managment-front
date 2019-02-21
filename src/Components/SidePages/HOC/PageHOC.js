import React, { Component } from 'react'

import {
    ComponentWrapper
} from '../Components'

import Pagination from '../../Pagination'
const Modal = React.lazy(() => import('../../Modal'));
const ProductModal = React.lazy(() => import('../Products/ProductModal'));


export default (TableBody) => {
    return class extends Component {
        state = {
            isDataFetching: true,
            filterBy: [],
            hasMenuOpen: null,
            hasActionsMenuOpened: null,
            currentPage: 1,
            selectedProduct: null
        }

        componentDidMount() {
            this.loadMoreData()
        }

        componentDidUpdate(prevProps, prevState) {
            if(this.state.currentPage !== prevState.currentPage) {
                this.loadMoreData()
            }
        }

        menuOpenHandler = (key, value) => {
            this.setState(prevState => ({[key]: (prevState[key] !== value) ? value : null}));
        }

        loadMoreData = () => {
            const queryParams = {
                page: this.state.currentPage
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
            const { last_page, per_page, total } = this.props
            const { selectedProduct } = this.state
            return (
                <ComponentWrapper>
                    <TableBody
                        menuOpenHandler={this.menuOpenHandler}
                        hasMenuOpen={this.state.hasMenuOpen}
                        data={this.props.data}
                        onSelect={productId => this.setState({ selectedProduct: productId })}
                    />
                    {
                        total >= per_page &&
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
            )
        }
    }
}