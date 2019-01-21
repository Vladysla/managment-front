import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import ProductsMainPage from '../Components/SidePages/Products'

import NotFoundPage from '../Components/NotFoundPage'

export default () => (
    <Router>
        <Switch>
            <Route path='/' component={ProductsMainPage} exact />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
)