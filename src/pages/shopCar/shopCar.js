import React, { Component } from 'react'
import './shopCar.css'
import CarList from './components/CarList/CarList'
import Edit from './components/Edit/shopEdit'
import Head from '../../components/head/Head'
import editN from '../../assets/img/editor_nor.png'
import editH from '../../assets/img/editor_hig.png'
import radioN from '../../assets/img/radio_nor.png'
import radioH from '../../assets/img/radio_hig.png'
import { reqCarList } from '../../utils/request'
export default class shopCar extends Component {
    constructor() {
        super()
        this.state = {
            carlist: [],
            isEdit: false,
            allCheck: false
        }
    }
    componentDidMount() {
        this.listUpdate()
    }
    // 购物车列表刷新
    listUpdate(isDel) {
        let uid = JSON.parse(localStorage.getItem('user')).uid
        let checkedArr=isDel?[]:this.state.carlist.map(item=>item.checked)
        console.log(checkedArr);
        reqCarList({ uid }).then(res => {
            var carlist = res.data.list
            
            carlist.forEach((item,index)=>{
                item.checked=checkedArr[index]
            })
            this.setState({
                carlist
            })
        })
    }
    // 选中切换
    toggle(index) {
        let { carlist, allCheck } = this.state
        carlist[index].checked = !carlist[index].checked
        carlist.every(item => { return item.checked }) ? allCheck = true : allCheck = false
        this.setState({
            ...this.state,
            allCheck
        })
    }
    // 编辑切换组件
    changeIsEdit() {
        this.state.isEdit = !this.state.isEdit;
        this.setState({
            ...this.state
        })
    }
    // 全选按钮实现
    allCheck() {
        this.state.carlist.forEach(item => { item.checked = !this.state.allCheck })
        this.state.allCheck = !this.state.allCheck
        this.setState({
            ...this.state
        })
    }
    render() {
        let { carlist, isEdit, allCheck } = this.state
        let sum = 0
        carlist === null || carlist.forEach(item => {
            if (item.checked) {
                sum += item.num * item.price
            }
        })
        return (
            <div className="shop">
                <Head title="购物车"></Head>
                {carlist !== null && carlist.length > 0 && !isEdit ? <CarList carlist={carlist} toggle={(index) => this.toggle(index)} listUpdate={() => this.listUpdate()}></CarList> : <Edit carlist={carlist} listUpdate={(e) => this.listUpdate(e)}></Edit>}
                <div className="bottom-on">
                    <div className="check-bot" onClick={() => this.allCheck()}>
                        <div>
                            <span className="allCheck">
                                {allCheck ? <img src={radioH} alt="" /> : <img src={radioN} alt="" />}
                            </span>
                        </div>
                        <p>全选</p>
                    </div>
                    <div className="redit-bot" onClick={() => this.changeIsEdit()}>
                        {isEdit ? <img src={editH} alt="" /> : <img src={editN} alt="" />}
                        <p >编辑</p>
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
