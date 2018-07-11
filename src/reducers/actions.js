// import thunkMiddleware from 'redux-thunk';

//新闻管理-获取数据-操作发起
export function getNewsData(num){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/news/getlist?page=${num}`)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getData(res));
            // console.log(res);
        })
    }
}
function getData(res){
    return {
        type:'GET_DATA',
        res
    }
}

//新闻管理-获取栏目已发布稿件数据-操作发起
export function getColNewsData(num,column){
    console.log(num,column);
    
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/colnews/getlist?page=${num}&column=${column}`)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getColNewsDataSuc(res));
            console.log(res);
        })
    }
}
function getColNewsDataSuc(res){
    return {
        type:'GET_COL_NEWS_DATA',
        res
    }
}

//新闻管理-根据ID找到新闻数据
export function getNewsById(id){
    console.log(id);
    
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/getNewsById?id=${id}`)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getNewsByIdSuccess(res));
            console.log(res);
        })
    }
}
function getNewsByIdSuccess(res){
    return {
        type:'GET_NEWS_BY_ID',
        res
    }
}

//新闻管理-增加阅读数量
export function readNumPlus(id){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/readNumPlus?id=${id}`)
        .then(e=>e.json())
        .then(res=>{
            // dispatch(getNewsByIdSuccess(res));
            // console.log(res);
        })
    }
}

//栏目管理-获取数据-操作发起
export function getColumnData(num){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/column/getcol?page=`+num)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getColumnSuccess(res));
            // console.log(res);
        })
    }
}
function getColumnSuccess(res){
    return {
        type:'GET_COLUMN',
        res
    }
}

//栏目管理-获取页码
export function getColCount(searchName){
    return (dispatch)=>{
        fetch('http://127.0.0.1:88/api/column/getcolcount?column='+searchName)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getcoltotal(res.total));
            // console.log(res.total);
        })
    }
}
function getcoltotal(total){
    return {
        type:'GET_COL_TOTAL',
        total
    }
}