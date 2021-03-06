import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import archer from './archer.png';
import { Navbar, Jumbotron, Button, Grid } from 'react-bootstrap';
class App extends Component {
  render() {
    return [
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}

        <div>
          <Navbar inverse fixedTop>
            {/*<Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">React App</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>*/}
          </Navbar>
          <Jumbotron>
            <Grid>
              <h1>Welcome to React</h1>
              <p>
                <Button
                  bsStyle="success"
                  bsSize="large"
                  href="http://react-bootstrap.github.io/components.html"
                  target="_blank"
                >
                  View React Bootstrap Docs
                </Button>
              </p>
            </Grid>
          </Jumbotron>
        </div>
        <div>
          <img src={archer} alt="archer" />
        </div>
      </div>
    ];
  }
}

export default App;
