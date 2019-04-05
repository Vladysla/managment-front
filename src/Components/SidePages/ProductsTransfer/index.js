import { connect } from 'react-redux'

import pageContainer from '../../../Containers/PageContainer'
import PageHOC from './../HOC/PageHOC'
import BodyWrapper from '../HOC/BodyWrapper'
import ProductsTransferTableRow from './ProductsTransferTableRow'
import options from './options'

import {
    loadSeparateProducts,
    transferProducts
} from "../../../Store/Modules/SeparatedProducts/actions";
import { loadPlaces, loadTypes } from "../../../Store/Modules/Products/actions";
import { showAlert, closeAlert } from '../../../Store/Modules/LocalSettings/actions'


const mapStateToProps = state => ({
    products: state.separatedProducts,
    types: state.products.types,
    places: state.products.places,
    showAlert: state.localSettings.showAlert
})

const mapDispatchToProps = {
    loadData: loadSeparateProducts,
    loadTypes,
    loadPlaces,
    transferProducts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(BodyWrapper(ProductsTransferTableRow), options)))