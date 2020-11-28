import React, { useContext, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importing Context
import { TrackContext } from '../../contexts/track/index.js';

//Importing Styles
import { TrackList, AlbumImage, Info, ArtistName, AlbumName, TrackName, TrackDuration } from './styles/styles.js';

function ItemTrack({ data }){
    return(
        <TrackList>
            <View style={{flexDirection: 'row'}}>
                <AlbumImage source={{uri: `http://mikaellybuckets3.s3.us-east-2.amazonaws.com${data.album_image}`}}/>
                <Info style={{flexDirection: 'column'}}>
                    <ArtistName> <Icon name="artist" size={20} /> {data.artist_name} </ArtistName>
                    <AlbumName> <Icon name="animation-outline" size={20}/> {data.album_name} </AlbumName>
                    <TrackName> <Icon name="music-box-outline" size={20}/> {data.track_name} </TrackName>
                    <TrackDuration> <Icon name="clock-outline" size={20}/> {data.track_duration} s </TrackDuration>
                </Info>
            </View>
        </TrackList>
    )
}

function UserTracks({ albumId }){

    const {trackUser, loadingTrackData, loadTrackUser} = useContext(TrackContext);

    useEffect(() => {
        function handleLoadTrackUser(){
            loadTrackUser(albumId);
        }

        handleLoadTrackUser();
    }, [])

    return(
        <View style={{flex: 1}}>
            {
                loadingTrackData ? (
                    <View>
                        <ActivityIndicator color="#842727" size={65}/>
                    </View>
                ) : trackUser.length ? (
                    <View>
                        <FlatList
                        data={trackUser}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => ( <ItemTrack data={item} /> )}
                        showsVerticalScrollIndicator={false}
                        />
                    </View>
                ) : (
                    <View style={{alignSelf: 'center', alignItems: 'center'}}> 
                        <Icon name="emoticon-sad-outline" size={35} color="#fff"/>
                        <Text style={{fontSize: 28, color: '#fff'}}> Something went wrong</Text>
                    </View>
                )
            }
        </View>
    )
}

export default UserTracks;