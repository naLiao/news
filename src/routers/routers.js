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
        path:'/index',
        component:Index
    },
    {
        path:'/index/:id',
        render:({match})=>{
            let id = 'headline';
            if(match.params) {id = match.params.id}
            switch(id){
                case 'headline':
                    return <NewsList {...{n:'reducerheadline'}}/>
                case 'current':
                    return <NewsList {...{n:'reducercurrent'}}/>
                case 'finance':
                    return <NewsList {...{n:'reducerfinance'}}/>
                case 'life':
                    return <NewsList {...{n:'reducerlife'}}/>
                default:
                    return <NewsList {...{n:'reducerheadline'}}/>
            }
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
        exact:true,
        component:Article
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