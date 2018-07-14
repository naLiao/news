import React from 'react';
import { Link,withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './regi.css';

class Regi extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
        	phone:'',
        	isPhone:true,
        	username:'',
        	password1:'',
            password2:'',
            isPassword:true
        };
    }
    
    regi = ()=>{
        let {addUser} = this.props;
        let {phone,isPhone,isPassword,username,password1,password2} = this.state;
        
        //验证手机号码
        let a = /^1[345678]\d{9}$/.test(phone);
        if(a){
            this.setState({isPhone:true});
        }
    	if(!a){
    		this.setState({isPhone:false});
        }
        //验证密码
        if(password1 !== password2){
            this.setState({isPassword:false});
        }else{
            this.setState({isPassword:true});
        }

        if(a && password1===password2){
            fetch('http://127.0.0.1:88/api/user/add',{
                method:"post",
                body :new URLSearchParams({username,phone,password1}).toString(),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(e=>e.json())
            .then(data => {
                console.log(data);
                if(data.code===0){
                    console.log('注册成功');
                    
                }
            })
        }
    }
    
    //输入内容
    changePhone = (ev)=>{
    	this.setState({phone:ev.target.value});
    }
    changeUsername = (ev)=>{
    	this.setState({username:ev.target.value});
    }
    changePassword1 = (ev)=>{
    	this.setState({password1:ev.target.value});
    }
    changePassword2 = (ev)=>{
    	this.setState({password2:ev.target.value});
    }
    
    render(){
    	let {isPhone,isPassword} = this.state;
        let sty1 = isPhone? 'inputContainer':'inputContainer redBorder';
        let sty2 = isPassword? 'inputContainer':'inputContainer redBorder';
        return (
            <div className="loginBox">
                <h2 className="title">注册</h2>
                <div className={sty1}>
                    <i className="fa fa-phone"></i>
                    <input 
                    	type="text" 
                    	placeholder="手机号"
                        onBlur={this.verifyPhone}
                    	onChange={this.changePhone}
                	/>
                </div>
                <div className="inputContainer">
                    <i className="fa fa-briefcase"></i>
                    <input 
                    	type="text" 
                    	placeholder="用户名"
                    	onChange={this.changeUsername}
                	/>
                </div>
                <div className="inputContainer">
                    <i className="fa fa-key"></i>
                    <input
                    	type="password" 
                    	placeholder="密码"
                    	onChange={this.changePassword1}
                	/>
                </div>
                <div className={sty2}>
                    <i className="fa fa-key"></i>
                    <input 
                    	type="password" 
                    	placeholder="确认密码"
                    	onChange={this.changePassword2}
                	/>
                </div>
                <div
                	className="bigBtn"
                	onClick={this.regi}
            	>提交申请</div>
                <div className="regi">
                    <div className="tip2">你已经有账号了？</div>
                    <Link to="/login" className="regiBtn">转到登录</Link>
                </div>
            </div>
        )
    }
}
export default connect((state,ownProps)=>{
    return {
        dataAccount:state.reduceraccount,
        url:ownProps.url
    };
},dispatch=>bindActionCreators(actionCreators,dispatch))(withRouter(Regi));