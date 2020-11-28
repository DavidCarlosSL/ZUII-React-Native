import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
justify-content: center;
`;

export const AddCoinsView = styled.View`
flex-direction: row; 
margin-top: 20px; 
align-self: center;
`;

export const CoinsInput = styled.TextInput`
backgroundColor: rgba(255, 255, 255, 0.8); 
borderRadius: 20px;
width: 150px; 
height: 38px; 
padding: 10px;
`;

export const ButtonAddView = styled.View`
align-self: center;
`;

export const ButtonAddCoins = styled.TouchableOpacity`
border-width: 1px; 
border-color: #842727;
height: 35px; 
width: 35px; 
border-radius: 10px; 
align-items: center;
flex-direction: row;
margin-left: 10px;
`;

export const MyPurchasesText = styled.Text`
font-size: 32px; 
color: #fff;
padding-bottom: 10px;
margin-left: -10px;
`;

export const EmptyPurchases = styled.View`
align-self: center;
margin-top: 90px;
`;

export const EmptyMessage = styled.Text`
font-size: 22px;
color: #fff;
`;

export const BuyMusics = styled.Text`
font-size: 28px;
color: #842727; 
margin-top: 10px
`;

export const PurchasesItemList = styled.View`
flex-direction: row;
margin-top: 20px;
`;

export const AlbumImage = styled.Image`
height: 75px; 
width: 75px; 
borderRadius: 15px;
`;

export const Item = styled.View`
flex-direction: column; 
margin-top: 4px;
`;

export const SubItem = styled.View`
flex-direction: row;
`;