import React, {Component} from 'react';
import { connect } from 'react-redux';

import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Autocomplete from 'react-autocomplete';

import pageContainer from '../../../Containers/PageContainer'

import {
    Wrapper,
    ProductWrapper
} from './Components'

import {
    loadPlaces,
    loadColors,
    loadSizes,
    loadTypes,
    loadModels
} from '../../../Store/Modules/Products/actions'
import { addProduct } from '../../../Store/Modules/Product/actions';

import './styles.css'

class AddProduct extends Component {

    componentDidMount() {
        this.props.loadPlaces();
        this.props.loadColors();
        this.props.loadSizes();
        this.props.loadTypes();
        this.props.loadModels();
    }
    state = {
        product_exist: 0,
        isProductSelected: false,
        product_value: '',
        brand: '',
        model: '',
        price_arrival: '',
        price_sell: '',
        type_id: '',
        product_color_size: {},
        product_place: '',
        photo: null
    };

    radioHandle = e => {
        this.setState({
            product_exist: +e.target.value
        }, () => {
            if(this.state.product_exist && this.props.models) {
                this.autocompleteRef.focus()
            }
        })
    };

    changeProductHandle = (event, value) => {
        this.setState({
            product_value: value,
            productSelected: null
        });
    };

    changeFieldHandle = e => this.setState({ [e.target.name]: e.target.value });

    photoChange = e => this.setState({ photo: e.target.files[0] });

    selectProductHandle = (value, item) => {
        this.setState({
            product_value: value,
            productSelected: item
        })
    };

    selectColorSizeChange = e => {
        const val = e.target.value;
        this.setState(prevState => {
            if (prevState.product_color_size.hasOwnProperty(val)) {
                return;
            }

            return {
                product_color_size: {
                    ...prevState.product_color_size,
                    [val]: {}
                }
            };
        })
    };

