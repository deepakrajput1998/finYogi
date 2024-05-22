import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Color';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  logoContainer: {
    borderRadius: 7,
    padding: '4%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  optionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
  },
  optionContainer1: {
    borderRadius: 60,
    flexDirection: 'row',
    backgroundColor: Colors.LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2%',
    width: '80%',
  },
  optionBox: {
    borderRadius: 8,
    width: '30%',
    padding: '2%',
  },
  searchContainer1: {
    backgroundColor: Colors.LIGHT_GRAY4,
    flexDirection: 'row',
    padding: '2%',
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,
    width: '88%',
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: '2%',
  },
  searchText: {
    alignItems: 'center',
    color: 'black',
    width: '100%',
    padding: '2.5%',
  },
  text: {
    textAlign: 'center',
    color: Colors.TEXT_VALUE,
  },
  featherSearchContainer: {
    alignItems: 'center',
    padding: '4%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.BLUE1,
  },
  listContainer:{

  },
});
export default styles;
