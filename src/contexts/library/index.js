import React, {useState, useEffect, createContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Importing Api
import Api from '../../services/api.js';

export const LibraryContext = createContext({});

function LibraryProvider({ children }){

    const [userLibrary, setUserLibrary] = useState([]);
    const [updateLibrary, setUpdateLibrary] = useState(false);
    const [loadingLibraryStorage, setLoadingLibraryStorage] = useState(false);

    async function UpdateLibrary(){
        setUpdateLibrary(true);
    }

    useEffect(() => {
        async function setLibrary(){
            const userToken = await AsyncStorage.getItem('userToken');

            let res = await Api.get('library/my-library', {
                headers: {
                    "x-access-token": userToken
                }
            }).then((response) => {return(response)})
            .catch((error) => {return(error)});

            if(res.data.response){
                await AsyncStorage.setItem('userLibrary', JSON.stringify(res.data.response));
                setUserLibrary(JSON.stringify(res.data.response));
                setLoadingLibraryStorage(false);
            }else{
                setUserLibrary([]);
                setLoadingLibraryStorage(false);
            }

        }

        async function loadLibraryStorage(){
            setLoadingLibraryStorage(true);
            const libraryStorage = await AsyncStorage.getItem('userLibrary');

            if(libraryStorage){
                setUserLibrary(libraryStorage);
                setLoadingLibraryStorage(false);
            }else{
                setLibrary();
            }
        }

        loadLibraryStorage();
    }, [updateLibrary]);

    return(
        <LibraryContext.Provider value={{userLibrary, loadingLibraryStorage, UpdateLibrary}}>
            {children}
        </LibraryContext.Provider>
    )
}

export default LibraryProvider;
