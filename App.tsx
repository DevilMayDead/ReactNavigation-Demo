import React from 'react';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components'
import {dark, light, mapping} from '@eva-design/eva'

function App(props) {
    return (
        <ApplicationProvider mapping={mapping} theme={dark}>
            <Layout style={{flex: 1}}>
                <Text>Welcome</Text>
            </Layout>
         </ApplicationProvider>
    );
}
export default App;