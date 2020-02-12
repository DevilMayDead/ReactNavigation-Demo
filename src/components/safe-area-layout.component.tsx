import React from 'react';
import {Layout, LayoutElement, LayoutProps} from "@ui-kitten/components";
import {} from '@ui-kitten/components'
import {EdgeInsets, useSafeArea} from "react-native-safe-area-context";
import {StyleProp, ViewStyle} from "react-native";

export enum SafeAreaInset {
    TOP = "top",
    BOTTOM = "bottom"
}

type InsetProp = SafeAreaInset | SafeAreaInset[];

interface SafeAreaLayoutProps extends LayoutProps {
    insets?: InsetProp;
}

export type SafeAreaLayoutElement = React.ReactElement<SafeAreaLayoutProps>;

function SafeAreaLayoutComponent(props: SafeAreaLayoutProps): LayoutElement {
    const safeAreaInsets: EdgeInsets = useSafeArea();
    const {insets, style, ...layoutProps} = props;

    function toStyleProp(inset: SafeAreaInset): ViewStyle {
        switch (inset) {
            case SafeAreaInset.BOTTOM: {
                return {paddingBottom: safeAreaInsets.bottom}
            }
            case SafeAreaInset.TOP: {
                return {paddingTop: safeAreaInsets.top}
            }
        }
    }

    function createInsets(): StyleProp<ViewStyle> {
        return React.Children.map(insets, toStyleProp);
    }

    return (
        <Layout {...layoutProps} style={[style, createInsets()]}/>
    );
}

export default SafeAreaLayoutComponent;