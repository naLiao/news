import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import Footer from '../Footer/footer';
import './mine.css';
import img1 from'../img/index/picnews.jpg';
import List from '../List/list';

class BookMark extends React.Component {
    render(){
        let {data} = this.props;
        console.log(data);
        let newArr = data.news.map((e,i)=>{
            
            return (
                <li 
                    key={i} 
                >
                    <Link to={{
                            pathname:'/article',
                            state:{id:e._id}
                        }}>
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
            <div className="box">
                <header className="commentHeader">
                    <Link to="/mine" className="fa fa-angle-left back"></Link>
                    收藏列表
                </header>
                <ul className="listNews">
                    {newArr}
                </ul>
            </div>
        )
    }
}

export default connect((state,ownProps)=>{
    return {data:state.reducercollect};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(BookMark);