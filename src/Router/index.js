import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import ProductsMainPage from '../Components/SidePages/Products'
import Login from '../Components/Login'
import AddProduct from '../Components/SidePages/AddProduct'
import Test from '../Components/SidePages/Test'

import NotFoundPage from '../Components/NotFoundPage'

export default () => (
    <Router>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/store' component={AddProduct} />
            <Route path='/test' component={Test} />
            <Route path='/' component={ProductsMainPage} exact />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)