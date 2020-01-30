import React, { lazy, Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import PageLoading from '../Components/Loading/PageLoading'

const Login = lazy(() => import('../Components/Login'));
const ProductsMainPage = lazy(() => import('../Components/SidePages/Products'));
const ProductsForPlace = lazy(() => import('../Components/SidePages/ProductsForPlace'));
const AddProduct = lazy(() => import('../Components/SidePages/AddProduct'));
const ProductsTransfer = lazy(() => import('../Components/SidePages/SecondaryPages/Transfer/ProductsTransfer'));
const TransferIncome = lazy(() => import('../Components/SidePages/SecondaryPages/Transfer/TransferIncome'));
const TransferHistory = lazy(() => import('../Components/SidePages/SecondaryPages/Transfer/TransferHistory'));
const ProductsSell = lazy(() => import('../Components/SidePages/SecondaryPages/Selling/SellProducts'));
const ProductsSellHistory = lazy(() => import('../Components/SidePages/SecondaryPages/Selling/SellHistryPlace'));
const ProductSellHistoryAll = lazy(() => import('../Components/SidePages/SecondaryPages/Selling/SellhistoryAll'));
const ProductSellPerDay = lazy(() => import('../Components/SidePages/SecondaryPages/Selling/SellForDay'));
const NotFoundPage = lazy(() => import('../Components/NotFoundPage'));
const Test = lazy(() => import('../Components/SidePages/Test'));

const RouterComponent = ({ theme = 'night', themeConfig }) => (
    <Router>
        <Suspense fallback={<PageLoading />}>
            <ThemeProvider theme={themeConfig[theme]}>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path='/store' component={AddProduct} />
                    <Route path='/place' component={ProductsForPlace} />
                    <Route path='/transfer/products' component={ProductsTransfer} />
                    <Route path='/transfer/income' component={TransferIncome} />
                    <Route path='/transfer/history' component={TransferHistory} />
                    <Route path='/sell/products' component={ProductsSell} />
                    <Route path='/sell/history' component={ProductsSellHistory} />
                    <Route path='/sell/allhistory' component={ProductSellHistoryAll} />
                    <Route path='/sell/day/:date/:place?' component={ProductSellPerDay} />
                    <Route path='/test' component={Test} />
                    <Route path='/' component={ProductsMainPage} exact />
                    <Route component={NotFoundPage} />
                </Switch>
            </ThemeProvider>
        </Suspense>
    </Router>
);

export default connect((state) => ({
    theme: state.localSettings.theme
}), null)(RouterComponent);
