import React, {useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Importing Api
import Api from '../../services/api.js';

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [userToken, setUserToken] = useState(null);
    const [userCoins, setUserCoins] = useState(null);
    const [loadingStorage, setLoadingStorage] = useState(false);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        async function validateToken(token){
            let res = await Api.get('library/my-library', {
                headers: {
                    "x-access-token": token
                }
            })
            .then((response) => {return(response)})
            .catch((error) => {return(error)})

            if(res.data){
                return 1;
            }
            else{
                return 0;
            }
        }

        async function loadStorage(){
            setLoadingStorage(true);
            let storageToken = await AsyncStorage.getItem('userToken');

            if(storageToken){
                let user_coins = await AsyncStorage.getItem('userCoins');
                if(await validateToken(storageToken) == 1){
                    setUserToken(storageToken);
                    setUserCoins(user_coins);
                }
            }

            setLoadingStorage(false);
        }

        loadStorage();
    }, []);

    async function putCoins(newCoins){
        setUserCoins(newCoins)
    }

    async function setStorage(token, coins){
        await AsyncStorage.setItem('userToken', token);
        await AsyncStorage.setItem('userCoins', coins.toString());
    }

    async function signIn(email, password){
        setLoadingAuth(true);

        let res = await Api.post('user/signin', {
            "user_email": email,
            "user_password": password
        }).then((response) => {return(response)})
        .catch((error) => {return(error)});

        if(res.data.auth == true){
            await setStorage(res.data.user.token, res.data.user.coins);
            setUserToken(res.data.user.token);
            setUserCoins(res.data.user.coins);
            setLoadingAuth(false);
        }

        setLoadingAuth(false);
    }
    
    async function signUp(name, email, password){
        setLoadingAuth(true);

        let res = await Api.post('user/signup', {
            "user_name": name,
            "user_email": email,
            "user_password": password
        }).then((response) => {return(response)})
        .catch((error) => {return(error)});

        setLoadingAuth(false);
    }

    async function signOut(){
        await AsyncStorage.clear();
        setUserToken(null);
    }

    return(
        <AuthContext.Provider value={{userToken, loadingStorage, loadingAuth, signIn, signUp, signOut, userCoins, putCoins}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;