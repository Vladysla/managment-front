import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'
import isEmpty from 'lodash/isEmpty';

import { CardRight,
    CardHead, TypeH, TitleH, Model,
    Prices, PriceTitle, PriceValue, PriceUE,
    TabsWrapper, TabsHead, TabItem, TabText,
    TabsBody, Places
} from './Components'

import {Accordion, AccordionItem} from '../../../Accordion';
import {clearProduct, loadProduct} from '../../../../Store/Modules/Product/actions';
import { changeTheme } from '../../../../Store/Modules/LocalSettings/actions';

import { getImage } from '../../../../API';

const ProductModal =  ({ product, USA, loadProduct, clearProduct, productId, ...props }) => {
    useEffect(() => {
        loadProduct(productId)

        return () => clearProduct()
    }, [productId, loadProduct, clearProduct]);

    const [ activeTab, setActiveTab ] = useState('price')

    const handleTabChange = tab => setActiveTab(tab)
    if (isEmpty(product)) {
        return null;
    }

    return (
        product && Object.keys(product).map((product_id, index) => {
            const places = product[product_id].places;

            return (
                <Fragment key={index}>
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
                                    <TabItem
                                        onClick={() => handleTabChange('photo')}
                                        active={activeTab === 'photo'}
                                    >
                                        <TabText>Фото</TabText>
                                    </TabItem>
                                </TabsHead>
                                <TabsBody>
                                    {
                                        activeTab === 'price' &&
                                        <Prices>
                                            <PriceTitle>Цена закупа: </PriceTitle>
                                            <PriceValue>{`${product[product_id].info.price_arrival} грн. `}<PriceUE>{`(${(product[product_id].info.price_arrival / USA).toFixed(1)} $)`}</PriceUE></PriceValue>
                                            <PriceTitle>Цена продажи: </PriceTitle>
                                            <PriceValue>{`${product[product_id].info.price_sell} грн. `}<PriceUE>{`(${(product[product_id].info.price_sell / USA).toFixed(1)} $)`}</PriceUE></PriceValue>
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
                                    {
                                        activeTab === 'photo' &&
                                        <Places>
                                            <Image
                                                thumbnail
                                                src={getImage(product[product_id].info.photo)}
                                                alt="Product picture"
                                            />
                                            <button
                                                onClick={() => {
                                                    if  (props.theme === 'dark') {
                                                        return props.changeTheme('light');
                                                    }
                                                    return props.changeTheme('dark');
                                                }}
                                            >
                                                Change
                                            </button>
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
};

const mapStateToProps = state => ({
    product: state.product,
    USA: state.localSettings.currency.value,
    theme: state.localSettings.theme,
})

const mapDispatchToProps = {
    loadProduct,
    clearProduct,
    changeTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)