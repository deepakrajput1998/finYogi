import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import Colors from '../../utilities/Color';

const CustomInputText = ({
  label = 'label',
  maxLength = 9,
  showLabel = true,
  keyboardType = null,
  placeholder = 'placeholder',
  ...props
}) => {
  const [value, setValue] = useState(null);
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
          onChangeText={text => {
            onChangeTextHandler(text);
          }}
          maxLength={maxLength}
          keyboardType={keyboardType || 'default'}
          placeholderTextColor={Colors.GRAY_TEXT}
          placeholder={placeholder}
          style={styles.inputContainer}
          value={value}
        />
      </View>
    </View>
  );
};

export default CustomInputText;
