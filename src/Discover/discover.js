import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import Footer from '../Footer/footer';
import './discover.css';
import img1 from'../img/index/picnews.jpg';
import List from '../List/list';

class Discover extends React.Component {
    render(){
        let {data} = this.props;
        console.log(data);
        let commentArr = data.comment;
        return (
            <div className="box">
                <header className="header">
                    <div className="title">发现</div>
                    <div className="search">
                        <i className="fa fa-search"></i>
                    </div>
                </header>
                <ul>
                    <li>
                        <video className="video">
                            <source src="movie.mp4" type="video/mp4" />
                            <source src="movie.ogg" type="video/ogg" />
                            <source src="movie.webm" type="video/webm" />
                        </video>
                    </li>
                </ul>
                <Footer />
            </div>
        )
    }
}

export default connect((state)=>{
    return {data:state.reducermine};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Discover);