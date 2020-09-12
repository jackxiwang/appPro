import React, { Component } from 'react'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import './home.css'
import asyncComponent from '../../utils/asyncComponent'
import indexH from '../../assets/img/tab_home_hig.png'
import indexN from '../../assets/img/tab_home_nor.png'
import meN from '../../assets/img/tab_me_nor.png'
import meH from '../../assets/img/tab_me_hig.png'
import menuN from '../../assets/img/tab_menu_nor.png'
import menuH from '../../assets/img/tab_menu_hig.png'
import shopN from '../../assets/img/tab_shopping_nor.png'
import shopH from '../../assets/img/tab_shopping_hig.png'
import MyRoute from '../MyRoute/MyRoute'
const Index = asyncComponent(()=>import('../index/index'))
const Calssify = asyncComponent(()=>import('../classify/classify'))
const ShopCar = asyncComponent(()=>import('../shopCar/shopCar'))
const Mine = asyncComponent(()=>import('../mine/mine'))
export default class home extends Component {
    constructor() {
        super()
        this.state = {
            navDate: [
                {
                    path: '/home/index',
                    name: '首页',
                    select: indexH,
                    noSelect: indexN
                },
                {
                    path: '/home/classify',
                    name: '分类',
                    select: menuH,
                    noSelect: menuN
                },
                {
                    path: '/home/shop',
                    name: '购物车',
                    select: shopH,
                    noSelect: shopN
                },
                {
                    path: '/home/mine',
                    name: '我的',
                    select: meH,
                    noSelect: meN
                }

            ]
        }
    }

    render() {
        console.log();
        let { navDate } = this.state
        return (
            <div className="home">
                <Switch>
                    <MyRoute path="/home/index" component={Index}></MyRoute>
                    <MyRoute path="/home/classify" component={Calssify}></MyRoute>
                    <MyRoute path="/home/shop" component={ShopCar}></MyRoute>
                    <MyRoute path="/home/mine" component={Mine}></MyRoute>
                    <Redirect to="/home/index"></Redirect>
                </Switch>
                {/* <div className="h-head">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="寻找商品"/>
                    </div>
                </div>
                <div className="banner"></div>
                <div className="seckill">
                    <div>
                        <img src={seckill} alt=""/>
                        <a href="#">限时抢购</a>
                    </div>
                    <div>
                        <img src={seckill} alt=""/>
                        <a href="#">积分商城</a>
                    </div>
                    <div>
                        <img src={seckill} alt=""/>
                        <a href="#">联系我们</a>
                    </div>
                    <div>
                        <img src={seckill} alt=""/>
                        <a href="#">商品分类</a>
                    </div>
                </div>
                <ul className="list"> */}
                {/* <li>
                        <div className="li-img">
                        <img src={seckill} alt=""/>
                        </div>
                        
                        <div className="li-desc">
                            <p>菲斯顿山地自行车</p>
                            <p>&yen; <span>499</span></p>
                            <div className="li-btn">
                                <button>立即抢购</button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="li-img">
                        <img src={seckill} alt=""/>
                        </div>
                        
                        <div className="li-desc">
                            <p>菲斯顿山地自行车</p>
                            <p>&yen; <span>499</span></p>
                            <div className="li-btn">
                                <button>立即抢购</button>
                            </div>
                        </div>
                    </li>
                
                
                </ul> */}

                <div className="h-foot">
                    {navDate.map(item => {
                        return (
                            <NavLink to={item.path} key={item.name}>
                                    <img src={this.props.location.pathname === item.path?item.select:item.noSelect} alt="" />
                                    <span>{item.name} </span>
                            </NavLink>
                        )
                    })}
                   
                </div>


            </div >
        )
    }
}
