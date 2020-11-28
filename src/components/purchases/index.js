import React, { useContext, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { PurchaseContext } from '../../contexts/purchase/index.js';
import { CoinsContext } from '../../contexts/coins/index.js';

import {Container, AddCoinsView, CoinsInput, ButtonAddView, ButtonAddCoins, MyPurchasesText, EmptyPurchases, EmptyMessage, BuyMusics, 
    PurchasesItemList, AlbumImage, Item, SubItem } from './styles/styles.js';

function UserPurchasesItem({ data }){
    let dateSplitT = data.createdAt.split('T');

    return(
        <PurchasesItemList>
            <AlbumImage source={{uri: `http://mikaellybuckets3.s3.us-east-2.amazonaws.com${data.album_image}`}}/>
            <Item>
                <SubItem>
                    <Icon name="music-box-outline" size={20} color="#fff"/>
                    <Text style={{color: '#fff'}}> {data.track_name} </Text>
                </SubItem>
                <SubItem>
                    <Icon name="coin" size={20} color="#fff"/> 
                    <Text style={{color: '#fff'}}> {data.purchase_value} </Text>
                </SubItem>
                <SubItem>
                    <Icon name="calendar-blank" size={20} color="#fff"/> 
                    <Text style={{color: '#fff'}}> {dateSplitT[0]} </Text>
                </SubItem>
            </Item>
        </PurchasesItemList>
    )
}

function UserPurchases(){
    const navigation = useNavigation();

    const [ coins, setCoins ] = useState();
    const { userPurchases, loadingPurchases } = useContext(PurchaseContext);
    const { AddCoins } = useContext(CoinsContext);

    return(
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AddCoinsView>
                    <CoinsInput
                    placeholder="Coins"
                    value={coins}
                    onChangeText={(text) => (setCoins(text))}
                    />
                    <ButtonAddView>
                        <ButtonAddCoins onPress={() => 
                        {
                            AddCoins(coins);
                            setCoins('')
                        }}>
                            <Icon name="plus-circle-outline" size={20} color="#fff" style={{marginLeft: 6.3}}/>
                        </ButtonAddCoins>
                    </ButtonAddView>
                </AddCoinsView>
                <View style={{alignSelf: 'center', flexDirection: 'row', marginTop: 20}}>
                    <Icon name="shopping" size={33} color="#fff" style={{marginTop: 5}} />
                    <MyPurchasesText>  My Purchases </MyPurchasesText>
                </View>
                {loadingPurchases ? (
                    <ActivityIndicator color="#842727" size={65}/>
                ) : userPurchases.length ? (
                        <FlatList 
                        data={JSON.parse(userPurchases)}
                        renderItem={({item}) => (<UserPurchasesItem data={item} />)}
                        />
                    ) : (
                        <EmptyPurchases>
                            <View style={{alignSelf: 'center'}}>
                                <Icon name="emoticon-sad-outline" size={35} color="#fff"/>
                            </View>
                            <EmptyMessage> You haven't purchased anything yet</EmptyMessage>
                            <TouchableOpacity style={{alignSelf: 'center'}} onPress={() => (navigation.navigate('Shop'))}>
                                <BuyMusics> Buy Musics </BuyMusics>
                            </TouchableOpacity>
                        </EmptyPurchases>
                    )
                }
            </ScrollView>
        </Container>
    )
}

export default UserPurchases;