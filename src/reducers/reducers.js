import {combineReducers} from 'redux';

//新闻管理
const reducernews = (state=[],action)=>{
    switch(action.type){
        //初始化获取数据
        case 'GET_DATA':
            let newArr = state.slice();
            newArr = action.res;
            return newArr;
        case 'GET_COL_NEWS_DATA':
            let newArr2 = state.slice();
            newArr2 = action.res;
            // console.log(action.res);
            return newArr2;
        default:
            return state;
    }
    return state;
}

//轮播图新闻管理
const reducerpicnews = (state=[],action)=>{
    switch(action.type){
        //初始化获取数据
        case 'GET_PIC_DATA':
            let newArr = state.slice();
            newArr = action.res;
            return newArr;
        default:
            return state;
    }
}

//文章页
const reducerarticle = (state={},action)=>{
    switch(action.type){
        case 'GET_NEWS_BY_ID':
            let newObj = Object.assign({},state);
            newObj = action.res;
            return newObj;
        default:
            return state;
    }
    return state;
}

//栏目数据
const reducercolumn = (state={columns:[],total:0},action)=>{
    switch(action.type){
        case 'GET_COLUMN':
            let newObj = Object.assign({},state);
            newObj.columns = action.res;
            // console.log(action.res);
            return newObj;
        case 'GET_COL_TOTAL':
            let newObj2 = Object.assign({},state);
            newObj2.total = action.total;
            // console.log(action.total);
            return newObj2;
        default:
            return state;
    }
}

//收藏列表
const reducercollect = (state={list:[],news:[]},action)=>{
    switch(action.type){
        //初始化获取数据
        case 'GET_COLLECT_DATA':
            let newObj = Object.assign({},state);
            newObj.list = action.list;
            newObj.news = action.news;
            return newObj;
        case 'DIS_COLLECT':
            let newObj2 = Object.assign({},state);
            newObj2.list = action.list;
            return newObj2;
        case 'COLLECT':
            let newObj3 = Object.assign({},state);
            newObj3.list = action.list;
            return newObj3;
        default:
            return state;
    }
    return state;
}

const reducers = combineReducers({
    reducernews,
    reducerpicnews,
    reducercollect,
    reducercolumn,
    reducerarticle,
});

export {reducers};