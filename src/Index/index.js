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
            //栏目起始位置
            oriX:0,
            //轮播图起始位置
            startPointX:0,
            startPicX:0,
            now:0,
            w:0,
            column:'all'
         };
    }

    //初始化
    // async componentDidMount (){
    //     let {dataColumn,getPicData,getColumnData,getColCount,getMobileNewsData} = this.props;
    //     await getColumnData(1);
    //     await getColCount('');
    //     await getMobileNewsData(1);
    //     await getPicData();

    //     let that = this;
    //     await (function(){
    //         let picList = that.refs.picList;
    //         picList.innerHTML += picList.innerHTML;
    //     })();
    // }

    componentWillMount (){
        let {dataColumn,getPicData,getColumnData,getColCount,getMobileNewsData} = this.props;
        getColumnData(1);
        getColCount('');
        getMobileNewsData(1);
        getPicData();

        let that = this;
        
        // setTimeout(function(){
        //     let picList = that.refs.picList;
        //     picList.innerHTML += picList.innerHTML;
        // },500);
    }

    nav = (newColumn)=>{
        let {getMobileNewsData,getColumnData,getColNewsData} = this.props;
        let {column} = this.state;

        if(newColumn !== column){
            if(newColumn==='all'){
                getMobileNewsData(1);
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
    picStart = (e)=>{
        let {now} = this.state;
        let picList = this.refs.picList;

        //无缝处理
        picList.style.transition = "none";
        if(now == 0){//会有拖出的风险
			now = 3;//切换到第二组第0张
		} else if(now == 5) {//最后一张会有拖出去的风险
			now = 2;//切换到第一组最后一张	
        }

        // console.log(now);
        
        this.setState({now});
        let screenW = document.documentElement.clientWidth;  //px
        picList.style.left = -now*screenW + 'px';

        this.setState({
            startPointX:e.changedTouches[0].pageX,
            startPicX:parseFloat(getComputedStyle(picList)['left'])
        });
    }
    //滑动中
    picMove = (e)=>{
        let {startPointX,startPicX} = this.state;
        let picList = this.refs.picList;
        let nowPointX = e.changedTouches[0].pageX;
        let nowL = nowPointX-startPointX + startPicX;
        picList.style.left = nowL +'px';
    }
    //滑动结束
    picEnd = (e)=>{
        let {now,startPointX} = this.state;
        let nowPointX = e.changedTouches[0].pageX;
        let screenW = document.documentElement.clientWidth;  //px
        let picList = this.refs.picList;
        let dots = this.refs.dots;
        let disL = nowPointX-startPointX;
        if(Math.abs(disL)>80){
            now += -disL/Math.abs(disL);
        }
        this.setState({now});

        // console.log(now);

        picList.style.transition = '.3s';
        picList.style.left = -now*screenW + 'px';
        for(let i=0;i<dots.children.length;i++){
            dots.children[i].className = '';
        }
        dots.children[now%dots.children.length].className = 'active';
    }

    render(){
        let {dataColumn,dataPicNews} = this.props;
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

        //轮播图数据
        console.log(dataPicNews);
        if(dataPicNews.length===3){
            dataPicNews = dataPicNews.concat(dataPicNews);
        }
        
        let picArr = dataPicNews.map((e,i)=>{
            // console.log(e.id);
            return (
                <li
                    key={i}
                >
                    <Link to={{
                            pathname:'/article',
                            state:{id:e.id,arr:[1,2,3]}
                        }}>
                        <img src={require(`../${e.picSrc}`)} />
                        <span>{e.title}</span>
                    </Link>
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
                            {picArr}
                        </ul>
                        <nav className="dots" ref="dots">
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
        dataPicNews:state.reducerpicnews,
        dataColumn:state.reducercolumn
    };
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Index);