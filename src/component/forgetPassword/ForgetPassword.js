import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import CuttomInputText from '../../common/customInput/CustomInputText';
import style from './style';
import CuttomInputPassword from '../../common/customInput/CustomInputPassword';
import CustomCheckInput from '../../common/customCheckInput/CustomCheckInput';
import LinkButton from '../../common/button/LinkButton';
import Button from '../../common/button/Button';
import LogoImg from '../../../src/assets/images/rafiki.svg';
import ButtonCheckout from '../../common/button/ButtonCheckout';

const ForgetPassword = () => {
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
            <View style={style.loginScreen1}>
                <LogoImg width={240} height={240} />
                <View style={style.forgetPasswordContainer}>
                    <Text style={style.forgetPasswordText}>Forget Password</Text>
                    <Text style={style.forgetPasswordText1}>Enter your login email details below</Text>
                </View>
                <View style={style.inputSection}>
                    <CuttomInputText
                        onChangeText={text => {
                            onChangeTextHandler('email', text);
                        }}
                        label="Email"
                        placeholder="Enter your Email"
                    />
                </View>

            </View>
            <View style={style.bottomSection}>
                <Button onPress={() => {
                    alert(`Login Successfully with Email ${email} and password ${password}`)
                }} disabled={!password || !email} label="Submit" />

                <ButtonCheckout title="Cancel" />

            </View>
        </View>
    );
};

export default ForgetPassword;
