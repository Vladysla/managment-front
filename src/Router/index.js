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
import ProductsTransfer from '../Components/SidePages/ProductsTransfer'
import TransferIncome from '../Components/SidePages/SecondaryPages/TransferIncome'

import NotFoundPage from '../Components/NotFoundPage'

export default () => (
    <Router>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/store' component={AddProduct} />
            <Route path='/place' component={ProductsForPlace} />
            <Route path='/transfer/products' component={ProductsTransfer} />
            <Route path='/transfer/income' component={TransferIncome} />
            <Route path='/' component={ProductsMainPage} exact />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)