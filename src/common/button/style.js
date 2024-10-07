import { StyleSheet } from 'react-native';
import Colors from '../../utilities/Color';

const styles = StyleSheet.create({
  linkButtonContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '2.5%'
  },
  buttonContainer: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.5%',
    padding: '2.5%'
  },

  labelContainer: {
    width: '95%'
  },
  labelUnActive: {
    fontSize: 17,
    opacity: 0.5,
    fontWeight: '500'
  },
  labelActive: {
    fontSize: 17,
    fontWeight: '500'
  },
});
export default styles;
