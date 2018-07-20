import React from 'react';
import {connect} from 'react-redux';
// import {Link,withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './article.css';
import ArticleHeader from '../Article/header';

class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            name:'',
            isCollect:false
         };
    }

    componentWillMount(){
        let {getNewsById,readNumPlus,location:{state:{id}}} = this.props;

        this.setState({name: cookie.load('user')});
        
        getNewsById(id);
        readNumPlus(id);
    }

    collect = ()=>{
        //判断是否登录


        let {isCollect} = this.state;
        
        isCollect = !isCollect;
        if(isCollect){

        }

        this.setState({isCollect});

    }

    render(){
        let {dataArticle} = this.props;
        let {isCollect} = this.state;

        let sty = isCollect? 'bookmark active':'bookmark';

        if(!dataArticle) return null;
        // console.log(dataArticle);

        // let str = dataArticle.main;
        // str = str.replace('/\s+/',()=>{
        //     return '</p><p>';
        // })
        // console.log(str);

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
                <ArticleHeader />
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
                        <p>{dataArticle.main}</p>
                        <ul className="tags">
                            <li>文化</li>
                            <li>洒红节</li>
                            <li>节日</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="recommend">
                    <h2>推荐</h2>
                    <ul className="listNews">
                        {recommendArr}
                    </ul>
                </div>  */}
                //底部
                <div className="artilceFooter">
                    <Link to="/article/comment" className="comment active">
                        <div className="fa fa-comment"></div>
                        <span className="commentNum">293</span>
                    </Link>
                    <button 
                        className={sty}
                        onClick={this.collect}
                    >
                        <i className="fa fa-bookmark"></i>
                    </button>
                    <Link to="/mine" className="share">
                        <div className="fa fa-share"></div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        dataArticle:state.reducerarticle
    };
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Article);