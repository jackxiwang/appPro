import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {reqGoodsDetail} from '../../../../utils/request'
class List extends Component {
    constructor() {
        super()
        this.state = {
            goods: [],
            url: 'http://localhost:3000'
        }
    }
    componentDidMount() {
        this.setState({
            ...this.state,
            goods:this.props.goodsList
        })
    }
    detail(id){
        reqGoodsDetail({id}).then(res=>{
           this.props.history.push('/detail/'+id)
        })
    }
    render() {
        let {goods,url} = this.state
        return (
            <div>
                <ul className="list">
                    {
                        this.props.goodsList.map((item, index) => {
                            return (
                                <li key={item.id} onClick={() => this.detail(item.id)}>
                                    <div className="li-img">
                                        <img src={url + item.img} alt="" />
                                    </div>

                                    <div className="li-desc">
                                        <p>{item.goodsname}</p>
                                        <p>&yen; <span>{item.price}</span></p>
                                        <div className="li-btn">
                                            <button >立即抢购</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default withRouter(List)