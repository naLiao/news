import {combineReducers} from 'redux';

//这里放所有的数据
//主页栏目数据
let navArr = [
    {name:'头条',path:'/index/headline'},
    {name:'时事',path:'/index/current'},
    {name:'财经',path:'/index/finance'},
    {name:'生活',path:'/index/life'}];
const reducernav = (state = navArr, action) => {
    switch (action.type) {
        case 'ACTION_TYPE':
            return 
        default:
            return state
    }
}

//头条栏目新闻数据
let headlineArr = [
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'头条',
        top:true,
        picSrc:"../img/index/picnews.jpg",
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'头条',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'头条',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'《侏罗纪世界2》：人类是否有能力收拾自己制造出来的烂摊子',
        column:'头条',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    }
];
const reducerheadline = (state = headlineArr, action) => {
    switch (action.type) {
        case 'ADD':
            return state;
        default:
            return state;
    }
}

//时事栏目新闻数据
let currentArr = [
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'时事',
        top:true,
        picSrc:"../img/index/picnews.jpg",
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'时事',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'时事',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'《侏罗纪世界2》：人类是否有能力收拾自己制造出来的烂摊子',
        column:'时事',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    }
];
const reducercurrent = (state = currentArr, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

//财经栏目新闻数据
let financeArr = [
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'财经',
        top:true,
        picSrc:"../img/index/picnews.jpg",
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'财经',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'财经',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'《侏罗纪世界2》：人类是否有能力收拾自己制造出来的烂摊子',
        column:'财经',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    }
];
const reducerfinance = (state = financeArr, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

//生活栏目新闻数据
let lifeArr = [
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:true,
        picSrc:"../img/index/picnews.jpg",
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'《侏罗纪世界2》：人类是否有能力收拾自己制造出来的烂摊子',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    }
];
const reducerlife = (state = lifeArr, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

//我的页面数据
let mineData = {
    avatar:'/img/avatar.jpg',
    bookmark:[{
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:true,
        picSrc:"../img/index/picnews.jpg",
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },{
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    }],
    bookMarkNum:209,
    follow:24,
    history:990,
    comment:[{
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:true,
        picSrc:"../img/index/picnews.jpg",
        read:0,
        share:0,
        comment:0
    },
    {
        title:'省级税务机构主官亮相：14省份税务局长由原地税局局长担任',
        column:'生活',
        top:false,
        picSrc:'../img/pic1.jpg',
        read:0,
        share:0,
        comment:0
    }]
}
const reducermine = (state = mineData, action) => {
    switch (action.type) {
        case '':
            return 
        default:
            return state
    }
}

const reducers = combineReducers({
    reducernav,
    reducerheadline,
    reducercurrent,
    reducerfinance,
    reducerlife,
    reducermine
});

export {reducers};