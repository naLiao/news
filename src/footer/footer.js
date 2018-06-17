import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../img/footer/sprite.png';
import './footer.css';

class Footer extends React.Component {
    render(){
        return (
            <div className="footer">
                <Link to="/index" className="home active">
                    <div className="pic"></div>
                    <span>首页</span>
                </Link>
                <Link to="/video" className="video">
                    <div className="pic"></div>
                    <span>视频</span>
                </Link>
                <Link to="/discover" className="discover">
                    <div className="pic"></div>
                    <span>发现</span>
                </Link>
                <Link to="/mine" className="mine">
                    <div className="pic"></div>
                    <span>我的</span>
                </Link>
            </div>
        )
    }
}

export default Footer;