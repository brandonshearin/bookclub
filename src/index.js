import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, Grid } from '@material-ui/core';
import 'typeface-roboto';
import ButtonAppBar from './components/AppBar';
import ProfileCard from './components/ProfileCard';
import {makeStyles} from '@material-ui/core/styles'
// import CenteredGrid from './components/Grid';

const useStyles = makeStyles({
  topPos: {
    marginTop:10,
  }
})
const App = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar></ButtonAppBar>
      <Grid container spacing={2} className={classes.topPos} alignItems="center" justify="center">
      {generateProfiles()}
      </Grid>
      
    </React.Fragment>
  );
}

const generateProfiles = () => {
  let arr = []
  for(var i=0;i<9;i++){
    arr.push(
      <Grid item key={i}>
        <ProfileCard ></ProfileCard>
      </Grid>
    )
  }
  return arr
}

ReactDOM.render(<App />, document.querySelector('#root'));