import React from 'react'
import {Carousel} from "antd-mobile"
import './banner.css'
export default function Banner(props) {
    const {banner}=props
    console.log(banner);
    return (
        <div className="banner">
            <Carousel
             autoplay
             infinite>
                {
                    banner.map(item=>{
                        return <img key={item.id} src={item.img} alt=""/>
                    })
                }
            </Carousel>
           
        </div>
    )
}
