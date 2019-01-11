import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    let content="";
    if (true) {
      content="加判断语句输出"
    }
    return (
      <div className="container">
         <div className="row">
            <div className="col-xs-1 col-xs-offset-11">  
              <h1>Home</h1>
              {/* 动态数据用{}输出，且只能为一行 */}
              <p>{2+2}</p>
              <p>{"字符串"}</p>
              <p>{"动态数据用{}输出，且只能为一行"}</p>
              <p>{content}</p>
              <p>{1?"三元运算符输出":"不显示的内容"}</p>
            </div>
         </div>
      </div>
    );
  }
}

