import React, { useContext } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importing Context
import { ArtistContext } from '../../contexts/artist/index.js';

//Importing styles
import { Container, Title, ArtistList, ArtistImage, ArtistName, ErrorView, ErrorMessage } from './styles/styles.js';

function ItemArtist({ data }){
    const navigation = useNavigation();
    
    return(
        <ArtistList>
            <TouchableOpacity onPress={() => {navigation.navigate('ArtistAlbums', {artistId: data.id})}}>
                <ArtistImage source={{uri: `http://mikaellybuckets3.s3.us-east-2.amazonaws.com${data.artist_image}`}}/>
            </TouchableOpacity>
            <ArtistName> <Icon name="artist" size={15}/> {data.artist_name} </ArtistName>
        </ArtistList>
    )
}

function Artists(){
    const {artists, loadingArtists} = useContext(ArtistContext);
    const numColumns = 2;

    return(
        <Container>
            {loadingArtists ? (
                <ActivityIndicator color="#842727" size={55}/>
            ) : artists.length ? (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{alignSelf: 'center'}}>
                        <Title> <Icon name="cart-outline" size={30} /> Shop </Title>
                    </View>
                    <FlatList
                    numColumns={numColumns}
                    data={artists}
                    keyExtractor={(item) => (item.id.toString())}
                    renderItem={({item}) => (<ItemArtist data={item} />)}
                    />
                </ScrollView>
            ) : (
                <ErrorView>
                    <Icon name="emoticon-sad-outline" size={35} color="#fff"/>
                    <ErrorMessage> An Error occured </ErrorMessage>
                </ErrorView>
            )
        }
        </Container>
    )
}

export default Artists;