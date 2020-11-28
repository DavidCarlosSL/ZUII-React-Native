import React from 'react';
import { View } from 'react-native';

import UserPurchases from '../../components/purchases';

function Purchases(){
    return(
        <View style={{flex: 1, backgroundColor: '#212121'}}>
            <UserPurchases />
        </View>
    )
}

export default Purchases;