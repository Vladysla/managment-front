import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import pageContainer from '../../../Containers/PageContainer'
import PageHOC from './../HOC/PageHOC'
import ProductsTableBody from './ProductsTableBody'

import {
    loadProducts
} from '../../../Store/Modules/Products/actions'

import options from './options'

const mapStateToProps = state => state.products

const mapDispatchToProps = {
    loadData: loadProducts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(ProductsTableBody, options)))