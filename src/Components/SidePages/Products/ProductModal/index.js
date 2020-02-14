import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty';

import { CardRight,
    CardHead, TypeH, TitleH, Model,
    TabsWrapper, TabsHead, TabItem, TabText,
    TabsBody
} from './Components'

import {clearProduct, loadProduct} from '../../../../Store/Modules/Product/actions';
import { changeTheme } from '../../../../Store/Modules/LocalSettings/actions';

import Photo from './screens/Photo';
import Price from './screens/Price';
import Place from './screens/Place';
import Edit from './screens/Edit';

const ProductModal =  ({ product, USA, loadProduct, clearProduct, productId, closeModal, ...props }) => {
    useEffect(() => {
        loadProduct(productId);

        return () => clearProduct()
    }, [productId, loadProduct, clearProduct]);

    const [ activeTab, setActiveTab ] = useState('price');

    const handleTabChange = tab => setActiveTab(tab);
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
                                    <TabItem
                                        onClick={() => handleTabChange('edit')}
                                        active={activeTab === 'edit'}
                                    >
                                        <TabText>Изменить</TabText>
                                    </TabItem>
                                </TabsHead>
                                <TabsBody>
                                    {activeTab === 'price' && (
                                        <Price
                                            product={product}
                                            product_id={product_id}
                                            usa={USA}
                                        />
                                    )}
                                    {activeTab === 'place' && <Place places={places} />}
                                    {activeTab === 'photo' && (
                                        <Photo
                                            product={product}
                                            product_id={product_id}
                                            theme={props.theme}
                                            changeTheme={props.changeTheme}
                                        />
                                    )}
                                    {activeTab === 'edit' && (
                                        <Edit
                                            product={product[product_id].info}
                                            productId={product_id}
                                            closeModal={closeModal}
                                        />
                                    )}
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