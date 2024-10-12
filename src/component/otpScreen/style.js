import { StyleSheet } from 'react-native';
import Colors from '../../utilities/Color';
import { margin, padding } from '../../utilities/Style';

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    otpContainer: {
        alignItems: 'center',
        margin: '1.5%'
    },
    otpText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: '500',
        color: Colors.V2_Text
    },
    otpText1: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '400',
        color: Colors.V2_Text
    },
    logoSection: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSection: {
        ...padding('2.5%'),
        marginTop: 20
    },
    bottomSection: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        ...margin('0%', '0%', '3.5%', '0%')
    },
});
export default style;