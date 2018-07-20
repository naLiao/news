import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import Footer from '../Footer/footer';
import './mine.css';
import img1 from'../img/index/picnews.jpg';
import cookie from 'react-cookies'
import List from '../List/list';

class Mine extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name:''
        };
    }

    componentWillMount(){
        this.setState({name: cookie.load('user')});
    }
    
    render(){
        let {data} = this.props;
        let {name} = this.state;
        // console.log(name);

        return (
            <div className="box">
                <div className="mine">
                    <div className="avatar">
                        <Link to="/index">
                            <i className="fa fa-chevron-left"></i>
                        </Link>
                        {/* <Link to="/mine/setting">
                            <i className="fa fa-cog"></i>
                        </Link> */}
                    </div>
                    <h2 className="name">{name}</h2>
                    <ul className="three">
                        <li>
                            <Link to="/mine/bookmark">
                                <span className="num">209</span>
                                <span className="title">收藏</span>
                            </Link>
                        </li>
                        <li>
                            <span className="num">990</span>
                            <span className="title">历史</span>
                        </li>
                        <li>
                            <span className="num">24</span>
                            <span className="title">关注</span>
                        </li>
                    </ul>
                    <div className="comment">
                        <Link to="/mine/comment"><h2 className="bigtitle">收藏</h2></Link>
                        {/* <List arr={commentArr}/> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{
    return {data:state.reducermine};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(Mine);