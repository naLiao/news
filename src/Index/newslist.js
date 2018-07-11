import React from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import img1 from'../img/index/picnews.jpg';

class NewsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            path:'all'
         };
    }

    // goToArticle = (id)=>{
    //     let {history} = this.props;
    //     history.push('/article/'+id);
    // }
    
    render(){
        let {dataNews} = this.props;
        console.log(dataNews);
        
        let newArr = dataNews.map((e,i)=>{
            return (
                <li 
                    key={i} 
                    // onClick={this.goToArticle.bind(this,e.id)}
                >
                    <Link to={{
                            pathname:'/article',
                            state:{id:e.id,arr:[1,2,3]}
                        }}>
                        {/* <Link to={location => (   {...location,pathname:'/article',state:{id:e.id}}   )}> */}
                        <div className="title">{e.title}</div>
                        <div className="sub_content">
                            <span className="column">{e.column}</span>
                            <div className="threeNum">
                                <span className="read">
                                    <i className="fa fa-book"></i>
                                    <span>{e.readNum}</span>
                                </span>
                                <span className="comment">
                                    <i className="fa fa-comment"></i>
                                    <span>{e.commentNum}</span>
                                </span>
                                <span className="share">
                                    <i className="fa fa-share"></i>
                                    <span>{e.shareNum}</span>
                                </span>
                            </div>
                        </div>
                    </Link>
                </li>
            )
        })
        return (
            <div className="main">
                {/* <div className="picNews">
                    <img src={img1} alt={topNews.title}/>
                    <p className="title">{topNews.title}</p>
                </div> */}
                <ul className="listNews">
                    {newArr}
                </ul>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        dataNews:state.reducernews
    };
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(withRouter(NewsList));