import React from 'react';
import { View } from 'react-native';

//Importing Components
import Library from '../../components/userlibrary/user.library.js';

function Home(){
    return(
        <View style={{flex: 1, backgroundColor: '#212121'}}>
            <Library/>
        </View>
    )
}

export default Home;