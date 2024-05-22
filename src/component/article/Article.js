import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './style';
import SearchInput from '../../common/searchInput/SearchInput';
import HomeHeader from '../../common/headers/HomeHeader';
import ArticleCard from '../../common/cards/ArticleCard';

const Article = () => {
  let tempOptions = [
    {
      name: 'All',
      id: 1,
    },
    {
      name: 'Videos',
      id: 1,
    },
    {
      name: 'Books',
      id: 1,
    },
  ];
  return (
    <View style={styles.screen}>
     <HomeHeader/>

      <View style={styles.optionContainer}>
        <View style={styles.optionContainer1}>
          {tempOptions.map((item,i) => {
            return (
              <TouchableOpacity key={i} style={styles.optionBox}>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <SearchInput/>
      <View style={styles.listContainer}>
        <ArticleCard/>
      </View>
    </View>
  );
};
export default Article;
