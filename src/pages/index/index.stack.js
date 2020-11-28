import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importing Pages
import IndexTabs from './index.tabs.js';
import TrackUser from '../track/user/index.js';
import TrackAlbum from '../track/album/index.js';

//Importing Components
import ArtistAlbums from '../../components/artistalbums/artist.albums.js';

//Importing AuthContext
import { AuthContext } from '../../contexts/auth/index.js';

//Importing Styles
import { defaultStack, DrawerButton, HeaderRight, Coins, CoinsQuantity, CoinsItem } from './styles/styles.js'; 

import { Logo } from '../drawercontent/styles/styles.js';

const IndexStack = createStackNavigator();

function IndexStackScreen({ navigation }){

    const {userCoins} = useContext(AuthContext);

    function menuIcon(){
        return(
        <DrawerButton onPress={() => {navigation.openDrawer()}}>
            <Icon name="menu" size={25} color="#fff" />
        </DrawerButton>
        )
    }

    function headerRighItems(){
        return(
            <HeaderRight>
                <Coins>
                    <Icon name="coin" size={25} backgroundColor='#e0e0e0' color='#fff'/>
                    <CoinsQuantity> {userCoins} </CoinsQuantity>
                </Coins>
                <Icon name="magnify" size={25} backgroundColor='#e0e0e0' color='#fff'/>
            </HeaderRight>
        )
    }

    return(
        <IndexStack.Navigator initialRouteName="IndexTabs">
            <IndexStack.Screen name="IndexTabs" component={IndexTabs} 
            options={{
                headerTitleStyle: {
                opacity: 0
            },
            headerStyle: {
                backgroundColor: '#212121',
                borderBottomWidth: 1,
                borderBottomColor: '#842727'
            },
            headerLeft: () => (menuIcon()),
            headerRight: () => (headerRighItems())
        }}
            />
            <IndexStack.Screen name="TrackAlbum" component={TrackAlbum} options={{
                headerTitleStyle: {
                    opacity: 0
                },
                headerStyle: {
                    backgroundColor: '#212121',
                    borderBottomWidth: 1,
                    borderBottomColor: '#842727'
                },
                headerTintColor: '#fff',
                headerRight: () => (
                        <Coins>
                            <CoinsItem>
                                <Icon name="coin" size={25} backgroundColor='#e0e0e0' color='#fff'/>
                                <CoinsQuantity> {userCoins} </CoinsQuantity>
                            </CoinsItem>
                        <Logo>ZUII</Logo>
                        </Coins>
                )}} />
            <IndexStack.Screen name="TrackUser" component={TrackUser} options={defaultStack} />
            <IndexStack.Screen name="ArtistAlbums" component={ArtistAlbums} options={defaultStack} />
        </IndexStack.Navigator>
    )
}

export default IndexStackScreen;