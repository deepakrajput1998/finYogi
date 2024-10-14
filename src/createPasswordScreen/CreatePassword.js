import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import CuttomInputPassword from '../common/customInput/CustomInputPassword';
import style from './style';

// import LogoImg from '../../../src/assets/images/rafiki.svg';
import LogoImg from '../assets/images/amico.svg'
import ButtonCheckout from '../common/button/ButtonCheckout';
import Button from '../common/button/Button';
const CreatePassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onChangeTextHandler = (key, value) => {
        if (key == 'email') {
            setEmail(value);
        } else {
            setPassword(value);
        }
    };
    return (
        <View style={style.screen}>
            <View style={style.logoSection1}>
                <LogoImg width={180} height={180} />
                <View style={style.createPasswordContainer}>
                    <Text style={style.createPasswordText}>Create Password</Text>
                    <Text style={style.createPasswordText1}>We’ll ask this password whenever you sign in.</Text>
                </View>
                <View>
                    <CuttomInputPassword
                        onChangeText={text => {
                            onChangeTextHandler('password', text);
                        }}
                        label="Password"
                        placeholder="New Password"
                    />

                    <CuttomInputPassword
                        onChangeText={text => {
                            onChangeTextHandler('password', text);
                        }}
                        label="Confirm Password"
                        placeholder="Confirm Password"
                    />
                </View>
                <View style={style.bottomSection}>
                    <Button onPress={() => {
                        alert(`Login Successfully with Email ${email} and password ${password}`)
                    }} disabled={!password || !email} label="Submit" />

                    <ButtonCheckout title="Cancel" />

                </View>

            </View>
        </View>

    );
};

export default CreatePassword;
