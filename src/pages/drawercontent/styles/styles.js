import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Logo = styled.Text`
font-size: 28px;
color: #842727;
`;

export const DrawerStyles = StyleSheet.create({
    drawerItem: {
        borderBottomWidth: 1, 
        borderBottomColor: '#842727'
    },
    drawerBottomItem: {
        borderTopWidth: 1,
        borderTopColor: '#872424'
    },
    label: {
        color: '#fff', 
        fontSize: 16, 
        marginLeft: -20
    }
})