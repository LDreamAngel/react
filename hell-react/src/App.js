import React, { Component } from 'react';

//组件引用
import Header from './components/Header';
import Home from './components/Home';

//用ES6的写法继承上面react引入的Component
//App为父组件，Header和Home为子组件，Header和Home之间又为兄弟组件
class App extends Component {
  render() {
    const user={
      name:"LMQ",
      hobbies:["跑步","阅读"]
    }
    return (
      // 因为class为保留字，所以这块儿用className
      <div className="container">
       {/* 自定义组件的使用 */}
       <div className="row">
            <div className="col-xs-1 col-xs-offset-11"> 
              {/* 将父组件中的数据传递给子组件  */}
              <Header name={"LLHY"} age={12} obj={user}>
                 <p>我是App父组件传给Header子组件的子节点</p>
              </Header>
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
