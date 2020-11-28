import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Importing Pages
import SignIn from '../../pages/signIn/index.js';
import SignUp from '../../pages/signup/index.js';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    const headerStyle = {
        headerStyle: {
            backgroundColor: '#212121',
            borderBottomWidth: 1,
            borderBottomColor: '#842727'
        },
        headerTintColor: '#fff',
        headerTitle: null
    }

    return(
        <AuthStack.Navigator initialRouteName="SignIn">
            <AuthStack.Screen 
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />
            <AuthStack.Screen 
            name="SignUp"
            component={SignUp}
            options={headerStyle}
            />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;