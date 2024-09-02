import {View, Text, TextInput} from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Colors from '../../utilities/Color';

const CustomInputNumber = ({label = 'label',maxLength=9,keyboardType =null,placeholder='placeholder'}) => {
  const [value, setValue] = useState(null)
  return (
    <View>
      <View style={styles.mainContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.inputMainContainer}>
        <TextInput 
         maxLength={maxLength}
         keyboardType={keyboardType || 'phone-pad'}
        placeholderTextColor={Colors.GRAY_TEXT} placeholder={placeholder} style={styles.inputContainer}
        value={value} />
      </View>
    </View>
  );
};

export default CustomInputNumber;
