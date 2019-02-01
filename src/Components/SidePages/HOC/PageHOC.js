import React, { Component } from 'react'

import {
    ComponentWrapper
} from '../Components'

import Pagination from '../../Pagination'
const ModalPromise = import("../../Modal");
const Modal = React.lazy(() => ModalPromise);


export default (TableBody, options = {}) => {
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

        handlePage = id => {
            if(typeof id === 'number') {
                this.setState({ currentPage: id })
            }
        }
        handleNextPageClick = simbol => {
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
                <React.Suspense fallback={null}>
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
                                handlePage={this.handlePage}
                                handleNextPageClick={this.handleNextPageClick}
                            />
                        }
                        {
                            selectedProduct && <Modal productId={selectedProduct} onClose={() => this.setState({ selectedProduct: null })} />
                        }
                    </ComponentWrapper>
                </React.Suspense>
            )
        }
    }
}