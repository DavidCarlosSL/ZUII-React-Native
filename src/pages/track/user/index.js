import React from 'react';
import { View} from 'react-native';

import UserTracks from '../../../components/trackuser/tracks.user.js';
import TrackProvider from '../../../contexts/track/index.js';

function Track({ route }){
    return(
        <View style={{flex: 1, backgroundColor: '#212121'}}>
            <TrackProvider>
                <UserTracks albumId={route.params.albumId} />
            </TrackProvider>
        </View>
    )
}

export default Track;