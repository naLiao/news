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
            column:'all'
         };
    }

    //初始化
    componentDidMount (){
        let {dataColumn,getColumnData,getColCount,getNewsData} = this.props;
        getColumnData(1);
        getColCount('');
        getNewsData(1);
    }

    nav = (newColumn)=>{
        let {getNewsData,getColumnData,getColNewsData} = this.props;
        let {column} = this.state;

        if(newColumn !== column){
            if(newColumn==='all'){
                getNewsData(1,newColumn);
            }else{
                getColNewsData(1,newColumn);
            }
            this.setState({column:newColumn});
            // getColumnData(1);
        }
    }

    render(){
        let {dataColumn,url} = this.props;
        let {column} = this.state;
        // console.log(dataColumn);
        
        //设置栏目菜单宽度
        let w = 160*(dataColumn.total+1);
        if(this.refs.ul){
            this.refs.ul.style.width = w + 'px';
        }
        
        //栏目数据
        let columnArr = dataColumn.columns.map((e,i)=>{
            return (
                <li 
                    key={i}
                    className={column===e.path?'active':''}
                    onClick={this.nav.bind(this,e.path)}
                >
                    {e.column}
                </li>
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
                <div className="navContainer">
                    <ul className="nav" ref='ul'>
                        <li 
                            className={column==='all'?'active':''}
                            onClick={this.nav.bind(this,'all')}
                        >所有</li> 
                        {columnArr}
                    </ul>
                </div>
                <NewsList column={column}/>
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