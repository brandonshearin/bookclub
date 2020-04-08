import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline } from '@material-ui/core';
import 'typeface-roboto';
import ButtonAppBar from './components/AppBar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBody from './components/AppBody'
// const useStyles = makeStyles({
// })

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <CssBaseline />
        <ButtonAppBar></ButtonAppBar>
        <AppBody></AppBody>
      </Router>
    </React.Fragment >
  );
}


ReactDOM.render(<App />, document.querySelector('#root'));