import React from 'react';
import { StyleSheet } from 'react-native';
import {Divider, Icon, Layout, Text} from '@ui-kitten/components';
import { Toolbar } from '../../components/toolbar.component';
import {
    SafeAreaLayout,
    SafeAreaLayoutElement,
    SafeAreaInset,
} from '../../components/safe-area-layout.component';

export const HomeScreen = (props): SafeAreaLayoutElement => (
    <SafeAreaLayout
        style={styles.safeArea}
        insets={SafeAreaInset.TOP}>
        <Toolbar
            title='React Navigation Ex 🐱'
            onBackPress={()=>{}}
        />

        <Divider/>
        <Layout style={styles.container}>
            <Icon name='home-outline' fill='#3366FF' width={32} height={32}/>
            <Text category='h1'>
                ABOUT
            </Text>
        </Layout>
    </SafeAreaLayout>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});