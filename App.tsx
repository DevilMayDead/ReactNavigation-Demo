import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components'
import {dark, light, mapping} from '@eva-design/eva'
import AppNavigator from "./src/navigation/app.navigator";

function App(props) {
    return (
        <ApplicationProvider mapping={mapping} theme={dark}>
            <AppNavigator/>
        </ApplicationProvider>
    );
}

export default App;