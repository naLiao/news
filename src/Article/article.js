import React from 'react';
import {connect} from 'react-redux';
// import {Link,withRouter} from 'react-router-dom';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import cookie from 'react-cookies'
import './article.css';

class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
         };
    }

    componentWillMount(){
        // console.log(this.props);
        let {getCollectData,dataCollectList,getNewsById,readNumPlus,location:{state:{id}}} = this.props;

        // console.log(id);
        getNewsById(id);
        readNumPlus(id);

        //登录状态则请求收藏列表数据
        let name = cookie.load('user');
        // console.log(name);
        if(name){
            getCollectData(name);
        }
    }

    collect = ()=>{
        let {getNewsById,discollect,getCollectData,collect,history:{push},location:{state:{id}}} = this.props;

        //点击收藏时判断是否登录，未登录跳转到登录页面
        let name = cookie.load('user');
        if(!name){
            this.tipShow('您还未登录');
            setTimeout(function(){
                push('/');
            },1500);
        }

        //如果当前是收藏状态，点击后图标变回灰色
        if(this.refs.bookmark.classList.contains('active')){
            console.log('取消收藏');
            discollect(name,id);

            setTimeout(function(){
                getCollectData(name);
            },200);
            // getNewsById(id);
        }
        
        //如果是未收藏状态，点击后收藏，图标变成黄色
        if(!this.refs.bookmark.classList.contains('active')){
            console.log('收藏');
            collect(name,id);

            setTimeout(function(){
                getCollectData(name);
            },200);
            //getNewsById(id);
        }
    }

    //返回
    back = ()=>{
        let {history:{go}} = this.props;
        go(-1);
    }

    //弹出提示框
    tipShow = (content)=>{
        let tip = this.refs.tip;
        tip.innerHTML = content;
        tip.style.opacity = 1;
        setTimeout(function(){
            tip.style.opacity = 0;
        },1000);
    }

    render(){
        // console.log('render');
        let {dataArticle,dataCollectList,location:{state:{id}}} = this.props;
        let isCollect = dataCollectList.some(e=>e===id);
        // console.log(isCollect);
        let sty = isCollect? 'bookmark active':'bookmark';
        let mainArr = [];
        if(dataArticle.main){
            let str = dataArticle.main.replace(/\s+/g,'aaa');
            let arr = str.split('aaa');
            mainArr = arr.map((e,i)=>{
                return <p key={i}>{e}</p>
            })
            // console.log(mainArr);
        }
        

        let d = new Date();
        d.setTime(d.getTime(dataArticle.time));
        let time = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
        
        // let recommendArr = data.filter(e=>e.top===false);
        // recommendArr = recommendArr.map((e,i)=>{
        //     return (
        //         <li key={i} >
        //             <Link to=''>
        //                 <img src={img1} alt=""/>
        //                 <div className="right">
        //                     <div className="title">{e.title}</div>
        //                     <span className="column">{e.column}</span>
        //                     <div className="threeNum">
        //                         <span className="read">
        //                             <i className="fa fa-book"></i>
        //                             <span>{e.read}</span>
        //                         </span>
        //                         <span className="comment">
        //                             <i className="fa fa-comment"></i>
        //                             <span>{e.comment}</span>
        //                         </span>
        //                         <span className="share">
        //                             <i className="fa fa-share"></i>
        //                             <span>{e.share}</span>
        //                         </span>
        //                     </div>
        //                 </div>
        //             </Link>
        //         </li>
        //     )
        // })
        return (
            <div className="box">
                <header className="ArticleHeader">
                    <button 
                        className="back"
                        onClick={this.back}
                    >
                        <i className="fa fa-angle-left"></i>
                    </button>
                </header>
                <div className="article">
                    <h2 className=" title">{dataArticle.title}</h2>
                    <div className="detail">
                        <div className="left">
                            <span className="column">{dataArticle.column}</span>
                            <span className="editor">{dataArticle.editor}</span><br/>   
                            <span className="time">{time}</span>     
                        </div>
                        <div className="right">
                            <span className="read">
                                <i className="fa fa-book"></i>
                                {dataArticle.readNum}
                            </span>
                            <span className="comment">
                                <i className="fa fa-comment"></i>
                                {dataArticle.commentNum}
                            </span>
                            <span className="share">
                                <i className="fa fa-share"></i>
                                {dataArticle.shareNum}
                            </span>    
                        </div>
                    </div>
                    <div className="main">
                        {mainArr}
                        {/* <ul className="tags">
                            <li>文化</li>
                            <li>洒红节</li>
                            <li>节日</li>
                        </ul> */}
                    </div>
                </div>
                {/* <div className="recommend">
                    <h2>推荐</h2>
                    <ul className="listNews">
                        {recommendArr}
                    </ul>
                </div>  */}
                {/* //底部 */}
                <div className="artilceFooter">
                    <Link to="/article/comment" className="comment active">
                        <div className="fa fa-comment"></div>
                        <span className="commentNum">293</span>
                    </Link>
                    <button 
                        ref='bookmark'
                        className={sty}
                        onClick={this.collect}
                    >
                        <i className="fa fa-bookmark"></i>
                    </button>
                    <Link to="/mine" className="share">
                        <div className="fa fa-share"></div>
                    </Link>
                </div>
                <div 
                    id="tip"
                    ref="tip"
                >输入不能为空</div>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        dataArticle:state.reducerarticle,
        dataCollectList:state.reducercollect.list
    };
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(withRouter(Article));