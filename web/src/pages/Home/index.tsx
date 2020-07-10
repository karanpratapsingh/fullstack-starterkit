import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Welcome from './components/Welcome';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}));

function Home(): React.ReactElement<{}> {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth='xl'>
      <Welcome />
    </Container>
  );
}

export default Home;
