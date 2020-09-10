import React, { Component } from 'react'
import './head.css'
import { withRouter } from 'react-router-dom'
class Head extends Component {
    goBack(){
        this.props.history.goBack()
    }
    render() {
        const {title,go} = this.props
        return (
            <div>
                <div className="head">
                    <p className="head-title">{title}</p>
                   { go?<p className="return" onClick={()=>this.goBack()}>返回</p>:null}
                </div>
            </div>
        )
    }
}
export default withRouter(Head)
