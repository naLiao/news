// import thunkMiddleware from 'redux-thunk';

//新闻管理-获取数据-操作发起
export function getNewsData(column,num){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/news/getlist?column=${column}&page=${num}`)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getData(res));
            console.log(res);
        })
    }
}
function getData(res){
    return {
        type:'GET_DATA',
        res
    }
}

//栏目管理-获取数据-操作发起
export function getColumnData(num){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/column/getcol?page=`+num)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getColumnSuccess(res));
            console.log(res);
        })
    }
}
function getColumnSuccess(res){
    return {
        type:'GET_COLUMN',
        res
    }
}