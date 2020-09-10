import React, { Component } from 'react'
import Head from '../../components/head/Head'
import './detail.css'
import '../../components/head/Head'
import DetailCar from './components/detailCar'
import Decon from './components/Decon'
import { reqGoodsDetail } from '../../utils/request'
export default class detail extends Component {
    constructor() {
        super()
        this.state = {
            decon: {},
            isShow:false
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        reqGoodsDetail({ id }).then(res => {
            console.log(res.data.list[0]);
            this.state.decon = res.data.list[0]
            this.setState({
                ...this.state
            })
        })
    }
    show(){
        this.state.isShow = true;
        this.setState({
            ...this.state
        })
    }
    hide(){
        this.state.isShow=false
        this.setState({
            ...this.state
        })
    }
    render() {
        let { decon,isShow } = this.state
        if (this.refs.des && decon.description) {
            this.refs.des.innerHTML = decon.description
        }
        return (
            <div className="detail">

                <Head title="商品详情" go></Head>
                {decon ? <Decon decon={decon}></Decon> : null}
                {/* <div className="de-con">
                    <div className="con-img">
                        <img src="" alt=""/>
                    </div>
                    <div className="con-desc">
                        <div className="desc-top">
                            <p>美白祛斑霜</p>
                            <div className="desc-cart">
                                <img src={cart} alt=""/>
                                <span>收藏</span>
                            </div>
                        </div>
                        <div className="desc-middle">
                            <p> &yen;<span>78.00</span></p>
                            <span>热卖</span>
                            <span>新品</span>
                        </div>
                        <div className="desc-bottom">
                            <p>&yen;<span>149.00</span></p>
                        </div>
                    </div>
                    <div className="line">

                    </div>
                </div> */}
                <div className="detail-con" ref='des'>

                </div>
                <div className="de-foot">
                    <div className="foot-sub" onClick={()=>this.show()}>加入购物车</div>
                </div>
               {isShow?<DetailCar decon={decon} hide={()=>this.hide()}></DetailCar>:null}
            </div>
        )
    }
}
