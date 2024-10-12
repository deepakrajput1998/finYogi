import { StyleSheet } from 'react-native';
import Colors from '../../utilities/Color';
import { margin, padding } from '../../utilities/Style';

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

  // ButtonCheckout

  buttonCheckoutContainer: {
    width: '95%',
    maxHeight: 57,
    height: '80%',
    borderRadius: 8,
    ...margin('2.5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_D1,
  },
  disabledButtonContainer: {
    width: '95%',
    maxHeight: 57,
    height: '80%',
    borderRadius: 8,
    ...margin('2.5%'),
    borderRadius: 8,
    opacity: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_D1,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white'
  },
  buttonContainer1: {
    width: '95%',
    borderRadius: 5,
    borderWidth: 1,
    ...margin('2.5%'),
    ...padding('2.5%'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.BLUE_D1,
  },
  disabledButtonContainer1: {
    width: '95%',
    borderRadius: 8,
    ...margin('2.5%'),
    ...padding('2.5%'),
    borderRadius: 5,
    opacity: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.BLUE_D1,
  },
  titleStyle1: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.BLUE_D1
  },
});
export default styles;
