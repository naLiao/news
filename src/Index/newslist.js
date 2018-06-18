import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import img1 from'../img/index/picnews.jpg';

class NewsList extends React.Component {
    render(){
        let {data} = this.props;
        console.log('====================================')
        console.log(data)
        console.log('====================================')
        let topNews = data.filter(e=>e.top)[0];
        let path=topNews.picSrc;
        let newArr = data.filter(e=>e.top===false);
        newArr = newArr.map((e,i)=>{
            return (
                <li key={i} >
                    <Link to='/article/'>
                        <img src={img1} alt=""/>
                        <div className="right">
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
                        </div>
                    </Link>
                </li>
            )
        })
        return (
            <div className="main">
                <div className="picNews">
                    <img src={img1} alt={topNews.title}/>
                    <p className="title">{topNews.title}</p>
                </div>
                <ul className="listNews">
                    {newArr}
                </ul>
            </div>
        )
    }
}

export default connect((state,ownProps)=>{
    return {data:state[ownProps.n]};
},(dispatch)=>{
    return bindActionCreators(actionCreators,dispatch);
})(NewsList);