import React, { useContext } from 'react';
import { View} from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//Importing Styles
import { Logo, DrawerStyles } from './styles/styles.js';

//Importing Auth Context
import { AuthContext } from '../../contexts/auth/index.js';

function DrawerContent(props){

    const {signOut} = useContext(AuthContext);

    function handleLogOut(){
        signOut();
        props.navigation.navigate('IndexStack');
    }

    return(
        <View style={{flex: 1}}>
            <View style={{alignItems: 'center'}}>
                <Logo>ZUII</Logo>
            </View>
            <Drawer.Section>
                <DrawerItem 
                label="Library"
                icon={() => (<Icon name="library-music" size={25} color="#fff" />)}
                labelStyle={DrawerStyles.label}
                style={DrawerStyles.drawerItem}
                onPress={() => (props.navigation.navigate('Home'))}
                />
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem 
                label="Shop"
                icon={() => (<Icon name="cart-outline" size={25} color="#fff"/>)}
                labelStyle={DrawerStyles.label}
                style={DrawerStyles.drawerItem}
                onPress={() => (props.navigation.navigate('Shop'))}
                />
            </Drawer.Section>
            <Drawer.Section>
                <DrawerItem 
                label="Purchases"
                icon={() => (<Icon name="coin" size={25} color="#fff"/>)}
                labelStyle={DrawerStyles.label}
                style={DrawerStyles.drawerItem}
                onPress={() => (props.navigation.navigate('Purchases'))}
                />
            </Drawer.Section>
            <Drawer.Section style={{flex: 1, justifyContent: 'flex-end'}}>
                <DrawerItem 
                label="Sign Out"
                icon={() => (<Icon name="logout" size={25} color="#fff" />)}
                labelStyle={DrawerStyles.label}
                style={DrawerStyles.drawerBottomItem}
                onPress={() => {handleLogOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent;