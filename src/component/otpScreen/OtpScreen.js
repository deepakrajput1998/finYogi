import { View, Text } from 'react-native';
import React, { useState } from 'react';
import style from './style';
import Button from '../../common/button/Button';
import LogoImg from '../../../src/assets/images/bro.svg';
import ButtonCheckout from '../../common/button/ButtonCheckout';


const OtpScreen = () => {
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
            <View style={style.logoSection}>
                <LogoImg width={180} height={180} />
                <View style={style.otpContainer}>
                    <Text style={style.otpText}>Verification Required</Text>
                    <Text style={style.otpText1}>To continue, complete this verification step.
                        We’ve sent an OTP to the email. Please enter it
                        below to complete verification.</Text>
                </View>
            </View>
            <View>
                <Text>otpBox</Text>
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

export default OtpScreen;
