import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import querystring from 'querystring'
import './goods.css'
import Head from '../../components/head/Head'
import { reqGoods } from '../../utils/request'
export default class goods extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            title: ''
        }
    }
    componentDidMount() {
        let data = querystring.parse(this.props.location.search.slice(1))
        let fid = data.id
        reqGoods({ fid }).then(res => {
            this.setState({
                list: res.data.list,
                title: data.title
            })
        })
    }
    render() {
        const { list, title } = this.state
        return (
            <div className="goods">
                <Head title={title} go></Head>
                <ul className="goods-list">
                    {list&&list.length > 0 ?
                        list.map(item => {
                            return (
                                
                                    <li key={item.id}>
                                        <Link to={"/detail/"+item.id}>
                                        <div className="list-img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="list-con">
                                            <p className="list-title">
                                                {item.goodsname}
                                            </p>
                                            <p className="list-price">&yen;<span>{item.price}</span></p>
                                            <div className="list-btn">
                                                立即抢购
                                            </div>
                                        </div>
                                        </Link>
                                    </li>
                                )
                        }) : null
                    }
                    {/* <li>
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
                    </li> */}
                </ul>
            </div>
        )
    }
}
