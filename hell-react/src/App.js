import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//用ES6的写法继承上面react引入的Component
class App extends Component {
  render() {
    return (
      // 因为class为保留字，所以这块儿用className
      <div className="container">
         <div className="row">
            <div className="col-xs-1 col-xs-offset-11">  
              <h1>Hello React !!!</h1>
            </div>
         </div>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     {/* <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p> */}
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
