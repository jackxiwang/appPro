import React, { Component } from 'react'
import './shopEdit.css'
import store from '../../../../assets/img/store.png'
import edit from '../../../../assets/img/editor_nor.png'
export default class shopEdit extends Component {
    render() {
        return (
            <div className="shop">
                <div className="shop-list">
                    <div className="shop-address">
                        <img src={store} alt="" />
                        <p>杭州保税区仓</p>
                    </div>
                    <div className="car-content">
                        <div className="car-translate">
                            <div className="check">
                                <input type="text" />
                                <span></span>
                            </div>

                            <div className="desc">
                                <div className="shop-img">
                                    <img src="" alt="" />
                                </div>
                                <div className="desc-right">
                                    <p>欧莱雅面霜</p>
                                    <div className="car-add">
                                        <button>—</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                    <p>
                                        总价：<span>123.00</span>
                                    </p>
                                </div>
                            </div>
                            <div className="total-p">
                                &yen;<span>123.00</span>
                            </div>
                            <div className="del">
                                删除
                            </div>
                        </div>

                    </div>
                </div>

                {/* <div className="bottom-on">
                    <div className="check-bot">
                        <div>
                            <input type="text" />
                            <span></span>
                        </div>
                        <p>全选</p>
                    </div>
                    <div className="redit-bot">
                        <img src={edit} alt=""/>
                        <p>编辑</p>
                    </div>
                    
                    <div className="adver-item">
                        <p>
                            总计：
                        <span>163.00</span>
                        </p>
                        <p>
                            不含运费
                        </p>
                    </div>
                    <div className="jiesuan">
                        去结算
                </div>
                </div> */}
            </div>
        )
    }
}
