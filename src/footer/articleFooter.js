import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class ArticleFooter extends React.Component {
    render(){
        return (
            <div className="footer">
                <Link to="/article/comment" className="comment active">
                    <div className="fa fa-comment"></div>
                    <span className="commentNum">293</span>
                </Link>
                <Link to="/index" className="bookmark active">
                    <div className="fa fa-bookmark"></div>
                </Link>
                <Link to="/mine" className="share">
                    <div className="fa fa-share"></div>
                </Link>
            </div>
        )
    }
}

export default ArticleFooter;