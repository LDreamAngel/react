import React, { Component } from 'react';
// 引入数据类型
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    // 打印父组件传递过来的值
    console.log(this.props)
    return (
      <div className="container">
         <div className="row">
            <div className="col-xs-1 col-xs-offset-11">  
              <h1>Header</h1>
              <p>他的名字是{this.props.name},他今年{this.props.age}岁</p>
              <h4>爱好</h4>
              <ul>
                {/* 循环创建 */}
                {this.props.obj.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
              </ul>
              {/* 接收父组件传过来的子节点 */}
              <div>{this.props.children}</div>
            </div>
         </div>
      </div>
    );
  }
}

//定义数据类型,当数据类型不正确的时候回报错
Header.propTypes={
   name:PropTypes.string,
   age:PropTypes.number,
   obj:PropTypes.object,
   children:PropTypes.element.isRequired,
}
