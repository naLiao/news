import {combineReducers} from 'redux';

//1.新闻管理
const reducernews = (state=[],action)=>{
    switch(action.type){
        //初始化获取数据
        case 'GET_DATA':
            let newArr = state.slice();
            newArr = action.res;
            return newArr;
        default:
            return state;
    }
    return state;
}

//2.栏目数据
const reducercolumn = (state=[],action)=>{
    switch(action.type){
        case 'GET_COLUMN':
            let newArr = state.slice();
            newArr = action.res;
            // console.log(action.res);
            return newArr;
        default:
            return state;
    }
    return state;
}

const reducers = combineReducers({
    reducernews,
    reducercolumn
});

export {reducers};