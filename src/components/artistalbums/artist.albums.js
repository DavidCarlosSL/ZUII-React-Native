import React, {useContext, useEffect} from 'react';
import {View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { ArtistContext } from '../../contexts/artist/index.js';

import { AlbumImage, AlbumName } from '../userlibrary/styles/styles.js';
import { Container, ArtistAlbumList, ErrorMessage } from './styles/styles.js';

function ArtistsAlbumsItem({data}){
    const navigation = useNavigation();

    return(
        <ArtistAlbumList>
            <TouchableOpacity onPress={() => (navigation.navigate('TrackAlbum', {albumId: data.id}))}>
                <AlbumImage source={{uri: `http://mikaellybuckets3.s3.us-east-2.amazonaws.com${data.album_image}`}}/>
            </TouchableOpacity>
            <AlbumName> <Icon name="animation-outline" size={15}/> {data.album_name} </AlbumName>
        </ArtistAlbumList>
    )
}

function ArtistAlbums({ route }){
    const { artistAlbums, loadingArtistAlbums, loadArtistAlbums } = useContext(ArtistContext);

    useEffect(() => {
        function handleLoadArtistAlbums(){
            loadArtistAlbums(route.params.artistId);
        }

        handleLoadArtistAlbums();
    }, [])

    const numColumns = 2;

    return(
        <Container>
            {loadingArtistAlbums? (
                <ActivityIndicator color="#842727" size={55}/>
            ): artistAlbums.length ? (
                <View>
                    <FlatList
                    data={artistAlbums}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (<ArtistsAlbumsItem data={item} />)}
                    numColumns={numColumns}
                    showsVerticalScrollIndicator={false}
                    />
                </View>
            ): (
                <View style={{alignItems: 'center'}}> 
                    <Icon name="emoticon-sad-outline" size={35} color="#fff"/>
                    <ErrorMessage> Something went wrong</ErrorMessage>
                </View>
            )
            }
        </Container>
    )
}

export default ArtistAlbums;