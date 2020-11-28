import React from 'react';
import styled from 'styled-components/native';

import { Logo } from '../../drawercontent/styles/styles.js';

export const defaultStack = {
    headerTitleStyle: {
        opacity: 0
    },
    headerStyle: {
        backgroundColor: '#212121',
        borderBottomWidth: 1,
        borderBottomColor: '#842727'
    },
    headerTintColor: '#fff',
    headerRight: () => (<Logo style={{marginRight: 10}}>ZUII</Logo>)
}

export const teste = {
    headerTitleStyle: {
        opacity: 0
    },
    headerStyle: {
        backgroundColor: '#212121',
        borderBottomWidth: 1,
        borderBottomColor: '#842727'
    }
}

export const DrawerButton = styled.TouchableOpacity`
margin-left: 15px;
`;

export const HeaderRight = styled.View`
align-items: center;
flex-direction: row; 
marginRight: 20px;
`;

export const Coins = styled.View`
flex-direction: row;
margin-right: 10px;
`;

export const CoinsItem = styled.View`
margin-top: 7px;
margin-right: 10px;
flex-direction: row;
`;

export const CoinsQuantity = styled.Text`
font-size: 16px;
color: #fff;
margin-top: 2px;
`;