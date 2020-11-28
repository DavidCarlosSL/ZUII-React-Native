import React from 'react';
import { View } from 'react-native';

//Importing Components
import Artists from '../../components/artists/artists.js';

import TrackProvider from '../../contexts/track/index.js';

function Shop(){
    return(
        <View style={{flex: 1, backgroundColor: '#212121'}}>
            <TrackProvider>
                <Artists />
            </TrackProvider>
        </View>
    )
}

export default Shop;