import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
  state = {};

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank you for taking time to provide this data</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
