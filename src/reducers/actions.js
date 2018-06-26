import thunkMiddleware from 'redux-thunk';

//获取数据函数
let getData = async (url) => {
    let data = await fetch('http://localhost:88/api/news/'+url);
    return await data.json();
}

// export function init(){
//     return(dispatch,getState){
//         getData('getlist?page=1')
//         .then(res=>{
//             console.log('====================================')
//             console.log(res);
//             console.log('====================================')
//         })
//     }
// }