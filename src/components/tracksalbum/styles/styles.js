import styled from 'styled-components/native';

export const ArtistAlbumView = styled.View`
align-self: center
`;

export const ArtistName = styled.Text`
font-size: 24;
color: #fff;
`;

export const AlbumName = styled.Text`
font-size: 22;
color: #fff;
`;

export const AlbumImage = styled.Image`
height: 250px; 
width: 250px;
borderRadius: 15px; 
marginTop: 20px;
`;

export const TrackList = styled.View`
padding-bottom: 30px;
`;

export const TrackItem = styled.View`
width: 370px;
`;

export const TrackName = styled.Text`
fontSize: 16px;
color: #fff; 
width: 270px;
`;

export const Cart = styled.View`
alignSelf: flex-end;
borderRadius: 10px; 
marginTop: -22px; 
borderWidth: 1px; 
borderColor: #842727; 
paddingLeft: 20px; 
paddingRight: 20px; 
paddingTop: 2px; 
paddingBottom: 2px;
`;

export const TrackDuration = styled.Text`
fontSize: 16px;
color: #fff;
`;

export const TrackPrice = styled.Text`
color: #fff;
fontSize: 18px;
marginLeft: -7px; 
marginTop: -1px;
`;

export const ErrorMessageView = styled.View`
align-self: center;
align-items: center;
`;

export const ErrorMessage = styled.Text`
font-size: 28px;
color: #fff;
`;