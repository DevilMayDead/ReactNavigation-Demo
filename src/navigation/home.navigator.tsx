import React, {ReactElement} from 'react';
import {AppRoute} from "./app.route";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ParamListBase} from '@react-navigation/core'
import PersonalScreen from "../scenes/personal";
import HomeScreen from "../scenes/home";
import {BackIcon} from "../assets/icons";

interface HomeNavigatorParams extends ParamListBase {
    [AppRoute.HOME]: undefined;
    [AppRoute.PERSONAL]: undefined;
}

const Tab = createBottomTabNavigator<HomeNavigatorParams>();

type TabNavigatorProps = React.ComponentProps<typeof Tab.Navigator>

function HomeNavigator(config: Partial<TabNavigatorProps>): ReactElement {
    return (
        <Tab.Navigator {...config}>
            <Tab.Screen name={AppRoute.HOME} component={HomeScreen}/>
            <Tab.Screen name={AppRoute.PERSONAL} component={PersonalScreen}/>
        </Tab.Navigator>
    );
}

export default HomeNavigator;