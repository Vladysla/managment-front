import { connect } from 'react-redux'

import pageContainer from '../../../Containers/PageContainer'
import PageHOC from './../HOC/PageHOC'
import BodyWrapper from '../HOC/BodyWrapper'
import ProductsPlaceTableRow from './ProductsPlaceTableRow'
import options from './options'

import {
    loadProducts,
    loadPlaces,
    loadTypes
} from '../../../Store/Modules/Products/actions'


const mapStateToProps = state => ({
    products: state.products,
    places: state.products.places,
    types: state.products.types,
})

const mapDispatchToProps = {
    loadData: loadProducts,
    loadPlaces,
    loadTypes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(BodyWrapper(ProductsPlaceTableRow), options)))