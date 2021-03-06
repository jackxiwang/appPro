import React, { Component } from 'react'
import './shopEdit.css'
import store from '../../../../assets/img/store.png'
import edit from '../../../../assets/img/editor_nor.png'
import {reqDel} from '../../../../utils/request'
export default class shopEdit extends Component {
    constructor(){
        super()
    }
    changeNum(){

    }
    delGoods(id){
        let {listUpdate,allCheck} = this.props
        reqDel({id}).then(res=>{
            listUpdate(true)
        })
        allCheck()
    }
    render() {
        const { carlist } = this.props
        return (
            <div className="shop shopedit">
                {carlist!==null?carlist.map(item => {
                    return (
                        <div className="shop-list" key={item.id}>
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
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="desc-right">
                                            <p>{item.goodsname}</p>
                                            <div className="car-add">
                                                <button>—</button>
                                                <input type="text" value={item.num} onChange={()=>this.changeNum()} />
                                                <button>+</button>
                                            </div>
                                            <p>
                                                总价：<span>{item.num*item.price} </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="total-p">
                                        &yen;<span>123.00</span>
                                    </div>
                                    <div className="del" onClick={()=>this.delGoods(item.id)}>
                                        删除
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                }):null}

            </div>
        )
    }
}
