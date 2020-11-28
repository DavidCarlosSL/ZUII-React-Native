import React, { useContext } from 'react';
import {View, ActivityIndicator, FlatList, TouchableOpacity, Text, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LibraryContext } from '../../contexts/library';

import { AlbumList, AlbumImage, ArtistName, AlbumName, EmptyLibrary, BuyLink, TextBuyLink } from './styles/styles.js';

function ItemLibrary({ data }){
    const navigation = useNavigation();

    return(
        <AlbumList>
            <TouchableOpacity onPress={() => (navigation.navigate('TrackUser', {albumId: data.id}))}>
                <AlbumImage source={{uri: `http://mikaellybuckets3.s3.us-east-2.amazonaws.com${data.album_image}`}} />
            </TouchableOpacity>
            <ArtistName> <Icon name="artist" size={15}/> {data.artist_name} </ArtistName>
            <AlbumName> <Icon name="animation-outline" size={15}/> {data.album_name} </AlbumName>
        </AlbumList>
    )
}

function Library(){
    const navigation = useNavigation();

    const {userLibrary, loadingLibraryStorage} = useContext(LibraryContext);

    const numColumns = 2;
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {loadingLibraryStorage ? (
                <ActivityIndicator color="#842727" size={55}/>
            ) : userLibrary.length ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={{alignSelf: 'center'}}>
                            <Text style={{color: '#fff', fontSize: 32, marginTop: 10}}> <Icon name="library-music" size={30} /> My Library </Text>
                        </View>
                        <FlatList
                        numColumns={numColumns}
                        data={JSON.parse(userLibrary)}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => ( <ItemLibrary data={item} /> )}
                        />
                    </View>
                </ScrollView>
            ) : (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Icon name="emoticon-sad-outline" size={35} color="#fff"/>
                    <EmptyLibrary> Your Library is empty </EmptyLibrary>
                    <BuyLink onPress={() => (navigation.navigate('Shop'))}>
                        <TextBuyLink> Buy Musics </TextBuyLink>
                    </BuyLink>
                </View>
            )
            }
        </View>
    )
}

export default Library;