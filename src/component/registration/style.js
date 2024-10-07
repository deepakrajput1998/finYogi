import { StyleSheet } from 'react-native';
import Colors from '../../utilities/Color';
import { padding } from '../../utilities/Style';

const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.WHITE
    },
    welcomeContainer: {
        alignItems: 'center',
        margin: '2.5%'
    },
    welcomebackText: {
        marginTop: 40,
        fontSize: 22,
        fontWeight: '700',
        color: Colors.V2_Text
    },
    loginScreen1: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSection: {
        ...padding('2.5%'),
        marginTop: 20
    },
    bottomSection: {
        ...padding('2.5%', '2.5%', '0%', '2.5%'),
        width: '100%'
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