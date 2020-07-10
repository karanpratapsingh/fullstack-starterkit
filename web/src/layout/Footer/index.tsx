import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, typography, spacing }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: `${spacing(1)}px 0px`,
    backgroundColor: palette.grey[100]
  },
  body: {
    fontSize: 12,
    color: palette.grey[600],
    fontWeight: typography.fontWeightLight,
    marginTop: spacing(1)
  }
}));

function Footer(): React.ReactElement<{}> {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='xl'>
      <Typography variant='caption' className={classes.body}>
        Made with 🌮 and React
      </Typography>
    </Container>
  );
}

export default Footer;
