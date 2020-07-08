import React from 'react';
import ReactLogo from '@web/assets/images/logo.png';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette, typography, spacing, breakpoints }) => ({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  welcomeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  logo: {
    width: '40%',
    [breakpoints.down('sm')]: {
      width: '60%'
    },
    [breakpoints.down('xs')]: {
      width: '80%'
    }
  },
  title: {
    color: palette.grey[800],
    fontWeight: typography.fontWeightRegular,
    marginTop: spacing(4)
  },
  subtitle: {
    color: palette.grey[700],
    fontWeight: typography.fontWeightLight,
    marginTop: spacing(2)
  },
  body: {
    color: palette.grey[700],
    fontWeight: typography.fontWeightLight,
    marginTop: spacing(1)
  }
}));

function Home(): React.ReactElement<{}> {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Container className={classes.welcomeContainer}>
        <img className={classes.logo} src={ReactLogo} alt='starterkit' />
        <Typography variant='h4' className={classes.title}>
          Full Stack Starterkit
        </Typography>
        <Typography variant='body2' className={classes.subtitle}>
          GraphQL first starter kit that scales
        </Typography>
        <Typography variant='caption' className={classes.body}>
          powered by TypeScript
        </Typography>
      </Container>
    </Container>
  );
}

export default Home;
