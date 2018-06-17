import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './article.css';
import ArticleHeader from '../Article/header';
import ArticleFooter from '../footer/articleFooter';

class Article extends React.Component {
    render(){
        // let {data} = this.props;
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
                    <h2 className=" title">2018尼泊尔洒红节是十万人的狂欢聚会</h2>
                    <div className="detail">
                        <div className="left">
                            <span className="column">生活</span>
                            <span className="editor">张三</span><br/>   
                            <span className="time">2018-6-17</span>     
                        </div>
                        <div className="right">
                            <span className="read">
                                <i className="fa fa-book"></i>
                                1239
                            </span>
                            <span className="comment">
                                <i className="fa fa-comment"></i>
                                45
                            </span>
                            <span className="share">
                                <i className="fa fa-share"></i>
                                38
                            </span>    
                        </div>
                    </div>
                    <div className="main">
                        <p>在印度，洒红节又是印历的新年。洒红节原是庆祝春天，与创造和复始的行动有关，代表春分和谷物丰收，会向人们身上泼洒五颜六色的颜料。</p>
                        <p>传说古代有一个国王希兰卡亚西普生性残暴，而他的王子普拉拉德爱护百姓，受到百姓拥护。王子对父亲的专横跋扈表示了不满，于是父王大怒，让其不怕火烧的公主霍利嘉抱着王子跳入大火之中，准备把王子烧死。然而事与愿违，霍利嘉被烧成灰烬，普拉拉德却因为维施努的保护安然无恙。百姓们为了庆祝，便向小王子身上泼洒红颜色的水。洒红节便由此而来。</p>
                        <ul className="tags">
                            <li>文化</li>
                            <li>洒红节</li>
                            <li>节日</li>
                        </ul>
                    </div>
                </div>
                <div className="recommend">
                    <h2>推荐</h2>
                    <ul className="listNews">
                        {/* {recommendArr} */}
                    </ul>
                </div>
                <ArticleFooter />
            </div>
        )
    }
}

export default connect((state,ownProps)=>{
    return {data:state[ownProps.id]};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Article);