import { connect } from 'react-redux'

import pageContainer from '../../../../Containers/PageContainer'
import PageHOC from '../../HOC/PageHOC'
import BodyWrapper from '../../HOC/BodyWrapper'
import TransferIncomeRow from './TransferIncomeRow'
import options from './options'

import {
    loadTransferIncomeProducts
} from "../../../../Store/Modules/SeparatedProductsStorage/actions";


const mapStateToProps = state => ({
    products: state.productsStorage,
    types: state.products.types,
    places: state.products.places,
    showAlert: state.localSettings.showAlert
})

const mapDispatchToProps = {
    loadData: loadTransferIncomeProducts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(BodyWrapper(TransferIncomeRow), options)))