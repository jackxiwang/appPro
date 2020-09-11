import React, { Component } from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import {reqLogin} from '../../utils/request'
export default class login extends Component {
    constructor(){
        super()
        this.state = {
            user:{
                phone:'',
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
    subLogin(){
        const {user} = this.state
        reqLogin(user).then(res=>{
            if(res.data.code == '200') {
                localStorage.setItem('uid',res.data.list.uid)
                localStorage.setItem('name',res.data.list.nickname)
                localStorage.setItem('isLogin',1);
                this.props.history.push('/home')
            }else {
                alert('账号或密码错误')
            }
        })
    }
    render() {
        return (
            <div className="login">
                <div className="header">
                    <a href="#">登录</a>
                    <Link to="/redit" className="regit">注册</Link>
                </div>
                <div className="content">
                    <div className="name">
                        <label htmlFor="name" >账号</label>
                        <input type="text" id="name" onChange={(e)=>this.changeUser(e,'phone')}/>
                    </div>
                    <div className="pass">
                        <label htmlFor="pass" >密码</label>
                        <input type="text" id="pass" onChange={(e)=>this.changeUser(e,'password')}/>
                    </div>
                    <div className="remmber">
                        <a href="#">忘记密码</a>
                    </div>
                    <div className="login-btn">
                        <button onClick={()=>this.subLogin()}>登录</button>
                    </div>
                    
                </div>

            </div>
        )
    }
}
