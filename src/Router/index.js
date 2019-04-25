import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import ProductsMainPage from '../Components/SidePages/Products'
import ProductsForPlace from '../Components/SidePages/ProductsForPlace'
import Login from '../Components/Login'
import AddProduct from '../Components/SidePages/AddProduct'
import ProductsTransfer from '../Components/SidePages/SecondaryPages/Transfer/ProductsTransfer'
import TransferIncome from '../Components/SidePages/SecondaryPages/Transfer/TransferIncome'
import TransferHistory from '../Components/SidePages/SecondaryPages/Transfer/TransferHistory'
import ProductsSell from '../Components/SidePages/SecondaryPages/Selling/SellProducts'
import ProductsSellHistory from '../Components/SidePages/SecondaryPages/Selling/SellHistryPlace'
import ProductSellHistoryAll from '../Components/SidePages/SecondaryPages/Selling/SellhistoryAll'

import NotFoundPage from '../Components/NotFoundPage'

export default () => (
    <Router>
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
            <Route path='/' component={ProductsMainPage} exact />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)