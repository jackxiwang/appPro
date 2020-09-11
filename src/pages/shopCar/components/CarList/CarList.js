import React, { Component } from 'react'
import {reqCaredit,reqCarList} from '../../../../utils/request'
import store from '../../../../assets/img/store.png'
import radioN from '../../../../assets/img/radio_nor.png'
import radioH from '../../../../assets/img/radio_hig.png'
export default class CarList extends Component {
    constructor() {
        super()
        this.state={
            carlist:[]
        }
    }
    componentDidMount(){
        this.setState({
            carlist:this.props
        })
    }
    changeNum(){

    }
    add(id,add){
        const {listUpdate} = this.props
        reqCaredit({id,type:2}).then(res=>{})
        listUpdate(add)
    }
    sub(id,num){
        const {listUpdate} = this.props
        num<=0||reqCaredit({id,type:1}).then()
        listUpdate()
    }
    toggle(index){
        let {toggle} = this.props
        toggle(index)
    }
    render() {
        const { carlist=[] } = this.props
        return (
            <div>
                {carlist.map((item,index) => {
                    return (<div className="shop-list" key={item.id}>
                        <div className="shop-address">
                            <img src={store} alt="" />
                            <p>杭州保税区仓</p>
                        </div>
                        <div className="car-content">
                            <div className="car-translate">
                                <div className="check">
                                    <span onClick={()=>this.toggle(index)}>
                                       {item.checked?<img src={radioH} alt=""/>:<img src={radioN} alt="" /> }
                                    </span>
                                </div>

                                <div className="desc">
                                    <div className="shop-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="desc-right">
                                        <p>{item.goodsname}</p>
                                        <div className="car-add">
                                            <button onClick={()=>this.sub(item.id,item.num)}>—</button>
                                            <input type="text" value={item.num} onChange={()=>this.changeNum()}/>
                                            <button onClick={()=>this.add(item.id,1)}>+</button>
                                        </div>
                                        <p>
                                            总价：<span>{item.num*item.price}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="total-p">
                                    &yen;<span>{item.price}</span>
                                </div>
                            </div>

                        </div>
                    </div>)
                })}
            </div>
        )
    }
}
