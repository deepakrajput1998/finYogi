import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Color';

const styles = StyleSheet.create({
  searchContainer1: {
    backgroundColor: Colors.LIGHT_GRAY4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: '85%',
  },
  searchContainer: {
    flexDirection: 'row',
    width: '90%',
    borderWidth: 1,
    borderRadius:10,
    borderColor:Colors.GRAY_LINE,
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchText: {
    alignItems: 'center',
    color: Colors.V2_Text,
    width: '100%',
    padding: '5%',
  },
  text: {
    textAlign: 'center',
    color: Colors.TEXT_VALUE,
  },
  featherSearchContainer: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4%',
    backgroundColor: Colors.FYBLUE,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
export default styles;
