import { StyleSheet } from 'react-native';
import Colors from '../utilities/Color';
import { margin, padding } from '../utilities/Style';


const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    createPasswordContainer: {
        alignItems: 'center',
        margin: '1.5%'
    },
    createPasswordText: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: '500',
        color: Colors.V2_Text
    },
    createPasswordText1: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '500',
        color: Colors.V2_Text
    },
    logoSection1: {
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
        // position: 'absolute',
        // bottom: 0,
        ...margin('30%', '0%', '3.5%', '0%')
    },
    signUpSection: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: Colors.GRAY_TEXT,
        fontSize: 14
    },
});
export default style;