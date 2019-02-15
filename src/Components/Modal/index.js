import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Accordion, AccordionItem} from '../Accordion'

import { loadProduct, clearProduct } from '../../Store/Modules/Product/actions'

import ClickOutside from 'react-click-outside'

import {
    Wrapper, Body, CardLeft, CardRight,
    CardHead, TypeH, TitleH, Model,
    Prices, PriceTitle, PriceValue, PriceUE,
    TabsWrapper, TabsHead, TabItem, TabText,
    TabsBody, Places, PlaceTitle, PlaceCount
} from './Components'

class Modal extends Component {

    state = {
        activeTab: 'price'
    }

    componentDidMount() {
        this.props.loadProduct(this.props.productId)
    }

    closeModal = () => {
        this.props.clearProduct()
        this.props.onClose()
    }

    handleTabChange = tab => this.setState({ activeTab: tab })

    render() {
        const { product, USA } = this.props
        const { activeTab } = this.state
        return (
            <Wrapper>
                <ClickOutside onClickOutside={this.closeModal}>
                    <Body>
                        {
                            product && Object.keys(product).map((product_id, index) => {
                                const places = product[product_id].places
                                return (
                                    <Fragment key={index}>
                                        <CardLeft>
                                            <img
                                                src="https://www.rei.com/media/product/119294"/>
                                        </CardLeft>
                                        <CardRight key={index}>
                                            <CardHead>
                                                <TypeH>CHAIRS</TypeH>
                                                <TitleH>Brand: {product[product_id].info.brand}</TitleH>
                                                <Model>Model: {product[product_id].info.model}</Model>
                                                <TabsWrapper>
                                                    <TabsHead>
                                                        <TabItem
                                                            onClick={() => this.handleTabChange('price')}
                                                            active={activeTab === 'price'}
                                                        >
                                                            <TabText>Цена</TabText>
                                                        </TabItem>
                                                        <TabItem
                                                            onClick={() => this.handleTabChange('place')}
                                                            active={activeTab === 'place'}
                                                        >
                                                            <TabText>Магазин</TabText>
                                                        </TabItem>
                                                    </TabsHead>
                                                    <TabsBody>
                                                        {
                                                            activeTab === 'price' &&
                                                            <Prices>
                                                                <PriceTitle>Цена закупа: <PriceValue>{`${product[product_id].info.price_arrival} грн. `}<PriceUE>{`(${(product[product_id].info.price_arrival / USA).toFixed(1)} $)`}</PriceUE></PriceValue></PriceTitle>
                                                                <PriceTitle>Цена продажи: <PriceValue>{`${product[product_id].info.price_sell} грн. `}<PriceUE>{`(${(product[product_id].info.price_sell / USA).toFixed(1)} $)`}</PriceUE></PriceValue></PriceTitle>
                                                            </Prices>
                                                        }
                                                        {
                                                            activeTab === 'place' &&
                                                            <Places>
                                                                Magazines
                                                                <Accordion>
                                                                {Object.keys(places).map(place => {
                                                                    let totalCount = 0;
                                                                    Object.keys(places[place]).map(size => {
                                                                        Object.keys(places[place][size]).map(color => {
                                                                            totalCount+= places[place][size][color]
                                                                        })
                                                                    })
                                                                    return (
                                                                        <AccordionItem key={place} title={`${place}: ${totalCount} шт.`}>
                                                                            <div>
                                                                                <PlaceTitle>{place}: </PlaceTitle>
                                                                                <PlaceCount>{totalCount} шт.</PlaceCount>
                                                                            </div>
                                                                        </AccordionItem>
                                                                    )
                                                                })}
                                                                </Accordion>
                                                            </Places>
                                                        }
                                                    </TabsBody>
                                                </TabsWrapper>
                                            </CardHead>
                                        </CardRight>
                                    </Fragment>
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
    product: state.product,
    USA: state.localSettings.currency.value
})

const mapDispatchToProps = {
    loadProduct,
    clearProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)