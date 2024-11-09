import React from 'react'
import { Link } from "react-router-dom";
import bg_shape from "../images/service_grid_bg.png";
import '../css/Common_sl.css'
import img from "../images/mdi_bike-fast_sl.png"
export const Card = (props) => {
  return (
    <div>
        <div data-aos="flip-up" className="services_card h-100">
              <div className="services_icon_container flex flex-center justify-center">
                {/* {props?.icon} */}
                <img src={props?.img}/>
              </div>
              <div className="title full-width text-center mb10">
                <h4>{props?.title}</h4>
              </div>
              <div className="card_content">
                <p>
                  {props?.des}
                </p>

                <div className="mt30">
                  <Link className='btn_sl' to={`${props?.link}`}>Read More</Link>
                </div>
              </div>
            </div>
    </div>
  )
}
