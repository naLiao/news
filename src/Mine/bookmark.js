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
        let bookmarkArr = data.bookmark;
        return (
            <div className="box">
                <header className="commentHeader">
                    <Link to="/mine" className="fa fa-angle-left back"></Link>
                </header>
                <div className="boormarkBox">
                    <h2 className="bigTitle">收藏</h2>
                    <List arr={bookmarkArr}/>
                </div>
            </div>
        )
    }
}

export default connect((state,ownProps)=>{
    return {data:state.reducermine};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(BookMark);