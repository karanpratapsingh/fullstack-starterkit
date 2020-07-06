import { createMuiTheme, Theme } from '@material-ui/core/styles';

// https://www.materialpalette.com/
// TODO: split this into palette file
const palette = {
  primary: {
    light: '#D1C4E9',
    main: '#673AB7',
    dark: '#512DA8'
  },
  secondary: {
    main: '#00BCD4'
  },
  text: {
    primary: '#212121',
    secondary: '#757575'
  },

};

const theme: Theme = createMuiTheme({ palette });

export default theme;