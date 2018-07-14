import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        	name:'',
        	password:''
        };
    }
    //点击登录
    login = ()=>{
        let {url:{history}} = this.props;
        let {name,password} = this.state;
        
        if(!name || !password){  //输入内容为空
            let tip = this.refs.tip;
            tip.innerHTML = '输入不能为空';
            tip.style.opacity = 1;
            setTimeout(function(){
                tip.style.opacity = 0;
            },1000)
        }else{
            history.push('/index/headline');
        }
    }
    
    changeName = (ev)=>{
    	this.setState({name:ev.target.value});
    }
    changePassword = (ev)=>{
    	this.setState({password:ev.target.value});
    }
    
    render(){
    	let {name,password} = this.state;
        return (
            <div className="loginBox">
                <h2 className="title">登录</h2>
                <div className="inputContainer">
                    <i className="fa fa-briefcase"></i>
                    <input
                    	autofocus='autofocus'
                        type="text"
                        placeholder="用户名"
                        onInput={this.changeName}
                    />
                </div>
                <div className="inputContainer">
                    <i className="fa fa-key"></i>
                    <input
                        type="password"
                        placeholder="密码"
                        onInput={this.changePassword}
                    />
                </div>
                <div 
                    className="bigBtn"
                    onClick = {this.login}
                >确认</div>
                <p className="forget">忘记密码？</p>
                <ul className="three">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="regi">
                    <div className="tip">抱歉，我还没有账号信息</div>
                    <Link to="/regi" className="regiBtn">申请注册</Link>
                </div>
                <div 
                    id="tip"
                    ref="tip"
                >输入不能为空</div>
            </div>
        )
    }
}
export default Login;