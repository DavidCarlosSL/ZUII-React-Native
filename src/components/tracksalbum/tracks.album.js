import React, { useContext, useEffect } from 'react';
import { View, ScrollView, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TrackContext } from '../../contexts/track';
import { PurchaseContext } from '../../contexts/purchase/index.js';

import { ArtistAlbumView, AlbumImage, ArtistName, AlbumName, TrackList, TrackItem, TrackName, Cart, 
    TrackDuration, TrackPrice, ErrorMessageView, ErrorMessage } from './styles/styles.js';

function TracksAlbumItem({ data }){
    const { PurchaseTrack } = useContext(PurchaseContext);

    return(
        <TrackList>
            <View style={{flexDirection: 'row', marginLeft: 3}}>
                <Icon name="music-box-outline" size={20} color="#fff"/>
                <TrackItem>
                    <TrackName> {data.track_name} </TrackName>
                    <Cart>
                        <TouchableOpacity onPress={() => (PurchaseTrack(data.id, data.track_price))}>
                            <Icon name="cart-arrow-down" size={25} color="#fff"/>
                        </TouchableOpacity>
                    </Cart>
                </TrackItem>
            </View>
            <View style={{flex: 1, flexDirection: 'row', width: 385}}>
                <View style={{alignSelf: 'flex-start', flex: 1}}>
                    <TrackDuration> <Icon name="clock-outline" size={18}/> {data.track_duration} s </TrackDuration>
                </View>
                <View style={{alignSelf: 'flex-end', flexDirection: 'row'}}>
                    <Icon name="coin" size={22} color="#fff"/>
                    <TrackPrice>  {data.track_price} </TrackPrice>
                </View>
            </View>
        </TrackList>
    )
}

function TracksAlbum({ albumId }){

    const {trackAlbum, loadTrackAlbum, loadingTrackData} = useContext(TrackContext);

    useEffect(() => {
        function handleLoadTracksAlbum(){
            loadTrackAlbum(albumId);
        }

        handleLoadTracksAlbum();
    }, [])

    return(
        <View style={{flex: 1, justifyContent: 'center'}}>
            {loadingTrackData ? (
                <View>
                    <ActivityIndicator color="#842727" size={65}/>
                </View>
            ) : trackAlbum.length ? (
                <View style={{flex: 1, marginLeft: 8}}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ArtistAlbumView>
                            <ArtistAlbumView>
                                <AlbumImage source={{uri: `http://mikaellybuckets3.s3.us-east-2.amazonaws.com${trackAlbum[0].album_image}`}} />
                            </ArtistAlbumView>
                            <ArtistAlbumView style={{marginTop: 10}}>
                                <ArtistName> <Icon name="artist" size={20} /> {trackAlbum[0].artist_name} </ArtistName>
                            </ArtistAlbumView>
                            <ArtistAlbumView>
                                <AlbumName> <Icon name="animation-outline" size={20}/>  {trackAlbum[0].album_name} </AlbumName>
                            </ArtistAlbumView>
                        </ArtistAlbumView>
                        <View style={{marginTop: 40}}>
                            <FlatList
                            data={trackAlbum}
                            keyExtractor={(item) => (item.id.toString())}
                            renderItem={({item}) => (<TracksAlbumItem data={item} />)}
                            />
                        </View>
                    </ScrollView>
                </View>
            ) : (
                <ErrorMessageView> 
                    <Icon name="emoticon-sad-outline" size={35} color="#fff"/>
                    <ErrorMessage> Something went wrong</ErrorMessage>
                </ErrorMessageView>
            )
            }
        </View>
    )
}

export default TracksAlbum;