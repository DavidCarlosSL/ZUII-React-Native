import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

//Importing Api
import Api from '../../services/api.js';

export const TrackContext = createContext({});

function TrackProvider({ children }){
    const [trackUser, setTrackUser] = useState([]);
    const [loadingTrackData, setLoadingTrackData] = useState(false);
    const [trackAlbum, setTrackAlbum] = useState([]);

    async function loadTrackAlbum(albumId){
        setLoadingTrackData(true);

        let res = await Api.get(`track/album/${albumId}`);

        setTrackAlbum(res.data.response);

        setLoadingTrackData(false);
    }

    async function loadTrackUser(albumId){
        setLoadingTrackData(true);

        const userToken = await AsyncStorage.getItem('userToken');

        let res = await Api.get(`library/my-library/album/${albumId}`, {
            headers: {
                "x-access-token": userToken
            }
        })
        .then((response) => (response))
        .catch((error) => (error));

        if(res.data.response){
            setTrackUser(res.data.response);
            setLoadingTrackData(false);
        }

        setLoadingTrackData(false);
    }

    return(
        <TrackContext.Provider value={{trackUser, loadTrackUser, loadingTrackData, trackAlbum, loadTrackAlbum}}>
            {children}
        </TrackContext.Provider>
    )
}

export default TrackProvider;