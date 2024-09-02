import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LogoMini from '../../assets/images/logomini.svg';
import Notify from '../../assets/images/notification.svg';
import Humbugger from '../../assets/images/humbugger.svg';
import styles from './style';
const HomeHeader = ({...props}) => {
  const [searchText, setSearchText] = useState('');
  const onChangeTextHandler = text => {
    setSearchText(text);
    props?.onChangeTextHandler(text);
  };
  return (
    <View>
     <View style={[styles.logoContainer,styles.boxBottomShadow]}>
        <LogoMini width={35} height={35} />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
          <Notify width={25} height={25} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Humbugger width={25} height={25} style={{marginLeft: 6}} />

          </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
