import { connect } from 'react-redux'

import pageContainer from '../../../Containers/PageContainer'
import PageHOC from './../HOC/PageHOC'
import BodyWrapper from '../HOC/BodyWrapper'
import ProductsPlaceTableRow from './ProductsPlaceTableRow'
import options from './options'
import {loadPlaces, loadProducts, loadTypes} from "../../../Store/Modules/Products/actions";


const mapStateToProps = state => ({
    products: state.products,
    places: state.products.places
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