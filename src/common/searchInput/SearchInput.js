import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FeatherSearch from '../../assets/images/feathersearch.svg';
import styles from './style';
const SearchInput = ({...props}) => {
  const [searchText, setSearchText] = useState('');
  const onChangeTextHandler = text => {
    setSearchText(text);
    props?.onChangeTextHandler(text);
  };
  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchContainer1}>
          <TextInput
            onChangeText={text => {
              onChangeTextHandler(text);
            }}
            style={styles.searchText}
            placeholder="Search"
            value={searchText}
          />
        </View>
        <TouchableOpacity style={styles.featherSearchContainer}>
          <FeatherSearch width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
