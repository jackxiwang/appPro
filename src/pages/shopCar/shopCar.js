import React, { Component } from 'react'
import './shopCar.css'
import CarList from './components/CarList/CarList'
import Edit from './components/Edit/shopEdit'
import Head from '../../components/head/Head'
import edit from '../../assets/img/editor_nor.png'
import { reqCarList } from '../../utils/request'
export default class shopCar extends Component {
    constructor() {
        super()
        this.state = {
            carlist: [],
            sum:0
        }
    }
    componentDidMount() {
        // let uid = localStorage.getItem('uid')
        // reqCarList({uid}).then(res=>{
        //     this.state.carlist = res.data.list
        //     this.setState({
        //         ...this.state
        //     })
        // })
        this.listUpdate()
    }
    listUpdate() {
        let uid = localStorage.getItem('uid')
        reqCarList({ uid }).then(res => {
            this.state.carlist = res.data.list
            this.state.carlist.checked = false
            this.setState({
                ...this.state
            })
        })
    }
    toggle(index) {
        let { carlist } = this.state
        carlist[index].checked = !carlist[index].checked
        this.setState({
            ...carlist
        })
    }
    render() {
        const { carlist } = this.state
        return (
            <div className="shop">
                <Head title="购物车" go></Head>
                {/* <div className="header">
                    购物车
                </div> */}
                {carlist.length > 0 ? <CarList carlist={carlist} toggle={(index) => this.toggle(index)} listUpdate={() => this.listUpdate()}></CarList> : null}
                {/* <Edit></Edit> */}
                <div className="bottom-on">
                    <div className="check-bot">
                        <div>
                            <input type="text" />
                            <span></span>
                        </div>
                        <p>全选</p>
                    </div>
                    <div className="redit-bot">
                        <img src={edit} alt="" />
                        <p>编辑</p>
                    </div>

                    <div className="adver-item">
                        <p>
                            总计：
                            <span>{sum}</span>
                        </p>
                        <p>
                            不含运费
                        </p>
                    </div>
                    <div className="jiesuan">
                        去结算
                </div>
                </div>
            </div>
        )
    }
}
