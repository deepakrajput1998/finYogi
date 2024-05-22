import {Platform} from 'react-native';
import Color from './Color';

export const fontWeights = {
  Thin: '100',
  UltraLight: '200',
  Light: '300',
  Regular: '400',
  Medium: '500',
  Semibold: '600',
  Bold: '700',
  Heavy: '800',
  Black: '900',
};

export const fontSizes = {
  fontSize8: 8,
  fontSize9: 9,
  fontSize10: 10,
  fontSize11: 11,
  fontSize12: 12,
  fontSize13: 13,
  fontSize14: 14,
  fontSize15: 15,
  fontSize16: 16,
  fontSize17: 17,
  fontSize18: 18,
  fontSize20: 20,
  fontSize24: 24,
};

export const fontFamily = {
  Bold: '700',
  SFRegular: 'SFProDisplay-Regular',
  SFBold: 'SFProDisplay-Bold',
  SFMedium: 'SFProDisplay-Medium',
  Inter: 'InterVariableFont',
};

const textDisplayGreen = {
  fontSize: fontSizes.fontSize14,
  color: Color.LIGHTEST_GREEN,
  fontWeight: fontWeights.Bold,
  fontFamily: fontFamily.SFBold,
};

const textDisplayGreen14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.LIGHTEST_GREEN,
};

const textDisplayBlue = {
  fontSize: fontSizes.fontSize14,
  color: Color.LIGHTEST_BLUE,
  fontWeight: fontWeights.Bold,
  fontFamily: fontFamily.SFBold,
};

const textDisplayDarkBlueBold = {
  fontSize: fontSizes.fontSize14,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFBold,
};

