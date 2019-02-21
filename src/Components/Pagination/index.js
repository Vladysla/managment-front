import React, { Component } from 'react'

import {
    PaginatorWrapper,
    Page
} from './Components'

class Pagination extends Component
{
    constructor(props){
        super(props)
        this.pageNeighbours = typeof this.props.pageNeighbours === 'number'
            ? Math.max(0, Math.min(this.props.pageNeighbours, 2))
            : 0;
    }

    range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }


    handlePage = () => {
        const { currentPage } = this.props
        const totalPages = parseInt(this.props.lastPage)
        const totalBlocks = (this.pageNeighbours * 2) + 2;
        if(totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - this.pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + this.pageNeighbours);

            let pages = this.range(startPage, endPage);

            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalBlocks - (pages.length + 1);

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = this.range(startPage - spillOffset, startPage - 1);
                    pages = [...extraPages, ...pages];
                    break;
                }

                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = this.range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages];
                    break;
                }

                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [...pages];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return this.range(1, totalPages);
    }

    render() {
        return(
            <PaginatorWrapper>
                <Page
                    onClick={() => this.props.switchNextPageClick("prev")}
                    disabled={this.props.currentPage === 1}
                >{"<"}</Page>
                {this.handlePage().map((page, index) => (
                    <Page
                        key={index}
                        onClick={() => this.props.switchCurrentPage(page)}
                        active={this.props.currentPage === page}
                    >
                        {page}
                    </Page>
                ))}
                <Page
                    onClick={() => this.props.switchNextPageClick("next")}
                    disabled={this.props.currentPage === this.props.lastPage}
                >{">"}</Page>
            </PaginatorWrapper>
        )
    }
}

export default Pagination