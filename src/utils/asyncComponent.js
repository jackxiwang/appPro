import React,{Component} from 'react'

function asyncComponent(fn) {
    class Compone extends Component {
        constructor(){
            super()
            this.state ={
                Com:null
            }
        }
        componentDidMount(){
            fn().then(mou=>{
                this.setState({
                    Com:mou.default
                })
            })
        }

        render(){
            let {Com} = this.state
            return (
                <div>
                   { Com?<Com {...this.props}></Com>:null}
                </div>
                
            )
        }
    }
    return Compone
}
export default asyncComponent