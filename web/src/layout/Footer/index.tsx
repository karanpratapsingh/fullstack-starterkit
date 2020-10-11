import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, typography, spacing }) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: `${spacing(2)}px 0px`,
    backgroundColor: palette.grey[100]
  },
  body: {
    fontSize: 14,
    color: palette.grey[600],
    fontWeight: typography.fontWeightLight,
    marginTop: spacing(1)
  }
}));

function Footer(): React.ReactElement<{}> {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <Container className={classes.container} maxWidth='xl'>
      <Typography variant='caption' className={classes.body}>
        Made with React and GraphQL | Copyright {year}
      </Typography>
    </Container>
  );
}

export default Footer;
