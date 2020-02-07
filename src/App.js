import React from 'react';
import { Provider } from 'react-redux'
import Router from './Router'
import store from './Store/createStore'
import {
    backGroundColor,
    primaryColor,
    secondaryColor,
    secondaryColorRGBA,
    tertiaryColor,
} from './Mixins'

const theme = {
    dark: {
        primary: primaryColor,
        secondary: secondaryColor,
        secondaryRGBA: secondaryColorRGBA,
        tertiary: tertiaryColor,
        backGroundColor
    },
    light: {
        primary: 'red',
        secondary: 'green',
        secondaryRGBA: 'green',
        tertiary: 'blue',
        backGroundColor: 'yellow'
    }
};

const App = () => (
    <Provider store={store}>
        <Router themeConfig={theme} />
    </Provider>
);

export default App


