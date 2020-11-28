import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Importing Pages
import IndexStackScreen from '../../pages/index/index.stack.js';

import DrawerContent from '../../pages/drawercontent/drawer.content.js';

const AppDrawer = createDrawerNavigator();

function AppRoutes (){
    return(
        <AppDrawer.Navigator drawerContent={props => <DrawerContent { ... props} /> } drawerStyle={{
            backgroundColor: '#212121',
            width: 230
           }}
           drawerContentOptions={{
               activeTintColor: '#FFF'
           }}
           initialRouteName="Home">
            <AppDrawer.Screen name="IndexStack" component={IndexStackScreen} options={{title: 'Library'}}/>
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;