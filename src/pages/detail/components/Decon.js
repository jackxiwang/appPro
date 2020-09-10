import React from 'react'
import cart from '../../../assets/img/img/cart_on.png'
export default function Decon(props) {
    const {decon} = props
    const url = 'http:localhost:3000'
    return (
        <div className="de-con">
            <div className="con-img">
                <img src={decon.img} alt="" />
            </div>
            <div className="con-desc">
                <div className="desc-top">
                    <p>{decon.goodsname}</p>
                    <div className="desc-cart">
                        <img src={cart} alt="" />
                        <span>收藏</span>
                    </div>
                </div>
                <div className="desc-middle">
                    <p> &yen;<span>{decon.price}</span></p>
                    {decon.ishot===1?<span>热卖</span>:null}
                    {decon.isnew===1?<span>新品</span>:null}
                </div>
                <div className="desc-bottom">
                    <p>&yen;<span>{decon.market_price}</span></p>
                </div>
            </div>
            <div className="line">

            </div>
        </div>
    )
}
