import React, { useState } from 'react';
import { View, Text } from 'react-native';
import LogoImg from '../../../src/assets/images/logo.svg';
import CuttomInputPassword from '../../common/customInput/CustomInputPassword';
import CustomInputText from "../../common/customInput/CustomInputText";
import LinkButton from "../../common/button/LinkButton";
import Button from "../../common/button/Button";
import style from './style';


const Registration = () => {
    const [password, setPassword] = useState('');
    return (
        <View style={style.screen}>
            <View style={style.loginScreen1}>
                <LogoImg width={150} height={150} />
                <View style={style.welcomeContainer}>
                    <Text style={style.welcomebackText}>Create an account</Text>
                </View>
                <View style={style.inputSection}>
                    <CustomInputText
                        onChangeText={text => {
                            onChangeTextHandler(text);
                        }}
                        placeholder="Enter Your Full Name"
                        showLabel={false}
                    />
                    <CustomInputText
                        onChangeText={text => {
                            onChangeTextHandler(text);
                        }}
                        placeholder="Enter Your Email"
                        showLabel={false}
                    />
                    <CustomInputText
                        onChangeText={text => {
                            onChangeTextHandler(text);
                        }}
                        placeholder="Enter Your Phone Number"
                        showLabel={false}
                    />
                    <CuttomInputPassword
                        onChangeText={text => {
                            onChangeTextHandler(text);
                        }}
                        placeholder="Enter Your Password"
                        showLabel={false}
                    />
                </View>
                <View style={style.bottomSection}>
                    <Button
                        onPress={() => {
                            alert(`Login Successfully with Email ${email} and password ${password}`)
                        }} disabled={!password || !email} label="Sign Up" />
                </View>
                <View
                    style={style.signUpSection}>
                    <Text style={style.signUpText}>
                        Already have an account ?{' '}
                    </Text>
                    <View>
                        <LinkButton
                            label="Login"
                            type={'FY'}
                            isUnderline={true}
                            fontSize={14}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Registration;
