import 'react-native-gesture-handler';

console.disableYellowBox = true;

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

//Importing Routes
import Routes from './src/routes/index.js';

//Importing AuthProvider
import AuthProvider from './src/contexts/auth/index.js';

function App(){
  return(
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#212121" barStyle="light-content" />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  )
}

export default App;