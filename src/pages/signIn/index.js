import React, { useState, useContext} from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Importing AuthContext
import { AuthContext } from '../../contexts/auth/index.js';

//Importing Styles Components
import {Background, Container, Logo, AreaInput, Input, Auth, SubmitButton, SubmitText,
 Link, LinkText} from './styles/styles.js';

function SignIn(){
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const {signIn, loadingAuth} = useContext(AuthContext);

    function handleLogin(){
        signIn(email, password);
    }

    return(
        <Background>
            <Container>
                <Logo>
                    ZUII
                </Logo>
                <AreaInput>
                    <Icon name="email" size={25} color="#fff" style={{marginRight: 5, marginTop: -5}}/>
                    <Input
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text) }
                    style={{paddingLeft: 15}}
                    />
                </AreaInput>
                <AreaInput>
                    <Icon name="lock" size={25} color="#fff" style={{marginRight: 5, marginTop: -5}}/>
                    <Input 
                    placeholder="Password"
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{paddingLeft: 15}}
                    />
                </AreaInput>

                <Auth>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={30} color='#842727' />
                        ):
                        <SubmitButton onPress={() => {
                            Keyboard.dismiss();
                            handleLogin();
                        }}>
                            <SubmitText>Sign In</SubmitText>
                        </SubmitButton>
                    }
                </Auth>

                <Link onPress={ () => navigation.navigate('SignUp')} >
                    <LinkText> Do not have an account? Create one </LinkText>
                </Link>
                
            </Container>
        </Background>
    )
}

export default SignIn;