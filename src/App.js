import React from 'react';
import { Provider } from 'react-redux'
import Router from './Router'
import store from './Store/createStore'
import { ThemeProvider } from 'styled-components'
import {
    backGroundColor,
    primaryColor,
    secondaryColor,
    tertiaryColor
} from './Mixins'

const theme = {
    primary: primaryColor,
    secondary: secondaryColor,
    tertiary: tertiaryColor,
    backGroundColor
}

const App = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Router />
        </ThemeProvider>
    </Provider>
)

export default App


