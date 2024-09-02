import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../utilities/Color';
import styles from './style';
const LinkButton = ({
  label = 'label',
  type,
  disabled = false,
  onPress = () => {},
  isUnderline = false,
  fontSize = 17,
}) => {
  const [value, setValue] = useState(null);
  const enumValues = ['FY', 'default', 'success', 'danger'];
  const buttonType = enumValues.includes(type) ? type : enumValues[0];
  let linkTextColor = null;
  switch (buttonType) {
    case 'success':
      linkTextColor = Colors.GREEN1;
      break;
    case 'danger':
      linkTextColor = Colors.RED;
      break;
    case 'FY':
      linkTextColor = Colors.FYBLUE;
      break;

    default:
      linkTextColor = Colors.V2_Text;
      break;
  }
  const onButtonPressHandler = () => {
    onPress();
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onButtonPressHandler();
      }}
      style={styles.linkButtonContainer}>
      <Text
        style={[
          !disabled ? styles.labelActive : styles.labelUnActive,
          {
            color: linkTextColor,
            textDecorationLine: isUnderline ? 'underline' : 'none',
            fontSize:fontSize,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkButton;
