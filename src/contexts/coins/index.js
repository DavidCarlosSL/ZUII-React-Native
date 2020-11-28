import React, { createContext, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import { AuthContext } from '../auth/index.js';

export const CoinsContext = createContext({});

function CoinsProvider({ children }){
    const { putCoins } = useContext(AuthContext);

    async function AddCoins(value){

        value = parseFloat(value);
        let userToken = await AsyncStorage.getItem('userToken');

        let res = await axios.request({
            baseURL: 'http://ec2-54-232-163-45.sa-east-1.compute.amazonaws.com:3000/',
            url: 'user/coins/add',
            method: 'put',
            headers: {"x-access-token": userToken},
            data: {"new_coins": value}
        });

        if(res.data.message){
            let userCoins = await AsyncStorage.getItem('userCoins');
            let newCoins = value + parseFloat(userCoins);

            await AsyncStorage.setItem('userCoins', newCoins.toString());
            putCoins(newCoins);
        }
        
    }

    return(
        <CoinsContext.Provider value={{AddCoins}}>
            {children}
        </CoinsContext.Provider>
    )
}

export default CoinsProvider;