import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './index.css';
import NewsList from './newslist';

//配置视口
var num = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+ num +',user-scalable=no,minimum-scale='+ num +',maximum-scale='+  num +'">');
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/15+'px';

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            path:'headline'
         };
    }

    //初始化
    componentDidMount (){
        let {getColumnData,getNewsData} = this.props;
        console.log('初始化');
        //获取栏目
        getColumnData(1);  
    }

    componentWillReceiveProps({url:{match:{params:{path}}}}){
        this.setState({path});
    }

    render(){
        let {dataColumn,url} = this.props;
        let {path} = this.state;
        
        let columnArr = dataColumn.map((e,i)=>{
            return (
                <NavLink 
                    to={e.path}
                    key={i}
                    activeClassName="active"
                >
                    {e.column}
                </NavLink>
            )
        })
        return (
            <div className="box">
                <header className="header">
                    <div className="title">首页</div>
                    <div className="search">
                        <i className="fa fa-search"></i>
                    </div>
                </header>
                <nav className="nav">
                    {columnArr}
                </nav>
                <NewsList path={path}/>
            </div>
        )
    }
}
export default connect((state,ownProps)=>{
    return {
        dataNews:state.reducernews,
        dataColumn:state.reducercolumn
    };
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Index);