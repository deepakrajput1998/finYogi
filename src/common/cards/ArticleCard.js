import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Colors from '../../utilities/Color';
import PolygonStart from '../../assets/images/polygon.svg';
const ArticleCard = ({
  title = 'Fire in Noida Sector 62',
  description = 'Wrestlers will not be allowed to protest at India Gate, National monument ......',
  timeStampe = '29 May, 2023, 04:25 PM IST',
  type = 'video',
  ...props
}) => {
  const onCardPressHandler = () => {
    props?.onCardPressHandler?.();
  };
  const checkTypeEmum = ['book', 'video'];
  const typeAfterChecked = checkTypeEmum.includes(type)
    ? type
    : checkTypeEmum[0];
  return (
    <TouchableOpacity
      onPress={() => {
        onCardPressHandler();
      }}
      style={styles.articleCardMainContainer}>
      <View style={styles.imgContainer}>
        {/* <Image
          source={require('../../assets/images/dummyArticle.png')}
          style={styles.img}
        /> */}
        {typeAfterChecked && (
          <View style={styles.startVideoButtonConatiner}>
            <PolygonStart />
          </View>
        )}
      </View>
      <View style={{width: '70%'}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
        </View>
        <View style={styles.timeStampContainer}>
          <Text style={styles.timeStamp}>{timeStampe}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;
