import React from 'react';
import {ApplicationProvider, IconRegistry, Layout, Text} from '@ui-kitten/components'
import {dark, light, mapping} from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import AppNavigator from "./src/navigation/app.navigator";
import {SafeAreaProvider} from 'react-native-safe-area-context'

function App(props) {
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider mapping={mapping} theme={light}>
                <SafeAreaProvider>
                    <AppNavigator/>
                </SafeAreaProvider>

            </ApplicationProvider>
        </React.Fragment>
    );
}

export default App;