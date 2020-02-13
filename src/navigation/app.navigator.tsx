import React from 'react';
import {BaseNavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeNavigator from "./home.navigator";

const Stack=createStackNavigator();

function AppNavigator(props) {
    return (
        <BaseNavigationContainer>
            <Stack.Navigator headerMode={"none"}>
                <Stack.Screen name={"app"} component={HomeNavigator}/>

            </Stack.Navigator>
        </BaseNavigationContainer>
    );
}

export default AppNavigator;