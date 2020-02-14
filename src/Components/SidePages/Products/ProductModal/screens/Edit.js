import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { getImage } from '../../../../../API';
import { loadModels, loadTypes } from '../../../../../Store/Modules/Products/actions';
import { editProduct } from '../../../../../Store/Modules/Product/actions';

function isNumeric (x) {
    return ((typeof x === 'number' || typeof x === 'string') && !isNaN(Number(x)));
}

class Edit extends Component {
    state = {
        brand: '',
        model: '',
        price_arrival: '',
        price_sell: '',
        type_id: '',
        photo: null,
        photo_path: '',
        fieldError: []
    };

    componentDidMount() {
        const { product: { brand, model, price_arrival, price_sell, type_id, photo } = {} } = this.props;
        const photo_path = getImage(photo);
        this.setState({
            brand,
            model,
            price_arrival,
            price_sell,
            type_id,
            photo_path
        });
        this.props.loadModels();
        this.props.loadTypes();
    }

    productFields = [
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

    changeFieldHandle = e => {
        this.setState({ [e.target.name]: e.target.value });
        this.checkOnError(e.target.name, e.target.value);
    };

    isFieldsEmpty = (arrayFields = []) => {
        const stateFields = arrayFields.map(field => this.state[field]);
        return stateFields.some(field => field.length === 0);
    };

    checkOnError = (field = '', value = '') => {
        this.setState(({ fieldError }) => ({
            fieldError: value.length < 2 ? [...fieldError, field] : fieldError.filter(f => f !== field)
        }));

        if (field === 'price_sell' || field === 'price_arrival') {
            this.setState(({ fieldError }) => ({
                fieldError: isNumeric(value) && (value.length > 1) ? fieldError.filter(f => f !== field) : [...fieldError, field]
            }));
        }

        if (field === 'model') {
            const modelExist = this.props.models.find(item => item.model === value);
            this.setState(({ fieldError }) => ({
                fieldError: modelExist || (value.length < 2) ? [...fieldError, field] : fieldError.filter(f => f !== field)
            }));
        }
    };

    photoChange = e => {
        this.setState({
            photo: e.target.files[0],
            photo_path: URL.createObjectURL(e.target.files[0])
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const isEmpty = this.isFieldsEmpty(this.productFields.map(f => f.name));
        const { productId } = this.props;
        if (this.state.fieldError.length || isEmpty) {
            this.formRef.scrollTo({
                y: 0,
            });
            return;
        }
        const formData = {
            id: productId,
            brand: this.state.brand,
            model: this.state.model,
            price_arrival: this.state.price_arrival,
            price_sell: this.state.price_sell,
            type_id: this.state.type_id,
            photo: this.state.photo,
        };
        this.props.editProduct(formData)
            .finally(() => {
                this.props.closeModal();
            })
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} ref={form => this.formRef = form}>
                {this.productFields.map(field => (
                    <div key={field.name}>
                        <Form.Group>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                name={field.name}
                                placeholder={field.label}
                                value={this.state[field.name]}
                                onChange={e => this.changeFieldHandle(e)}
                                isInvalid={this.state.fieldError.includes(field.name)}
                            />
                        </Form.Group>
                    </div>
                ))}
                <Form.Group>
                    <Form.Label>Выберите тип товара:</Form.Label>
                    <Form.Control defaultValue="0" onChange={this.changeFieldHandle} name="type_id" as="select" >
                        <option value={this.state.type_id} disabled>Выберите тип товара</option>
                        {this.props.types.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <div className="row">
                    <div className="col-12">
                        <Image
                            height={270}
                            width={270}
                            thumbnail
                            src={this.state.photo_path}
                            alt="Product picture"
                        />
                        <input onChange={this.photoChange} name="photo" type="file"/>
                    </div>
                </div>
                <Button
                    type="submit"
                    className="font-weight-bold w-100 mt-4"
                    variant="outline-success"
                >
                    Изменить
                </Button>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    types: state.products.types,
    models: state.products.models
});

const mapDispatchToProps = {
    loadTypes,
    loadModels,
    editProduct
};

export default connect(
    mapStateToProps, mapDispatchToProps
)(Edit);
