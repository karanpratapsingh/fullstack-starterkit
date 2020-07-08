import { createMuiTheme, Theme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import palette from './palette';
import typography, { createTypographyOverrides } from './typography';

const breakpoints = createBreakpoints({});

const overrides = createTypographyOverrides(breakpoints);

const theme: Theme = createMuiTheme({ palette, typography, breakpoints, overrides });

export default theme;