const textDisplayDarkBlue = {
  fontSize: fontSizes.fontSize14,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const textDisplay14Black7Regular = {
  fontSize: fontSizes.fontSize14,
  color: Color.BLACK7,
  fontFamily: fontFamily.SFRegular,
};

const textDisplay14Black7Bold = {
  fontSize: fontSizes.fontSize14,
  color: Color.BLACK7,
  fontFamily: fontFamily.SFBold,
};

const textDisplayDarkGray16 = {
  fontSize: fontSizes.fontSize16,
  color: Color.DARK_GRAY,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayDarkGray14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.DARK_GRAY,
  fontFamily: fontFamily.SFRegular,
};
const textDisplayBlack514 = {
  fontSize: fontSizes.fontSize14,
  color: Color.BLACK5,
  fontFamily: fontFamily.SFRegular,
};

const font16DarkBlueBold = {
  fontSize: fontSizes.fontSize16,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFBold,
};

const font16DarkBlueMedium = {
  fontSize: fontSizes.fontSize16,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayGray = {
  fontSize: fontSizes.fontSize11,
  color: Color.DARK_GRAY,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGray12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY1,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGray14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.GRAY1,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlueTheme12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.BLUE_THEME,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGrayText12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY_TEXT,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGrayText16 = {
  fontSize: fontSizes.fontSize16,
  color: Color.GRAY_TEXT,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGrayText14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.GRAY_TEXT,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlack18 = {
  fontSize: fontSizes.fontSize18,
  color: Color.BLACK,
  fontWeight: fontWeights.Bold,
  fontFamily: fontFamily.SFBold,
};

const textDisplayDarkBlue18 = {
  fontSize: fontSizes.fontSize18,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFBold,
};

const textDisplayDarkBlueMedium18 = {
  fontSize: fontSizes.fontSize18,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue18 = {
  fontSize: fontSizes.fontSize18,
  color: Color.BLUE_HEADER,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue16 = {
  fontSize: fontSizes.fontSize16,
  color: Color.BLUE_HEADER,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayDarkBlue16 = {
  fontSize: fontSizes.fontSize16,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlue12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.BLUE_HEADER,
  fontFamily: fontFamily.SFMedium,
};
const textDisplayLightGray12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY_LINE1,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayDarkGray12_1 = {
  fontSize: fontSizes.fontSize12,
  color: Color.DARK_GRAY1,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlack2_12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.BLACK2,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGray2_14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.GRAY2,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlack14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.BLACK,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue3_14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.BLUE3,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue4_14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.BLUE4,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlue5_14 = {
  fontSize: fontSizes.fontSize14,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFBold,
  fontWeight: fontWeights.Semibold,
};

const textDisplayGeneric = {
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlue5_12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue5Regular_12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayBlue5_12Regular = {
  fontSize: fontSizes.fontSize12,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGray13 = {
  fontSize: fontSizes.fontSize13,
  color: Color.GRAY4,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGray11 = {
  fontSize: fontSizes.fontSize11,
  color: Color.GRAY4,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayDarkBlue12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayDarkBlue12Medium = {
  fontSize: fontSizes.fontSize12,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue10Bold = {
  fontSize: fontSizes.fontSize12,
  color: Color.BLUE10,
  fontFamily: fontFamily.SFBold,
};

const textDisplayBlue10Medium = {
  fontSize: fontSizes.fontSize11,
  color: Color.BLUE10,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayBlue10SFBold = {
  fontSize: fontSizes.fontSize11,
  color: Color.BLUE10,
  fontFamily: fontFamily.SFBold,
};

const textDisplayGray5_12 = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFMedium,
};

const textDisplayDarkGray20 = {
  fontSize: fontSizes.fontSize20,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFMedium,
  lineHeight: 32,
};

const textDisplayDarkGray20Regular = {
  fontSize: fontSizes.fontSize20,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFRegular,
  lineHeight: 32,
};

const textDisplayDarkGray14Regular = {
  fontSize: fontSizes.fontSize14,
  color: Color.GRAY6,
  fontFamily: fontFamily.SFRegular,
  lineHeight: 28,
};

const textDisplayDarkGray5Regular = {
  fontSize: fontSizes.fontSize14,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFRegular,
  lineHeight: 20,
};

const textDisplayDarkBlue5Regular = {
  fontSize: fontSizes.fontSize14,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};
const textDisplayGRAY7Regular = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY7,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayDarkGray5_15_Medium = {
  fontSize: fontSizes.fontSize15,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFMedium,
  lineHeight: 20,
};

const textDisplayBlue8_16Regular = {
  fontSize: fontSizes.fontSize16,
  color: Color.BLUE8,
  fontFamily: fontFamily.SFRegular,
  lineHeight: 26,
};

const textDisplayGray18 = {
  fontSize: fontSizes.fontSize18,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFRegular,
};

const textDisplayGray16Bold = {
  fontSize: fontSizes.fontSize16,
  color: Color.GRAY5,
  fontFamily: fontFamily.SFBold,
};

const font13DarkBlueMedium = {
  fontSize: fontSizes.fontSize13,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const font13DarkBlueRegular = {
  fontSize: fontSizes.fontSize13,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const font13DarkBlueBold = {
  fontSize: fontSizes.fontSize13,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFBold,
};

const font13DarkBlueSemiBold = {
  fontSize: fontSizes.fontSize13,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
  fontWeight: fontWeights.Semibold,
};

const font12Gray11Regular = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFRegular,
};

const font13Gray11Regular = {
  fontSize: fontSizes.fontSize13,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFRegular,
};

const font13Gray11Medium = {
  fontSize: fontSizes.fontSize13,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFMedium,
};

const font11Gray11Medium = {
  fontSize: fontSizes.fontSize11,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFMedium,
};

const font14Regular = {
  fontSize: fontSizes.fontSize14,
  fontFamily: fontFamily.SFRegular,
};

const font11Gray11Regular = {
  fontSize: fontSizes.fontSize11,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFRegular,
};

const font11Gray11Semibold = {
  fontSize: fontSizes.fontSize11,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFMedium,
  fontWeight: fontWeights.Semibold,
};

const font11Gray11Bold = {
  fontSize: fontSizes.fontSize11,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFMedium,
  fontWeight: fontWeights.Bold,
};

const font12Gray12Regular = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY12,
  fontFamily: fontFamily.SFRegular,
};

const font12DarkBlueMedium = {
  fontSize: fontSizes.fontSize12,
  color: Color.GRAY11,
  fontFamily: fontFamily.SFMedium,
};
const font12Blue16Medium = {
  fontSize: fontSizes.fontSize12,
  color: Color.BLUE16,
  fontFamily: fontFamily.SFMedium,
};

const font12Blue10Medium = {
  fontSize: fontSizes.fontSize12,
  color: Color.BLUE10,
  fontFamily: fontFamily.SFMedium,
};

const font16Blue10Medium = {
  fontSize: fontSizes.fontSize16,
  color: Color.BLUE10,
  fontFamily: fontFamily.SFMedium,
};

const font24Blue10Medium = {
  fontSize: fontSizes.fontSize24,
  color: Color.BLUE10,
  fontFamily: fontFamily.SFMedium,
};

const font11Blue10Regular = {
  fontSize: fontSizes.fontSize11,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const font10DarkBlueRegular = {
  fontSize: fontSizes.fontSize10,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const font10DarkBlueMedium = {
  fontSize: fontSizes.fontSize10,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
};

const font11DARKBLUERegular = {
  fontSize: fontSizes.fontSize11,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
  fontWeight: fontWeights.Semibold,
};

const font10Blue10Regular = {
  fontSize: fontSizes.fontSize9,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFRegular,
};

const font9Blue10Regular = {
  fontSize: fontSizes.fontSize9,
  color: Color.GRAY14,
  fontFamily: fontFamily.SFRegular,
};

const font10BlueBold = {
  fontSize: fontSizes.fontSize10,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFBold,
};

const font14Blue10Regular = {
  fontSize: fontSizes.fontSize14,
  color: Color.DARK_BLUE,
  fontFamily: fontFamily.SFMedium,
  lineHeight: 14,
};

const font10GRAY14Regular = {
  fontSize: fontSizes.fontSize10,
  color: Color.GRAY14,
  fontFamily: fontFamily.SFRegular,
  lineHeight: 20,
};

const font11GRAY14Regular = {
  fontSize: fontSizes.fontSize11,
  color: Color.GRAY14,
  fontFamily: fontFamily.SFRegular,
  lineHeight: 12,
};

export const BaseStyle = {
  textDisplayGreen,
  textDisplayBlue,
  textDisplayGray,
  textDisplayDarkBlueBold,
  textDisplayDarkBlue,
  textDisplayGray12,
  textDisplayGrayText12,
  textDisplayGrayText16,
  textDisplayBlue18,
  textDisplayBlue12,
  textDisplayLightGray12,
  textDisplayBlue16,
  textDisplayDarkGray16,
  textDisplayGray14,
  textDisplayDarkGray12_1,
  textDisplayDarkBlue18,
  textDisplayBlueTheme12,
  textDisplayBlack2_12,
  textDisplayGray2_14,
  textDisplayBlack14,
  textDisplayBlue3_14,
  textDisplayBlue4_14,
  textDisplayBlue5_14,
  textDisplayBlue5_12,
  textDisplayGray13,
  textDisplayDarkBlue12,
  textDisplayGray11,
  textDisplayBlue5Regular_12,
  textDisplayDarkGray20,
  textDisplayDarkGray20Regular,
  textDisplayDarkGray14Regular,
  textDisplayGray5_12,
  textDisplayDarkGray5Regular,
  textDisplayBlue8_16Regular,
  textDisplayDarkGray5_15_Medium,
  textDisplayDarkBlue16,
  textDisplayBlue5_12Regular,
  textDisplayDarkBlue5Regular,
  textDisplayGRAY7Regular,
  textDisplayDarkBlueMedium18,
  textDisplayGray18,
  font14Blue10Regular,
  font13DarkBlueMedium,
  font12Gray11Regular,
  font14Regular,
  font13DarkBlueSemiBold,
  font12DarkBlueMedium,
  font12Blue10Medium,
  font11Blue10Regular,
  font12Gray12Regular,
  font11Gray11Regular,
  font13Gray11Regular,
  font13Gray11Medium,
  font16DarkBlueBold,
  font10Blue10Regular,
  textDisplayGrayText14,
  textDisplayDarkGray14,
  font11Gray11Semibold,
  font10GRAY14Regular,
  font16DarkBlueMedium,
  textDisplayGreen14,
  font11Gray11Medium,
  font11DARKBLUERegular,
  font12Blue16Medium,
  textDisplayDarkBlue12Medium,
  textDisplayBlue10Bold,
  font10DarkBlueRegular,
  textDisplayBlue10Medium,
  textDisplayBlue10SFBold,
  font10BlueBold,
  font11Gray11Bold,
  font16Blue10Medium,
  font9Blue10Regular,
  font11GRAY14Regular,
  textDisplayBlack514,
  font24Blue10Medium,
  textDisplayGeneric,
  font13DarkBlueBold,
  font13DarkBlueRegular,
  textDisplay14Black7Regular,
  textDisplay14Black7Bold,
  textDisplayGray16Bold,
  font10DarkBlueMedium,
};

export const InverseBaseStyle = {
  textDisplay4: {
    ...textDisplayGreen,
    color: Color.WHITE,
  },
  textDisplayBlack18: {
    ...textDisplayBlack18,
    color: Color.WHITE,
  },
  textDisplayBold16: {
    fontWeight: fontWeights.Bold,
    fontFamily: fontFamily.SFBold,
    color: Color.WHITE,
    fontSize: fontSizes.fontSize16,
  },
  textDisplay11White: {
    ...textDisplayGray,
    color: Color.WHITE,
  },
  textDisplay9White: {
    ...textDisplayGray,
    fontSize: fontSizes.fontSize9,
    color: Color.WHITE,
  },
  textDisplay14White: {
    ...textDisplayGray2_14,
    color: Color.WHITE,
  },
  textDisplay10White: {
    fontSize: fontSizes.fontSize10,
    fontFamily: fontFamily.SFRegular,
    color: Color.WHITE,
  },
  textDisplayBlue3_14: {
    ...textDisplayBlue3_14,
    color: Color.WHITE,
  },
  textDisplay12White: {
    fontSize: fontSizes.fontSize12,
    fontFamily: fontFamily.SFMedium,
    color: Color.WHITE,
  },
  font12DarkBlueMedium: {
    ...font12DarkBlueMedium,
    color: Color.WHITE,
  },
  font14DarkBlueMedium: {
    fontFamily: fontFamily.SFMedium,
    fontSize: fontSizes.fontSize14,
    color: Color.WHITE,
  },
  textDisplayDarkBlue12Medium: {
    ...textDisplayDarkBlue12Medium,
    color: Color.WHITE,
  },
  font13DarkBlueSemiBold: {
    ...font13DarkBlueSemiBold,
    color: Color.WHITE,
  },
  font14DarkBlueRegular: {
    fontFamily: fontFamily.SFRegular,
    fontSize: fontSizes.fontSize14,
    color: Color.WHITE,
  },
};

export const generateboxBottomShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    return {
      boxBottomShadow: {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      },
    };
  } else if (Platform.OS === 'android') {
    return {
      boxBottomShadow: {
        // elevation,
        // shadowColor: shadowColorAndroid,
      },
    };
  }
};
export const generateBoxTopShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    return {
      boxTopShadow: {
        shadowColor: shadowColorIos,
        shadowOffset: {width: xOffset, height: yOffset},
        shadowOpacity,
        shadowRadius,
      },
    };
  } else if (Platform.OS === 'android') {
    return {
      boxTopShadow: {
        // elevation,
        // shadowColor: shadowColorAndroid,
        // backgroundColor: '#0000', // Set an invisible background color
        // zIndex: 1,
        // You can also add other Android-specific styles here
      },
    };
  }
  return {}; // Handle other platforms if needed
};
export function padding(a, b, c, d) {
  return {
    paddingTop: a,
    paddingRight: b || b == 0 ? b : a,
    paddingBottom: c || c == 0 ? c : a,
    paddingLeft: d || d == 0 ? d : b || b == 0 ? b : a,
  };
}
export function margin(a, b, c, d) {
  return {
    marginTop: a,
    marginRight: b || b == 0 ? b : a,
    marginBottom: c || c == 0 ? c : a,
    marginLeft: d || d == 0 ? d : b || b == 0 ? b : a,
  };
}
