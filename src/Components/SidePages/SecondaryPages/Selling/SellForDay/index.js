import React, { Component } from 'react'
import { connect } from 'react-redux'

import pageContainer from '../../../../../Containers/PageContainer'
import PageHOC from '../../../HOC/PageHOC'
import BodyWrapper from '../../../HOC/BodyWrapper'
import SellForDayRow from './SellForDayRow'
import options from './options'

import {
    loadSoldPerDay
} from "../../../../../Store/Modules/SeparatedProductsStorage/actions";
import { loadPlaces, loadTypes } from "../../../../../Store/Modules/Products/actions";

class SellForDay extends Component
{

    componentDidMount() {
        console.log('SELL')
    }

    render() {
        return SellForDayRow
    }
}


const mapStateToProps = state => ({
    products: state.productsStorage,
    types: state.products.types,
    places: state.products.places,
    showAlert: state.localSettings.showAlert
});

const mapDispatchToProps = {
    loadData: (date, queryParams) => loadSoldPerDay(date, queryParams),
    loadTypes,
    loadPlaces
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(BodyWrapper(SellForDayRow), options)))