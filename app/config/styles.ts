/*
 * Provides universal color configs used in the app.
 * Provides universal fonts used in the app.
 */
export const COLORS = {
  // colors
  primary: '#cc0000',
  secondary: '#111',
  accent: '#343ddc',
  black: '#1E1F20',
  white: '#FFFFFF',
  lightGray: '#e2e3e4',
  gray: '#BEC1D2',
  blackTransparent: 'rgba(0, 0, 0, 0.7)',
  greyTransparent: 'rgba(67, 85, 85, 0.7)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 16,
  icon: 24,

  // font sizes
  navTitle: 25,
  h1: 30,
  h2: 24,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 14,
  body2: 16,
};

export const FONTS = {
  navTitle: {/*fontFamily: 'Roboto-regular',*/ fontSize: SIZES.navTitle},
  largeTitleBold: {/*fontFamily: 'Roboto-Medium',*/ fontSize: SIZES.h2},
  h1: {
    /*fontFamily: 'Roboto-Medium',*/ fontSize: SIZES.h1 /*, lineHeight: 36*/,
  },
  h2: {
    /*fontFamily: 'Roboto-Medium',*/ fontSize: SIZES.h2 /*, lineHeight: 30*/,
  },
  h3: {
    /*fontFamily: 'Roboto-Medium',*/ fontSize: SIZES.h3 /*, lineHeight: 22*/,
  },
  h4: {
    /*fontFamily: 'Roboto-Medium',*/ fontSize: SIZES.h4 /*, lineHeight: 22*/,
  },
  h5: {
    /*fontFamily: 'Roboto-Medium',*/ fontSize: SIZES.h5 /*, lineHeight: 22*/,
  },
  body1: {
    /*fontFamily: 'Roboto-regular',*/ fontSize: SIZES.body1,
    //lineHeight: 20,
  },
  body2: {
    /*fontFamily: 'Roboto-regular',*/ fontSize: SIZES.body2,
    //lineHeight: 22,
  },
};

export default {COLORS, SIZES, FONTS};
