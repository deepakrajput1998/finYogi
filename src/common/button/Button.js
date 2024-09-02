import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../utilities/Color';
import styles from './style';
const Button = ({label='label',type,disabled = false,onPress= ()=>{},isOutlineButton = false}) => {
    const [value, setValue] = useState(null)
    const enumValues = ['FY','default', 'success', 'danger'];
    const buttonType= enumValues.includes(type) ? type : enumValues[0];
    let linkTextColor = null ;
    let buttonContainerStyle= null ;
    switch (buttonType) {
        case 'success':
            linkTextColor = Colors.GREEN1
            break;
        case 'danger':
            linkTextColor = Colors.RED
            break;
        case 'FY':
            linkTextColor = Colors.FYBLUE
            break;
    
        default:
            linkTextColor = Colors.V2_Text
            break;
    }

    switch (isOutlineButton) {
        case true:
            buttonContainerStyle ={
                backgroundColor:Colors.WHITE,
                borderWidth:1,
                borderRadius:5,
                borderColor:linkTextColor
            }
           
            break;
    
        default:
            buttonContainerStyle ={
                backgroundColor:linkTextColor,
                borderWidth:1,
                borderRadius:5,
                borderColor:linkTextColor
            }
            linkTextColor= Colors.WHITE
            break;
    }
    const onButtonPressHandler=()=>{
        onPress()  
    }
  return (
    <TouchableOpacity
    onPress={() => {
      onButtonPressHandler();
    }}
    style={[styles.buttonContainer,buttonContainerStyle]}>
   
    <Text style={[!disabled ? styles.labelActive : styles.labelUnActive,{color:linkTextColor}]}>
      {label}
    </Text>

    
  </TouchableOpacity>
  )
}

export default Button