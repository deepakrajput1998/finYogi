import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Colors from '../../utilities/Color';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const CustomInputPassword = ({ label = 'label', maxLength = 9, keyboardType = null, showLabel = true, placeholder = 'placeholder', ...props }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [value, setValue] = useState(null)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const onChangeTextHandler = text => {
    setValue(text);
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };
  return (
    <View>
      <View style={styles.mainContainer}>
        {showLabel && label ? <Text style={styles.label}>{label}</Text> : null}
      </View>
      <View style={styles.inputMainContainer}>
        <TextInput
          maxLength={maxLength}
          keyboardType={keyboardType || 'default'}
          placeholderTextColor={Colors.GRAY_TEXT} placeholder={placeholder}
          value={value}
          secureTextEntry={!isPasswordVisible}
          onChangeText={(text) => {
            onChangeTextHandler(text)
          }}
          style={[styles.inputContainer, { width: '90%' }]}
        />
        <TouchableOpacity style={{ width: '10%' }} onPress={togglePasswordVisibility}>
          <FontAwesomeIcon size={20} icon={!isPasswordVisible ? faEye : faEyeSlash} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomInputPassword;
