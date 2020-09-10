import React, { Component } from 'react'
import Head from '../../components/head/Head'
import './classify.css'
import { reqCatetree } from '../../utils/request'
import ClassCon from './components/ClassCon/ClassCon'
// import index from '../../assets/img/img/home.png'
export default class classify extends Component {
    constructor(){
        super()
        this.state = {
            catetree:[]
        }
    }
    componentDidMount(){
        reqCatetree().then(res=>{
            this.state.catetree = res.data.list
            this.setState({
                ...this.state
            })
        })
    }
    render() {
        const {catetree} = this.state
        return (
            
            <div className="wrap">
                {/* <!-- header区域 --> */}
                <Head title="分类"></Head>
               {catetree.length>0? <ClassCon catetree={catetree}></ClassCon>:null}
             
               
                {/* <div className="content">
                    <ul className="list-nav">
                        <li className="nav-active">施华蔻</li>
                        <li>沙宣</li>
                        <li>欧莱雅</li>
                        <li>潘婷</li>
                        <li>资生堂</li>
                    </ul>
                    <div className="list-shop">
                        <div className="product-list">
                            <div className="product-content">
                                <img src="" alt="" />
                                <p>护亮泽洗发水</p>
                            </div>
                            <div className="product-content">
                                <img src="" alt="" />
                                <p>护亮泽洗发水</p>
                            </div>

                        </div>

                    </div>
                </div> */}

            {/* <div className="h-foot">
                    <div>
                        <img src={index} alt=""/>
                        <span>首页</span>
                    </div>
                    <div>
                        <img src={index} alt=""/>
                        <span>分类</span>
                    </div>
                    <div>
                        <img src={index} alt=""/>
                        <span>购物车</span>
                    </div>
                    <div>
                        <img src={index} alt=""/>
                        <span>我的</span>
                    </div>
                </div> */}
            </div>

        )
    }
}
