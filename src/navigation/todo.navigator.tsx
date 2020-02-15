import React from 'react';
import {View} from "react-native";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

const TopTab=createMaterialTopTabNavigator();

function TodoNavigator(props):React.ReactElement {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name={}/>

    </TopTab.Navigator>
);
}

export default TodoNavigator;