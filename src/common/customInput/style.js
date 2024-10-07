import { StyleSheet } from 'react-native';
import Colors from '../../utilities/Color';
import { padding } from '../../utilities/Style';

const styles = StyleSheet.create({
  mainContainer: { width: '95%', margin: '2.5%' },
  label: { fontSize: 16, fontWeight: '400', color: Colors.GRAY_TEXT },
  inputMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY,
    borderWidth: 1,
    marginHorizontal: '2.5%',
    borderRadius: 5,
  },
  inputContainer: {
    width: '100%',
    padding: '2.5%',
    fontSize: 14,
    color: Colors.V2_Text,
  },
});
export default styles;
