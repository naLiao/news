import React from 'react';
import {renderComponent} from './fn';
import {Route,Redirect,Link} from 'react-router-dom';
//所有组件引入
import Index from '../Index/index';
import NewsList from '../Index/newslist';
import Article from '../Article/article';
import Comment from '../Article/comment';
import Video from '../Video/video';
import Discover from '../Discover/discover';
import Mine from '../Mine/mine';
import BookMark from '../Mine/bookmark';
import Login from '../Login/login';
import Regi from '../Regi/regi';

let routes = [
    {
        path:'/',
        exact:true,
        render:(url)=>{
            return <Login url={url}/>
        }
    },
    // {
    //     path:'/index',
    //     exact:true,
    //     render:()=>{
    //         return <Redirect to="/index/headline" />
    //     }
    // },
    {
        path:'/index',
        render:(url)=>{
            return <Index url={url}/>
        }
    },
    {
        path:'/video',
        component:Video
    },
    {
        path:'/discover',
        component:Discover
    },
    {
        path:'/mine',
        exact:true,
        component:Mine
    },
    {
        path:'/mine/bookmark',
        component:BookMark
    },
    {
        path:'/article',
        component:Article
        // render:(url)=>{
        //     return <Article url={url}/>
        // }
    },
    {
        path:'/article/comment',
        render:(url)=>{
            return <Comment url={url}/>
        }
    },
    {
        path:'/login',
        render:(url)=>{
            return <Login url={url}/>;
        }
    },
    {
        path:'/regi',
        component:Regi
    }
];

class App extends React.Component {
    render(){
        return (
            <div>
                {renderComponent(routes)}
            </div>
        )
    }
}
export default App;