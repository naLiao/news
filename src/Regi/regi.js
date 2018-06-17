import React from 'react';
import { Link } from 'react-router-dom';
import './regi.css';

class Regi extends React.Component {
    constructor(props){
        super(props);
        this.state = { };
    }
    render(){
        return (
            <div className="loginBox">
                <h2 className="title">注册</h2>
                <div className="inputContainer">
                    <i className="fa fa-briefcase"></i>
                    <input type="text" placeholder="用户名"/>
                </div>
                <div className="inputContainer">
                    <i className="fa fa-key"></i>
                    <input type="password" placeholder="密码"/>
                </div>
                <div className="inputContainer">
                    <i className="fa fa-key"></i>
                    <input type="password" placeholder="确认密码"/>
                </div>
                <div className="bigBtn">提交申请</div>
                <div className="regi">
                    <div className="tip2">你已经有账号了？</div>
                    <Link to="/login" className="regiBtn">转到登录</Link>
                </div>
            </div>
        )
    }
}
export default Regi;