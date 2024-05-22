import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utilities/Color';
import CuttomInputText from '../../common/customInput/CustomInputText';
import styles from './style';
import CuttomInputPassword from '../../common/customInput/CustomInputPassword';
import CustomCheckInput from '../../common/customCheckInput/CustomCheckInput';
import LinkButton from '../../common/button/LinkButton';
import Button from '../../common/button/Button';
import LogoImg from '../../../src/assets/images/digi.svg';
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
    <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.welcomeContainer}>
          <LogoImg width={200} height={200} />
        </View>
        {/* <View style={styles.welcomeContainer}>
          <Text style={styles.welcomebackText}>Hi, Welcome Back!</Text>
        </View> */}
        <CuttomInputText
          onChangeText={text => {
            onChangeTextHandler('email', text);
          }}
          label="Enter Email"
          placeholder="Enter Email / User name"
        />
        <CuttomInputPassword
          onChangeText={text => {
            onChangeTextHandler('password', text);
          }}
          label="Password"
          placeholder="Enter Password"
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: '2.5%',
          }}>
          <View style={{width: '40%'}}>
            <LinkButton label="Forget Password ?" type={'FY'} />
          </View>
        </View>
      </View>
      <View style={{width: '100%'}}>
        <CustomCheckInput label="By Siging Up, you agreed to our T&C" />
      </View>
      <View style={{marginTop: '2.5%'}}>
        <Button onPress={()=>{
alert(`Login Successfully with Email ${email} and password ${password}`)
        }} disabled={!password||!email} label="Sign-In" />
      </View>
      <View
        style={{
          margin: '5.5%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: Colors.GRAY_TEXT, fontSize: 16}}>
          Don’t have an account ?{''}
        </Text>
        <View>
          <LinkButton
            label="Sign Up"
            type={'FY'}
            isUnderline={true}
            fontSize={15}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;
