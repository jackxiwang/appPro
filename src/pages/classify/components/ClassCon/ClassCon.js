import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class ClassCon extends Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    changeChild(i) {
        this.setState({
            n: i
        })
        // const { catetree } = this.props;
    }
    changePid(id,title) {
        this.props.history.push('/goods/?id=' + id+'&title='+title)
    }
    render() {
        const { n } = this.state
        const { catetree } = this.props
        let child = catetree[n].children

        return (
            <div>
                <div className="content">
                    <ul className="list-nav" >
                        {catetree.map((item, index) => {
                            return <li className={index === n ? 'nav-active' : ''}
                                key={item.id}
                                onClick={() => this.changeChild(index)}>
                                {item.catename}
                            </li>
                        })}
                        {/* <li className="nav-active">施华蔻</li>
                        <li>沙宣</li>
                        <li>欧莱雅</li>
                        <li>潘婷</li>
                        <li>资生堂</li> */}
                    </ul>
                    <div className="list-shop">
                        <div className="product-list">
                            {child.map(value => {
                                return (<div
                                    className="product-content" key={value.id}
                                    onClick={()=>this.changePid(value.id,value.catename)}>
                                    <img src={value.img} alt="" />
                                    <p>{value.catename}</p>
                                </div>)
                            })}
                            {/* {child.map(value => {
                                return (<div className="product-content" key={value.id}>
                                    <img src={value.img} alt="" />
                                    <p>{value.catename}</p>
                                </div>)
                            })} */}
                            {/* <div className="product-content">
                                <img src="" alt="" />
                                <p>护亮泽洗发水</p>
                            </div>
                            <div className="product-content">
                                <img src="" alt="" />
                                <p>护亮泽洗发水</p>
                            </div> */}

                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(ClassCon)