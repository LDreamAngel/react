import React, { Component } from 'react';

//组件引用
import Header from './components/Header';
import Home from './components/Home';

//用ES6的写法继承上面react引入的Component
class App extends Component {
  render() {
    return (
      // 因为class为保留字，所以这块儿用className
      <div className="container">
       {/* 自定义组件的使用 */}
       <div className="row">
            <div className="col-xs-1 col-xs-offset-11">  
              <Header/>
            </div>
         </div>

         <div className="row">
            <div className="col-xs-1 col-xs-offset-11">  
              <h1>Hello React !!!</h1>
            </div>
         </div>
        
         <div className="row">
            <div className="col-xs-1 col-xs-offset-11">  
              <Home/>
            </div>
         </div>
      </div>
    );
  }
}

export default App;
