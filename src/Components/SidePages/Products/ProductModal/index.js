import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'

import { CardLeft, CardRight,
    CardHead, TypeH, TitleH, Model,
    Prices, PriceTitle, PriceValue, PriceUE,
    TabsWrapper, TabsHead, TabItem, TabText,
    TabsBody, Places
} from './Components'

import {Accordion, AccordionItem} from "../../../Accordion";
import {clearProduct, loadProduct} from "../../../../Store/Modules/Product/actions";



const ProductModal =  ({ product, USA, loadProduct, clearProduct, productId }) => {
    useEffect(() => {
        loadProduct(productId)

        return () => clearProduct()
    }, [])

    const [ activeTab, setActiveTab ] = useState('price')

    const handleTabChange = tab => setActiveTab(tab)

    return (
        product && Object.keys(product).map((product_id, index) => {
            const places = product[product_id].places;

            return (
                <Fragment key={index}>
                    <CardLeft>
                        <img
                            src="https://www.rei.com/media/product/119294"
                            alt="Some pict"
                        />
                    </CardLeft>
                    <CardRight key={index}>
                        <CardHead>
                            <TypeH>{product[product_id].info.type}</TypeH>
                            <TitleH>Бренд: {product[product_id].info.brand}</TitleH>
                            <Model>Модель: {product[product_id].info.model}</Model>
                            <TabsWrapper>
                                <TabsHead>
                                    <TabItem
                                        onClick={() => handleTabChange('price')}
                                        active={activeTab === 'price'}
                                    >
                                        <TabText>Цена</TabText>
                                    </TabItem>
                                    <TabItem
                                        onClick={() => handleTabChange('place')}
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
                                            Все доступные магазины
                                            <Accordion>
                                                {Object.keys(places).map(place => {
                                                    let totalCount = 0;
                                                    Object.keys(places[place]).forEach(size => {
                                                        Object.keys(places[place][size]).forEach(color => {
                                                            totalCount+= places[place][size][color]
                                                        })
                                                    });
                                                    return (
                                                        <AccordionItem key={place} title={`${place}: ${totalCount} шт.`}>
                                                            <div>
                                                                <Accordion>
                                                                    {
                                                                        Object.keys(places[place]).map(size => {
                                                                            let sizeCount = 0;
                                                                            Object.keys(places[place][size]).forEach(color => {
                                                                                sizeCount+= places[place][size][color]
                                                                            })
                                                                            return (
                                                                                <AccordionItem key={size} title={`${size}: ${sizeCount} шт.`}>
                                                                                    <div>
                                                                                        {
                                                                                            Object.keys(places[place][size]).map(color => (
                                                                                                <div key={color}>
                                                                                                    <div>{`${color}: ${places[place][size][color]}`}</div>
                                                                                                </div>
                                                                                            ))
                                                                                        }
                                                                                    </div>
                                                                                </AccordionItem>
                                                                            )
                                                                        })
                                                                    }
                                                                </Accordion>
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
    )
}

const mapStateToProps = state => ({
    product: state.product,
    USA: state.localSettings.currency.value
})

const mapDispatchToProps = {
    loadProduct,
    clearProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)