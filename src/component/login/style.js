import { StyleSheet } from "react-native";
import { margin, padding } from "../../utilities/Style";
import Colors from "../../utilities/Color";

const style = StyleSheet.create({
    logoContainer: {
        alignItems: 'center'
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
    loginScreen: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    loginScreen1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputSection: {
        ...padding('2.5%')
    },
    forgetPasswordRow: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...padding('1.5 %', '2.5%', '0%', '2.5%',)
    },
    bottomSection: {
        ...padding('2.5%', '2.5%', '0%', '2.5%'),
        marginTop: 30
    },
    signUpSection: {
        marginBottom: '6.5%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        color: Colors.GRAY_TEXT,
        fontSize: 14
    },
})
export default style;