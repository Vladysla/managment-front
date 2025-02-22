import { connect } from 'react-redux'

import pageContainer from '../../../Containers/PageContainer'
import PageHOC from './../HOC/PageHOC'
import BodyWrapper from '../HOC/BodyWrapper'
import ProductsTableRow from './ProductsTableRow'
import options from './options'

import {
    loadProducts,
    loadPlaces
} from '../../../Store/Modules/Products/actions'


const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = {
    loadData: loadProducts,
    loadPlaces
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(BodyWrapper(ProductsTableRow), options)))