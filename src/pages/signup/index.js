import React, { useState, useContext } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Importing Auth Context
import { AuthContext } from '../../contexts/auth/index.js';

//Importing Styles Components
import {Background, Container, Logo, AreaInput, Input, Auth, SubmitButton, SubmitText } from '../signIn/styles/styles.js';

function SignUp({navigation}){
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {laodingAuth, signUp} = useContext(AuthContext);

    function handleSignUp(){
        signUp(name, email, password);
        navigation.goBack();
    }

    return(
        <Background>
            <Container>
                <Logo>
                    ZUII
                </Logo>
                <AreaInput>
                    <Icon name="person" size={25} color="#fff" style={{marginRight: 5, marginTop: -10}}/>
                    <Input 
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={{paddingLeft: 15}}
                    />
                </AreaInput>
                <AreaInput>
                    <Icon name="email" size={25} color="#fff" style={{marginRight: 5, marginTop: -10}}/>
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
                    <Icon name="lock" size={25} color="#fff" style={{marginRight: 5, marginTop: -10}}/>
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
                        laodingAuth ? (
                            <ActivityIndicator size={30} color='#842727' />
                        ) : (
                            <SubmitButton onPress={() => {
                                Keyboard.dismiss();
                                handleSignUp();
                            }}>
                                <SubmitText>Sign Up</SubmitText>
                            </SubmitButton>
                        )
                    }
                </Auth>
                
            </Container>
        </Background>
    )
}

export default SignUp;