import {StyleSheet} from 'react-native';
import Colors from '../../utilities/Color';

const styles = StyleSheet.create({
  checkboxContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:'2.5%'
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.WHITE,
    backgroundColor: Colors.BLUE1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxCheckedCricular: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.BLUE1,
    backgroundColor: Colors.BLUE1,
    marginRight:'2.5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  checkboxUnchecked: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.GRAY1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxUncheckedCricular: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.GRAY_TEXT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
  },
  checkmark: {
    color: Colors.WHITE,
    fontSize: 14,
  },
  labelContainer:{
    width:'85%'
  },
  labelUnActive: {
    fontSize: 17,
    color: Colors.GRAY_TEXT,
    fontWeight:'500'
  },
  labelActive: {
    fontSize: 17,
    color: Colors.V2_Text,
    fontWeight:'500'
  },
});
export default styles;
