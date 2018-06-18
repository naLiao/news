import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../reducers/actions';
import './article.css';

class Header extends React.Component {
    render(){
        return (
            <header className="ArticleHeader">
                <Link to="/index/headline" className="fa fa-angle-left back"></Link>
            </header>
        )
    }
}

export default Header;