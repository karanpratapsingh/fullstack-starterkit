import { Breakpoints } from '@material-ui/core/styles/createBreakpoints';
import { Overrides } from '@material-ui/core/styles/overrides';
import { pxToRem } from '@web/utils';

const typography = {
  fontFamily: 'Montserrat, sans-serif'
};

// https://material-ui.com/customization/breakpoints/

function createTypographyOverrides(breakpoints: Breakpoints): Overrides {
  return {
    MuiTypography: {
      h4: {
        fontSize: pxToRem(40),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(30)
        }
      },
      subtitle1: {
        fontSize: pxToRem(22),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(20)
        }
      },
      subtitle2: {
        fontSize: pxToRem(24),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(22)
        }
      },
      body1: {
        fontSize: pxToRem(18),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(16)
        }
      },
      body2: {
        fontSize: pxToRem(20),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(18)
        }
      },
      caption: {
        fontSize: pxToRem(16),
        [breakpoints.down('xs')]: {
          fontSize: pxToRem(14)
        }
      }
    }
  };
}

export { typography as default, createTypographyOverrides };
