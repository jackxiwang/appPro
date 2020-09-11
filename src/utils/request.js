import axios from 'axios'
import qs from 'qs'

axios.interceptors.response.use(res=>{
    console.log('============='+res.config.url+'===========');
    console.log(res);
    return res
})
// 注册
export const reqRedit = (params)=>{
    return axios ({
        url:'/api/register',
        method:'post',
        data:qs.stringify(params)
    })


}

// 登录
export const reqLogin = (params)=>{
    return axios({
        url:'/api/login',
        method:'post',
        data:qs.stringify(params)
    })
}

// 首页分类信息
export const reqClasiify = (params) =>{
    return axios({
        url:'/api/getcate',
        method:'get'
    })
}
// 首页轮播图
export const reqBanner = () =>{
    return axios({
        url:'/api/getbanner',
        method:'get'
    })
}
// 首页商品
export const reqGoodsList = () =>{
    return axios({
        url:'/api/getindexgoods',
        method:'get'
    })
}
// 商品详情
export const reqGoodsDetail = (params) =>{
    return axios({
        url:'/api/getgoodsinfo',
        method:'get',
        params
    })
}
// 购物车添加
export const reqAddCar = (parmas)=>{
    return axios({
        url:'/api/cartadd',
        method:'post',
        data:qs.stringify(parmas)
    })
}
// 分类树形结构数据
// /api/getcatetree
export const reqCatetree = () =>{
    return axios({
        url:'/api/getcatetree',
        method:'get'
    })
}
// 购物车列表
export const reqCarList = (params)=>{
    return axios({
        url:'/api/cartlist',
        method:'get',
        params
    })
}
// 购物车修改
export const reqCaredit = (params)=>{
    return axios ({
        url:'/api/cartedit',
        method:'post',
        data:qs.stringify(params)
    })
}
// 购物车删除
export const reqDel =(params)=>{
    return axios ({
        url:'/api/cartdelete',
        method:'post',
        data:qs.stringify(params)
    })
}
// 分类商品
export const reqGoods = (parmas)=>{
    return axios ({
        url:'/api/getgoods',
        method:'get',
        parmas
    })
}