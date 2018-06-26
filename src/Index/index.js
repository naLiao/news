import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './index.css';
import NewsList from './newslist';
import Footer from '../Footer/footer';

//配置视口
var num = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+ num +',user-scalable=no,minimum-scale='+ num +',maximum-scale='+  num +'">');
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/15+'px';

class Index extends React.Component {
    render(){
        let {data,location} = this.props;
        let newArr = data.map((e,i)=>{
            return (
            <NavLink 
                to={e.path}
                key={i}
                activeClassName="active"
            >
                {e.name}
            </NavLink>)
        })
        let com = (location.pathname==='/index'||location.pathname==='/')?<NewsList {...{n:'reducerheadline'}}/>:'';
        return (
            <div className="box">
                <header className="header">
                    <div className="title">首页</div>
                    <div className="search">
                        <i className="fa fa-search"></i>
                    </div>
                </header>
                <nav className="nav">
                    {newArr}
                </nav>
                {com}
                <Footer />
            </div>
        )
    }
}
export default connect((state,ownProps)=>{
    return {data:state.reducernav};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Index);