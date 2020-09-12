import React, { Component } from 'react'
import './detailCar.css'
import { Toast, Button } from 'antd-mobile';
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
            hide()
        }
    }
    addCar(info){
        const {hide} = this.state
        let data ={};
        data.uid = JSON.parse(localStorage.getItem('user')).uid;
        data.num = 1;
        data.goodsid = info.id
        reqAddCar(data).then(res=>{
            if(res.data.code==200){
                hide()
                Toast.info('添加成功', 1);
            }else{
                Toast.info('添加失败', 1);
            }
            
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
                            
                        </ul>
                    </div>
                    <div className="de-sub"> 
                        <Button type="primary" onClick={()=>this.addCar(info)}>加入购物车</Button>
                    </div>
                        
                </div>):null}

            </div>
        )
    }
}
