import React, { Component } from 'react'
import List from './component/List/List'
import './index.css'
import logo from '../../assets/img/img/home/logo.jpg'
import seckill from '../../assets/img/img/home/1.jpg'
import Banner from './component/Banner/Banner'
import { reqGoodsList,reqBanner } from '../../utils/request'
//注视验证
export default class index extends Component {
    constructor(){
        super()
        this.state={
            goodsList:[],
            banner:[]
        }
    }
    componentDidMount(){
        reqGoodsList().then(res=>{
            this.setState({
                ...this.state,
                goodsList:res.data.list[0].content
            })
        })
        reqBanner().then(res=>{
            this.setState({
                ...this.state,
                banner:res.data.list
            })
        })
    }
    render() {
        const {goodsList,banner} = this.state
        return (
            <div className="index">
                 <div className="h-head">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="寻找商品"/>
                    </div>
                </div>
               {banner.length>0?<Banner banner={banner}></Banner>:null}
                {/* <div className="banner"></div> */}
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
                        <a href="#">世界互联</a>
                    </div>
                    <div>
                        <img src={seckill} alt=""/>
                        <a href="#">商品分类</a>
                    </div>
                </div>
                <List goodsList={goodsList}></List>
                
                
                {/* <ul className="list">
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
            </div>
        )
    }
}
