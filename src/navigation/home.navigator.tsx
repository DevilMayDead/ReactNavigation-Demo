import React, {ReactElement} from 'react';
import {AppRoute} from "./app.route";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {ParamListBase} from '@react-navigation/core'
import PersonalScreen from "../scenes/personal";
import {HomeScreen} from "../scenes/home";
import {HomeIcon} from "../assets/icons";

interface HomeNavigatorParams extends ParamListBase {
    [AppRoute.HOME]: undefined;
    [AppRoute.PERSONAL]: undefined;
}

const Tab = createBottomTabNavigator<HomeNavigatorParams>();

type TabNavigatorProps = React.ComponentProps<typeof Tab.Navigator>;

function HomeNavigator(config: Partial<TabNavigatorProps>): ReactElement {
    return (
        <Tab.Navigator {...config}>
            <Tab.Screen name={AppRoute.HOME} component={HomeScreen}
                        options={{
                            title: "Home",
                            tabBarIcon: (({size, color}) => (<HomeIcon width={size} height={size} fill={color}/>))
                        }}/>
            <Tab.Screen name={AppRoute.PERSONAL} component={PersonalScreen}
                        options={{
                            title: "Personal",
                            tabBarIcon: (({size, color}) => (<HomeIcon width={size} height={size} fill={color}/>))
                        }}/>
        </Tab.Navigator>
    );
}

export default HomeNavigator;