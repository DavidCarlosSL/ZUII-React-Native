import React, { useState, useEffect, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { LibraryContext } from '../../contexts/library/index.js';
import { AuthContext } from '../../contexts/auth/index.js';

//Importing Api
import Api from '../../services/api.js';

export const PurchaseContext = createContext({});

function PurchaseProvider({ children }){

    const { UpdateLibrary } = useContext(LibraryContext);
    const { PutCoins } = useContext(AuthContext);

    const [userPurchases, setUserPurchases] = useState([]);
    const [newPurchase, setNewPurchase] = useState(false);
    const [loadingPurchases, setLoadingPurchases] = useState(false);

    async function updateData(newCoins){
        await AsyncStorage.removeItem('userLibrary');
        await AsyncStorage.removeItem('userPurchases');
        await AsyncStorage.setItem('userCoins', newCoins.toString());
        PutCoins(newCoins);
        setNewPurchase(true);
        UpdateLibrary();
    }

    async function PurchaseTrack(trackId, priceTrack){
        let userToken = await AsyncStorage.getItem('userToken');
        let userCoins = await AsyncStorage.getItem('userCoins');

        let res = await Api.post(`purchase/${trackId}`, {}, {
            headers: {"x-access-token": userToken}
        } )
        .then((response) => {return(response)})
        .catch((error) => {return(error)});

        let newCoins = parseFloat(userCoins) - priceTrack;

        updateData(newCoins);
    }
    
    useEffect(() => {
        async function setPurchases(){
            let userToken = await AsyncStorage.getItem('userToken');

            let res = await Api.get('purchase/my-purchases', {
                headers: {
                    "x-access-token": userToken
                }
            }).then((response) => {return(response)})
            .catch((error) => {return(error)});

            if(res.data.response){
                await AsyncStorage.setItem('userPurchases', JSON.stringify(res.data.response));
                setUserPurchases(JSON.stringify(res.data.response));
                setLoadingPurchases(false);
            }else{
                setUserPurchases([]);
                setLoadingPurchases(false);
            }
        }

        async function loadPurchasesStorage(){
            setLoadingPurchases(true);

            let purchasesStorage = await AsyncStorage.getItem('userPurchases');

            if(purchasesStorage){
                setUserPurchases(purchasesStorage);
                setLoadingPurchases(false);
            }else{
                setPurchases();
            }
        }

        loadPurchasesStorage();
    }, [newPurchase])

    return(
        <PurchaseContext.Provider value={{loadingPurchases, userPurchases, PurchaseTrack }}>
            {children}
        </PurchaseContext.Provider>
    )
}

export default PurchaseProvider;
