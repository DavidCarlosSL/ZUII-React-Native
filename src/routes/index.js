import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

//Importing AuthContext
import { AuthContext } from '../contexts/auth/index.js';

//Importing routes
import AuthRoutes from './auth/index.js';
import AppRoutes from './app/index.js';

//Importing Providers
import CoinsProvider from '../contexts/coins/index.js';
import ArtistProvider from '../contexts/artist/index.js';
import PurchaseProvider from '../contexts/purchase/index.js';
import LibraryProvider from '../contexts/library/index.js';

function Routes() {
    const {userToken, loadingStorage} = useContext(AuthContext);

    if(loadingStorage){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#424242"}}>
                <ActivityIndicator color="#842727" size={70}/>
            </View>
        )
    }

    return(
            userToken ? (
                <CoinsProvider>
                    <LibraryProvider>
                        <ArtistProvider>
                            <PurchaseProvider>
                                <AppRoutes/>
                            </PurchaseProvider>
                        </ArtistProvider>
                    </LibraryProvider>
                </CoinsProvider>
            ) : (<AuthRoutes/>)
    );
};

export default Routes;