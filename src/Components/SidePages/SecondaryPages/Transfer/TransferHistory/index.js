import { connect } from 'react-redux'

import pageContainer from '../../../../../Containers/PageContainer'
import PageHOC from '../../../HOC/PageHOC'
import BodyWrapper from '../../../HOC/BodyWrapper'

import TransferHistoryRow from './TransferHistoryRow'
import options from './options'

import {
    loadTransferHistoryProducts
} from '../../../../../Store/Modules/SeparatedProductsStorage/actions'
import {loadPlaces, loadTypes} from "../../../../../Store/Modules/Products/actions";

const mapStateToProps = state => ({
    products: state.productsStorage,
    types: state.products.types,
    places: state.products.places,
    showAlert: state.localSettings.showAlert
});

const mapDispatchToProps = {
    loadData: loadTransferHistoryProducts,
    loadTypes,
    loadPlaces,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(pageContainer(PageHOC(BodyWrapper(TransferHistoryRow), options)))