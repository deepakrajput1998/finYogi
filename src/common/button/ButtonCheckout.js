import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const ButtonCheckout = props => {


    return (
        <TouchableOpacity
            disabled={props.disabled}
            style={
                props.disabled ? styles.disabledButtonContainer1 : styles.buttonContainer1
            }
            onPress={props.onPress}>
            {props.icon ? (
                <Image
                    style={{ height: 20, width: 20, marginRight: '10%' }}
                    source={props.icon}
                />
            ) : null}
            <Text style={styles.titleStyle1}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCheckout;
ButtonCheckout.defaultProps = {
    disabled: false,
};
