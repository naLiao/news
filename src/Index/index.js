import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './index.css';
import cookie from 'react-cookies'
import NewsList from './newslist';

//配置视口
var num = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+ num +',user-scalable=no,minimum-scale='+ num +',maximum-scale='+  num +'">');
var width = document.documentElement.clientWidth;
document.documentElement.style.fontSize = width/15+'px';

document.addEventListener('touchstart',function(){
    return false;
})

class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            //手指滑动起始位置
            oriX:0,
            w:0,
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
        }
    }

    //栏目条滑动开始
    start = (e)=>{
        let oriX = e.changedTouches[0].pageX;
        this.setState({oriX});
        return false;
    }
    //滑动中
    move = (e)=>{
        let {dataColumn} = this.props;
        let {oriX} = this.state;
        let nowX = e.changedTouches[0].pageX;
        let fontSize = parseFloat(window.getComputedStyle(document.documentElement)["fontSize"]);

        let w = 3.2*fontSize*(dataColumn.total+1);  //px
        let screenW = document.documentElement.clientWidth;  //px
        let dis = w - screenW+40;

        // console.log(dis);

        let left = nowX-oriX;
        if(left>0){
            left = 0;
        }
        if(left<-dis){
            left = -dis;
        }

        this.refs.ul.style.left = left + 'px';
        return false;
    }
    //滑动结束
    end = ()=>{
        this.refs.ul.removeEventListener('mousestart',this.start);
        this.refs.ul.removeEventListener('mousemove',this.move);
    }

    //轮播图滑动开始
    picStart = ()=>{

    }

    render(){
        let {dataColumn,url} = this.props;
        let {column} = this.state;
        // console.log(dataColumn);
        
        //设置栏目菜单宽度
        let w = 3.2*(dataColumn.total+1);
        if(this.refs.ul){
            this.refs.ul.style.width = w + 'rem';
        }

        //是否有轮播图
        let sty = 'imgTab noShow';
        if(column==='all'){
            sty = 'imgTab';
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
                    <Link 
                        className="search"
                        to="/mine"
                    >
                        <i className="fa fa-bars"></i>
                    </Link>
                </header>
                <div className="navContainer">
                    <ul 
                        className="nav" 
                        ref='ul'
                        onTouchStart={this.start}
                        onTouchMove={this.move}
                        onTouchEnd={this.end}
                    >
                        <li 
                            className={column==='all'?'active':''}
                            onClick={this.nav.bind(this,'all')}
                        >所有</li> 
                        {columnArr}
                    </ul>
                </div>
                <div className={sty}>
                    <div className="tab">
                        <ul 
                            className="picList"
                            ref="picList"
                            onTouchStart={this.picStart}
                            onTouchMove={this.picMove}
                            onTouchEnd={this.picEnd}
                        >
                            <li>
                                <a href="#">
                                    <img src={require('../img/index/picnews.jpg')} />
                                    <span>标题1</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require('../img/index/picnews.jpg')} />
                                    <span>标题2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={require('../img/index/picnews.jpg')} />
                                    <span>标题3</span>
                                </a>
                            </li>
                        </ul>
                        <nav className="dots">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                        </nav>
                    </div>
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