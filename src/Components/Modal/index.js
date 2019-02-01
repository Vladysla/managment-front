import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadProduct, clearProduct } from '../../Store/Modules/Product/actions'

import ClickOutside from 'react-click-outside'

import {
    Wrapper,
    Body
} from './Components'

class Modal extends Component {

    componentDidMount() {
        this.props.loadProduct(this.props.productId)
    }

    closeModal = () => {
        this.props.clearProduct()
        this.props.onClose()
    }

    render() {
        const { product } = this.props
        return (
            <Wrapper>
                <ClickOutside onClickOutside={this.closeModal}>
                    <Body>
                        {
                            product && Object.keys(product).map((product_id, index) => {
                                return (
                                    <div key={index}>
                                        {product[product_id].info.brand} <br/>
                                        {product[product_id].info.model} <br/>
                                        {product[product_id].info.price_arrival} <br/>
                                        {product[product_id].info.price_sell} <br/>
                                    </div>
                                )
                            })
                        }
                    </Body>
                </ClickOutside>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product
})

const mapDispatchToProps = {
    loadProduct,
    clearProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)