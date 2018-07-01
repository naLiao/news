import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import img1 from'../img/index/picnews.jpg';

class NewsList extends React.Component {
    constructor(props){
        super(props);
        this.state = {  };
    }
    
    //初始化
    componentWillMount (){
        let {getNewsData,path} = this.props;
        getNewsData(path,1);
    }

    componentWillReceiveProps(){
        let {getNewsData,path} = this.props;
        // getNewsData(path,1);
    }

    render(){
        let {dataNews} = this.props;
        let newArr = dataNews.map((e,i)=>{
            return (
                <li key={i} >
                    <Link to='/article/'>
                        <div className="title">{e.title}</div>
                        <span className="column">{e.column}</span>
                        <div className="threeNum">
                            <span className="read">
                                <i className="fa fa-book"></i>
                                <span>{e.read}</span>
                            </span>
                            <span className="comment">
                                <i className="fa fa-comment"></i>
                                <span>{e.comment}</span>
                            </span>
                            <span className="share">
                                <i className="fa fa-share"></i>
                                <span>{e.share}</span>
                            </span>
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

export default connect((state,ownProps)=>{
    return {
        dataNews:state.reducernews
    };
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(NewsList);