import React from "react";
import "../css/Common_sl.css";
import title_icon from "../images/logo.png";
import image from "../images/banner_img.png"
import google_play from "../images/google_play_btn.png"
import app_store from "../images/app_store_btn.png"
import Typewriter from 'typewriter-effect';
import Banner from "./Banner";
import { Banner_sl } from "./Banner_sl";

export const Banner_custom = () => {
    return (
        <>
            <div className="banner maxw-1350">
                <div className="banner-left my-center">
                    <div className="banner-title">
                        Welcome to <span className="title-theme-color"> Surya Loan </span> – Your Trusted Partner for <span className="title-theme-color"> 
                            <Typewriter
                            options={{
                                strings: ['Financial Solutions','Personal loans','Educational loans','Quick money','Flexible amounts'],
                                autoStart: true,
                                loop: true,
                            }}
                        /> </span>
                    </div>
                    <div className="banner-des">
                        At Surya Loans, we think everyone should access to financial help.Whether you need money for a new project, to handle surprise expenses, or to reach your goal, we're here to support you all the way.
                    </div>
                    <div className="banner-button">
                        <div className="button-1 mx-center my-1">
                            <img src={google_play} alt="surya loan app" />
                        </div>
                        <div className="button-2 mx-center my-1">
                            <img src={app_store} alt="surya loan app" />
                        </div>
                    </div>
                </div>

                <div className="banner-right mx-center mt-3">
                    <img className="ml-auto" src={image} alt="surya loan banner" />
                </div>
            </div>
        </>
    )
}
