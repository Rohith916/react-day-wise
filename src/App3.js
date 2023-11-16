import React, { Component } from 'react';

class ThemeSwitch extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: true,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;
    const containerStyle = {
      background: darkMode ? 'black' : 'white',
      color: darkMode ? 'white' : 'black',
      width: '100%', 
      height: '100%', 
    };
    const buttonText = darkMode ? 'Lightmode' : 'Darkmode';

    return (
      <div className="theme-container" style={containerStyle}>
        <center>
          <h1>{buttonText}</h1>
        </center>
        <center>
          <button onClick={this.toggleTheme}>Switch theme</button>
        </center>
      </div>
    );
  }
}

export default ThemeSwitch;
