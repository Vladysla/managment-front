import React, {Component} from 'react';
import { connect } from 'react-redux';
import pageContainer from '../../../Containers/PageContainer'

import {
    Wrapper
} from './Components'

import {
    loadPlaces,
    loadColors,
    loadSizes,
    loadTypes
} from '../../../Store/Modules/Products/actions'

class AddProduct extends Component {

    componentDidMount() {
        this.props.loadPlaces();
        this.props.loadColors();
        this.props.loadSizes();
        this.props.loadTypes()
    }
    state ={
        product_exist: 0
    }

    radioHandle = e => {
        this.setState({ product_exist: +e.target.value })
    }

    renderTabs = ifExist => {
        if (ifExist) {
            return (
                <div>
                    <select name="product">
                        <option value="1">Prod 1</option>
                        <option value="2">Prod 2</option>
                    </select>
                </div>
            )
        }
        return (
            <div>
                <input type="text" placeholder="Brand"/>
                <input type="text" placeholder="Model"/>
                <input type="text" placeholder="Price"/>
                <input type="text"/>
            </div>
        )

    }

    render() {
        const { places, colors, sizes, types } = this.props
        const { product_exist } = this.state
        return (
            <Wrapper>
                Add new Product

                <h2>1. Укажите товар</h2>
                <input type="radio" name="product_exist" value={1} onChange={this.radioHandle} checked={product_exist === 1} />
                <input type="radio" name="product_exist" value={0} onChange={this.radioHandle} checked={product_exist === 0} />
                {this.renderTabs(product_exist)}
                <h2>2. Укажите точку: </h2>
                <select name="place">
                    {
                        places.map(place => (
                            <option key={place.id} value={place.id}>{place.name}</option>
                        ))
                    }
                </select>
            </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
    places: state.products.places,
    colors: state.products.colors,
    types: state.products.types,
    sizes: state.products.sizes
});

const mapDispatchToProps = {
    loadPlaces,
    loadColors,
    loadSizes,
    loadTypes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(AddProduct));