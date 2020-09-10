import React, { Component } from 'react'
import './goods.css'
export default class goods extends Component {
    render() {
        return (
            <div className="goods">
                <div className="header">
                    <a href="#" className="goods-name">电视</a>
                    <a href="#" className="return">返回</a>
                </div>
                <ul className="goods-list">
                    <li>
                        <div className="list-img">
                            <img src="" alt=""/>
                        </div>
                        <div className="list-con">
                            <p className="list-title">
                                超清4k电视
                            </p>
                            <p className="list-price">&yen;<span>1999.00</span></p>
                            <div className="list-btn">
                                立即抢购
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
