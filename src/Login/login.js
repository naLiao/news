import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import cookie from 'react-cookies'
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
        let {history:{push}} = this.props;
        let {name,password} = this.state;
        
        if(!name || !password){  //输入内容为空
            this.tipShow('输入不能为空');
        }else{
            fetch('http://127.0.0.1:88/api/user/login',{
                method:"post",
                body :new URLSearchParams({username:name,password}).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(e=>e.json())
            .then(data => {
                console.log(data);
                if(data.code===0){
                    this.tipShow('登录成功');
                    cookie.save('user', name, { path: '/' })
                    setTimeout(function(){
                        push('/index');
                    },1000);
                }else{
                    this.tipShow(data.msg);
                }
            })
        }
    }

    tipShow = (content)=>{
        let tip = this.refs.tip;
        tip.innerHTML = content;
        tip.style.opacity = 1;
        tip.style.zIndex = 1111;
        setTimeout(function(){
            tip.style.opacity = 0;
            tip.style.zIndex = -1;
        },1000)
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
export default withRouter(Login);