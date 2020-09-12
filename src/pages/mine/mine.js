import React, { Component } from 'react'
import './mine.css'
import set from '../../assets/img/icon_evaluate.png'
import person from '../../assets/img/1.jpg'
import keep from '../../assets/img/keep.png'
import refound from '../../assets/img/icon_refund.png'
export default class mine extends Component {
    
    render() {
        const name = JSON.parse(localStorage.getItem('user')).nickname
        return (
            <div className="mine">
                <div className="mine-head">
                    <div className="head-top">
                        <div >
                            <img src={set} alt="" />
                        </div>
                        <div>
                            个人中心
                          </div>
                        <div>
                            <img src={set} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="head-per">
                            <img src={person} alt="" />

                        </div>

                    </div>
                </div>

                <div className="people-name">
                    <p >{name}</p>
                    <div className="per-icon">
                        <img src={keep} alt="" />
                        <div>我的收藏 (<span>5</span>)</div>
                    </div>
                </div>
                <div className="my-order">
                    <div className="order-tab">
                        <div className="tab-active">我的订单</div>
                        <div>查看订单</div>
                    </div>
                    <ul className="order-list">
                        <li>
                            <img src={refound} alt=""/>
                            <p>代发货</p>
                            <span className="num"></span>
                        </li>
                        <li>
                            <img src={refound} alt=""/>
                            <p>代发货</p>
                        </li>
                        <li>
                            <img src={refound} alt=""/>
                            <p>代发货</p>
                        </li>
                        <li>
                            <img src={refound} alt=""/>
                            <p>代发货</p>
                        </li>
                       
                    </ul>
                    <div className="address">
                        <p>收货地址管理</p>
                    </div>
                </div>
            </div>
        )
    }
}
