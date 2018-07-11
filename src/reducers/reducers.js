import {combineReducers} from 'redux';

//1.新闻管理
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

//一条文章数据
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

//2.栏目数据
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

const reducers = combineReducers({
    reducernews,
    reducercolumn,
    reducerarticle
});

export {reducers};