    changeColorSize = (color, size, value) => {
        console.log(color, size, value)
        this.setState({
            product_color_size: {
                ...this.state.product_color_size,
                [color]: {
                    ...this.state.product_color_size[color],
                    [size]: value
                }
            }
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addProduct(this.state);
    };

    renderTabs = ifExist => {
        const { types } = this.props
        const { product_value, productSelected } = this.state;
        const productFields = [
            {
                name: 'brand',
                label: 'Бренд'
            },
            {
                name: 'model',
                label: 'Модель'
            },
            {
                name: 'price_arrival',
                label: 'Цена закупа'
            },
            {
                name: 'price_sell',
                label: 'Цена продажи'
            }
        ];
        if (ifExist) {
            if(!this.props.models) return <div>Товаров нет!</div>
            return (
                <div>
                    <Autocomplete
                        inputProps={{
                            placeholder: 'Введите модель',
                            className: 'form-control'
                        }}
                        ref={input => this.autocompleteRef = input}
                        shouldItemRender={(item, value) => item.model.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        getItemValue={(item) => item.model}
                        items={this.props.models}
                        value={product_value}
                        onChange={this.changeProductHandle}
                        onSelect={this.selectProductHandle}
                        renderMenu={children => (
                            <div className="menu">
                                {children}
                            </div>
                        )}
                        renderItem={(item, isHighlighted) => (
                            <div
                                className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                                key={item.id}
                            >{item.model}</div>
                        )}
                    />
                    <ProductWrapper>
                        {
                            productSelected &&
                            <Table striped bordered hover variant="dark" responsive>
                                <thead>
                                    <tr>
                                        <th>Бренд</th>
                                        <th>Модель</th>
                                        <th>Тип</th>
                                        <th>Цена закуп</th>
                                        <th>Цена продажи</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>{productSelected.brand}</th>
                                        <th>{productSelected.model}</th>
                                        <th>{productSelected.type.name}</th>
                                        <th>{`${productSelected.price_arrival}грн (${(productSelected.price_arrival / this.props.USA).toFixed(1)}$)`}</th>
                                        <th>{`${productSelected.price_sell}грн (${(productSelected.price_sell / this.props.USA).toFixed(1)}$)`}</th>
                                    </tr>
                                </tbody>
                            </Table>
                        }
                    </ProductWrapper>
                </div>
            )
        }
        return (
            <>
                <div className='row'>
                    {
                        productFields.map(field => {
                            return (
                                <div key={field.name} className="col-md-3 col-sm">
                                    <Form.Group>
                                        <Form.Label>{field.label}</Form.Label>
                                        <Form.Control
                                            name={field.name}
                                            placeholder={field.label}
                                            value={this.state[field.name]}
                                            onChange={e => this.changeFieldHandle(e)}
                                        />
                                    </Form.Group>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <Form.Group>
                            <Form.Label>Выберите тип товара:</Form.Label>
                            <Form.Control value={this.state.type_id} onChange={this.changeFieldHandle} name="type_id" as="select" >
                                <option selected disabled value="">Выберите тип товара</option>
                                {
                                    types.map(type => (
                                        <option key={type.id} value={type.id}>{type.name}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <input onChange={this.photoChange} name="photo" type="file"/>
                    </div>
                </div>
            </>
        )

    };

    render() {
        const { places, colors, sizes } = this.props;
        const { product_exist } = this.state;
        console.log(this.state);
        return (
            <Wrapper onSubmit={this.handleSubmit}>
                <h2>1. Укажите товар</h2>
                <Form.Check checked={product_exist === 1} custom type="radio" id="1" label="Товар есть на складе" name="product_exist" value={1} onChange={this.radioHandle} />
                <Form.Check checked={product_exist === 0} custom type="radio" id="0" label="Новый товар" name="product_exist" value={0} onChange={this.radioHandle} />
                {this.renderTabs(product_exist)}
                <div className="row">
                    <div className="col-12">
                        <h2>2. Укажите цвет и размер: </h2>
                        <Form.Group>
                            <Form.Label>Выберите цвет:</Form.Label>
                            <Form.Control onChange={this.selectColorSizeChange} as="select" >
                                <option selected disabled>Выберите цвет</option>
                                {
                                    colors.map(color => (
                                        <option key={color.id} value={color.id}>{color.name}</option>
                                    ))
                                }
                            </Form.Control>
                        </Form.Group>
                        <Table striped bordered hover variant="dark" responsive>
                            <thead>
                            <tr>
                                <th>Цвет</th>
                                {
                                    sizes.map(size => <th key={size.id} >{size.name}</th>)
                                }
                            </tr>
                            </thead>
                            <tbody>
                            {
                                Object.keys(this.state.product_color_size).map(color => (
                                    <tr key={color}>
                                        <td>{colors.find(colorProps => colorProps.id === +color).name}</td>
                                        {sizes.map(size => <td key={size.id} contentEditable onKeyUp={e => this.changeColorSize(color, size.id, e.target.innerText)} />)}
                                    </tr>
                                ))
                            }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <h2>2. Укажите точку: </h2>
                <Form.Group>
                    <Form.Label>Точка:</Form.Label>
                    <Form.Control name="product_place" onChange={this.changeFieldHandle} as="select" >
                        <option selected disabled>Выберите точку</option>
                        {
                            places.map(place => (
                                <option key={place.id} value={place.id}>{place.name}</option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
                <div className="row">
                    <div className="col-12">
                        <Button variant="outline-success" type="submit" size="lg" block>Добавить</Button>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    places: state.products.places,
    colors: state.products.colors,
    types: state.products.types,
    sizes: state.products.sizes,
    models: state.products.models,
    USA: state.localSettings.currency.value
});

const mapDispatchToProps = {
    loadPlaces,
    loadColors,
    loadSizes,
    loadTypes,
    loadModels,
    addProduct
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(AddProduct));