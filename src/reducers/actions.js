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

//文章页-根据ID找到新闻数据
export function getNewsById(id){
    // console.log(id);
    
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/getNewsById?id=${id}`)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getNewsByIdSuccess(res));
            // console.log(res);
        })
    }
}
function getNewsByIdSuccess(res){
    return {
        type:'GET_NEWS_BY_ID',
        res
    }
}

//文章页-点击取消收藏
export function discollect(name,id){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/user/discollect?name=${name}&id=${id}`)
        .then(e=>e.json())
        .then(data => {
            console.log(data);
            discollectSuccess(data.list);
        }) 
    }
}
function discollectSuccess(res){
    return {
        type:'DIS_COLLECT',
        res
    }
}

//文章页-点击收藏
export function collect(name,id){
    return (dispatch)=>{
        fetch(`http://127.0.0.1:88/api/user/collect?name=${name}&id=${id}`)
        .then(e=>e.json())
        .then(data => {
            console.log(data);
            collectSuccess(data.list);
        }) 
    }
}
function collectSuccess(res){
    return {
        type:'COLLECT',
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

//个人中心-获取收藏列表
export function getCollectData(name){
    return (dispatch)=>{
        fetch('http://127.0.0.1:88/api/user/getcollect?name=' +name)
            .then(e=>e.json())
            .then(res=>{
                // console.log(res);
                dispatch(getCollectDataSucc(res));
            })
    }
}
function getCollectDataSucc(res){
    return {
        type:'GET_COLLECT_DATA',
        list:res.list,
        news:res.news
    }
}