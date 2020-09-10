import React, { Component } from 'react'
import './detailCar.css'
import { reqAddCar } from '../../../utils/request'
export default class detailCar extends Component {
    constructor(props){
        super(props)
        this.state = {
            info:this.props.decon,
            hide:this.props.hide,
            n:0
        }

    }
    inHide(e){
        const {hide} = this.state
        if( e.target.className==='detail-mark'){
            console.log(this.state.hide);
            hide()
        }
    }
    addCar(info){
        const {hide} = this.state
        let data ={};
        data.uid = localStorage.getItem('uid');
        data.num = 1;
        data.goodsid = info.id
        reqAddCar(data).then(res=>{
            hide()
        })
    }
    changeN(i){
        this.state.n = i;
        this.setState({
            ...this.state
        })
    }
    render() {
        let {info,n}= this.state
        return (
            <div className="detail-mark" onClick={(e)=>this.inHide(e)}>
                {info?(<div className="detail-car" >
                    <div className="detail-title">
                        <div className="title-img">
                            <img src={info.img} alt="" />
                        </div>
                        <p>{info.goodsname}</p>
                    </div>
                    <div className="de-round">
                        <p>{info.specsname}</p>
                        <ul className="round-list">
                            {JSON.parse(info.specsattr).map((item,index)=>{
                                return <li onClick={()=>this.changeN(index)} className={index===n?'round-active':''} key={index}>{item}</li>
                            })}
                            {/* <li className="round-active">15L</li>
                            <li>30L</li>
                            <li>45L</li> */}
                        </ul>
                    </div>
                    <div className="de-sub"> 
                        <button onClick={()=>this.addCar(info)}>加入购物车</button>
                    </div>
                        
                </div>):null}

            </div>
        )
    }
}
