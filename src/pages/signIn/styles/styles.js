import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #212121;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column
 `;

 export const AreaInput = styled.View`
    flex-direction: row;
    align-items: center;
 `;

 export const Logo = styled.Text`
 font-size: 42px;
 color: #842727;
 margin-bottom: 15px;
 `;

 export const Input = styled.TextInput.attrs({
     placeholderTextColor: 'rgba(255, 255, 255, 0.80)'
 })`
    background: rgba(255, 255, 255, 0.30)
    width: 75%;
    margin-bottom: 10px;
    border-radius: 20px;
    font-size: 16px;
    color: #fff;
 `;

 export const Auth = styled.View`
 width: 100%;
 align-items: center;
 `;

 export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: transparent;
    width: 30%;
    height: 40px;
    border-width: 1px;
    border-radius: 25px;
    border-color: #842727;
    margin-top: 5px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: rgba(255, 255, 255, 0.90);
`;

export const Link = styled.TouchableOpacity`
margin-top: 16px;
`;

export const LinkText = styled.Text`
    color: #B54B4B;
    font-size: 14px;
`;