import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './article.css';

class Comment extends React.Component {
    render(){
        return (
            <div className="box">
                <header className="commentHeader">
                    <Link to="/index/headline" className="fa fa-angle-left back"></Link>
                </header>
                <div className="comment">
                    <div className="commentTitle">
                        <span className="title">评论</span>
                        <span className="num">(299+)</span>
                    </div>
                    <ul className="commentList">
                        <li>
                            <img className="avatar" src="/img/avatar.jpg" alt=""/>
                            <div className="right">
                                <h2>我不是秋秋</h2>
                                <p>农民改善性住房子也不可以吗？让农民奔小康。这是一个什么样的社会？农民改善性住房子也不可以吗？</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src="/img/avatar.jpg" alt=""/>
                            <div className="right">
                                <h2>我不是秋秋</h2>
                                <p>农民改善性住房子也不可以吗？让农民奔小康。这是一个什么样的社会？农民改善性住房子也不可以吗？</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src="/img/avatar.jpg" alt=""/>
                            <div className="right">
                                <h2>我不是秋秋</h2>
                                <p>农民改善性住房子也不可以吗？让农民奔小康。这是一个什么样的社会？农民改善性住房子也不可以吗？</p>
                            </div>
                        </li>
                        <li>
                            <img className="avatar" src="/img/avatar.jpg" alt=""/>
                            <div className="right">
                                <h2>我不是秋秋</h2>
                                <p>农民改善性住房子也不可以吗？让农民奔小康。这是一个什么样的社会？农民改善性住房子也不可以吗？</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <footer className="commentFooter">
                    <input type="text" placeholder="点评一下吧"/>
                    <button className="submitBtn fa fa-check"></button>
                </footer>
            </div>
        )
    }
}

export default connect((state,ownProps)=>{
    return {data:state[ownProps.id]};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Comment);