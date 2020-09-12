import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import './redit.css'
import Head from '../../components/head/Head'
import {reqRedit} from '../../utils/request'
export default class redit extends Component {
    constructor(){
        super()
        this.state = {
            user:{
                phone:'',
                nickname:'',
                password:''
            }
        }
    }
    changeUser(e,key){
        this.setState({
           user:{
            ...this.state.user,
            [key]:e.target.value
           }
        })
    }
    redit(){
        reqRedit(this.state.user).then(res=>{
            if(res.data.code==200){
                Toast.info('注册成功', 1);
               this.props.history.push('/login') 
            }else{
                Toast.info('注册失败', 1);
            }
            
        })
    }
    render() {
        return (
            <div className="redit">
                {/* <div className="header">
                    <a href="#" className="re-login">注册</a>
                    <a href="#" className="return">返回</a>
                </div> */}
                <Head title="注册" go></Head>
                <div className="content">
                    <div className="name">
                        <label htmlFor="name" >账号:</label>
                        <input type="text" id="name" onChange={(e)=>this.changeUser(e,'phone')}/>
                    </div>
                    <div className="pass">
                        <label htmlFor="pass">昵称:</label>
                        <input type="text" id="pass"  onChange={(e)=>this.changeUser(e,'nickname')}/>
                    </div>
                    <div className="confirm">
                    <label htmlFor="confirm" >密码:</label>
                        <input type="text" id="confirm" onChange={(e)=>this.changeUser(e,'password')}/>
                    </div>
                    <div className="redit-btn">
                        <button onClick={()=>this.redit()}>注册</button>
                    </div>
                </div>
            </div>
        )
    }
}
