import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;

export const Title = styled.Text`
color: #fff; 
font-size: 32px; 
margin-top: 10px;
`;

export const ArtistList = styled.View`
align-items: center;
`;

export const ArtistImage = styled.Image`
height: 175px;
width: 175px;
margin: 16px 16px 5px 16px; 
borderRadius: 85px;
`;

export const ArtistName = styled.Text`
color: #fff;
font-size: 13px;
`;

export const ErrorView = styled.View`
align-items: center;
justify-content: center;
`;

export const ErrorMessage = styled.Text`
font-size: 32px;
color: #fff
`;