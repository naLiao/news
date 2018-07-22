import React from 'react';
import {connect} from 'react-redux';
import {Link,withRouter} from 'react-router-dom';
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
            name:'',
            bookmarkArr:[]
        };
    }

    componentWillMount(){
        let {getCollectData} = this.props;
        let name = cookie.load('user');
        this.setState({name});
        getCollectData(name);
    }

    back = ()=>{
        let {history:{go}} = this.props;
        go(-1);
    }

    log_out = ()=>{
        let {history:{push}} = this.props;
        cookie.remove('user');
        push('/');
    }
    
    render(){
        let {data} = this.props;
        let {name} = this.state;
        let len = data.news.length;
        console.log(data);
        let newArr = data.news.slice(0,3);
        newArr = newArr.map((e,i)=>{
            // console.log(e._id);
            
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
                <div className="mine">
                    <div className="avatar">
                        <Link to="/index">
                        <button>
                            <i className="fa fa-angle-left"></i>
                        </button>
                        </Link>
                        <button
                            onClick={this.log_out}
                        >
                            <i className="fa fa-sign-out"></i>
                        </button>
                    </div>
                    <h2 className="name">{name}</h2>
                    <ul className="three">
                        <li>
                            <Link to="/mine/bookmark">
                                <span className="num">{len}</span>
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
                        <h2 className="bigtitle">收藏</h2>
                        <ul className="listNews">
                            {newArr}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{
    return {data:state.reducercollect};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(withRouter(Mine));