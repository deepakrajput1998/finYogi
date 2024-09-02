import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Color';
import {
  generateboxBottomShadowStyle,
  padding,
  margin,
} from '../../utilities/Style';

const styles = StyleSheet.create({
  articleCardMainContainer: {
    width: '95%',
    flexDirection: 'row',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GRAY_LINE,
    ...padding('2.5%'),
    ...margin('2.5%'),
  },
  imgContainer: {
    width: '30%',
    height: 100,
    marginRight: '2.5%',
  },
  img: {width: '100%', height: '100%', borderRadius: 5},
  titleContainer: {marginBottom: '2.5%', width: '100%'},
  title: {color: Colors.V2_Text, fontWeight: '700', fontSize: 16},
  descriptionContainer: {marginBottom: '2.5%', width: '100%'},
  description: {color: Colors.V2_Text, fontWeight: '400', fontSize: 14},
  timeStampContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    alignItems: 'center',
  },
  timeStamp: {color: Colors.GRAY_TEXT, fontWeight: '300', fontSize: 12},
  startVideoButtonConatiner: {
    height: '30%',
    width: '30%',
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: '65%',
    left: '30%',
  },
  boxBottomShadow: {
    ...generateboxBottomShadowStyle(2, -2, Colors.RED, 0.8, 5, 5, Colors.GRAY),
  },
});
export default styles;
