import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importing Pages
import Home from '../home/index.js';
import Shop from '../shop/index.js';
import Purchases from '../purchase/index.js';

const IndexTabs = createMaterialBottomTabNavigator();

function IndexTabsScreen(){
    return(
        <IndexTabs.Navigator initialRouteName="Home" 
        barStyle={{
            backgroundColor: '#212121', 
            borderTopWidth: 1, 
            borderTopColor: 'rgba(0, 0, 0, 0.1)'}} 
        shifting={true}>
            <IndexTabs.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Library',
                tabBarIcon: () => <Icon name="library-music" size={25} color="#fff"/>
            }}/>
            <IndexTabs.Screen name="Shop" component={Shop} options={{
                tabBarLabel: 'Shop',
                tabBarIcon: () => ( <Icon name="cart-outline" size={25} color="#fff"/>)
                }} />
            <IndexTabs.Screen name="Purchases" component={Purchases} options={{
                tabBarLabel: 'Purchases',
                tabBarIcon: () => ( <Icon name="coin" size={25} color="#fff"/> )
            }}/>
        </IndexTabs.Navigator>
    )
}

export default IndexTabsScreen;