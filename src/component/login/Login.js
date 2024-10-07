import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import Colors from '../../utilities/Color';
import CuttomInputText from '../../common/customInput/CustomInputText';
import style from './style';
import CuttomInputPassword from '../../common/customInput/CustomInputPassword';
import CustomCheckInput from '../../common/customCheckInput/CustomCheckInput';
import LinkButton from '../../common/button/LinkButton';
import Button from '../../common/button/Button';
import LogoImg from '../../../src/assets/images/logo.svg';
const Login = () => {
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
    <View style={style.loginScreen}>
      <View style={style.loginScreen1}>
        <LogoImg width={150} height={150} />
        <View style={style.welcomeContainer}>
          <Text style={style.welcomebackText}>Hi, Welcome Back!</Text>
        </View>
        <View style={style.inputSection}>
          <CuttomInputText
            onChangeText={text => {
              onChangeTextHandler('email', text);
            }}
            label="Email"
            placeholder="example@gmail.com"
          />
          <CuttomInputPassword
            onChangeText={text => {
              onChangeTextHandler('password', text);
            }}
            label="Password"
            placeholder="Enter Your Password"
          />
        </View>
        <View style={style.forgetPasswordRow}>
          <View style={{ width: '45%' }}><CustomCheckInput label="Remember Me" /></View>
          <View style={{ width: '45%', marginLeft: 80 }}><LinkButton label="Forget Password ?" type={'FY'} /></View>
        </View>
      </View>
      <View style={style.bottomSection}>
        <Button onPress={() => {
          alert(`Login Successfully with Email ${email} and password ${password}`)
        }} disabled={!password || !email} label="Login" />
      </View>
      <View
        style={style.signUpSection}>
        <Text style={style.signUpText}>
          Don’t have an account ?{' '}
        </Text>
        <View>
          <LinkButton
            label="Sign Up"
            type={'FY'}
            isUnderline={true}
            fontSize={14}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
