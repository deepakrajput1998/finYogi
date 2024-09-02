import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Color';
import { generateboxBottomShadowStyle } from '../../utilities/Style';

const styles = StyleSheet.create({
  logoContainer: {
  borderRadius: 7,
  padding: '4%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  borderWidth: 0.5,
  borderTopWidth: 0,
  borderColor:Colors.GRAY,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
},
boxBottomShadow:{
  ...generateboxBottomShadowStyle(2, -2, Colors.RED, 0.8, 5, 5, Colors.GRAY),

},
});
export default styles;
