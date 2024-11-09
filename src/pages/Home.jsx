import React, { useState } from "react";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { VscCombine } from "react-icons/vsc";
import LoanCalculator from "../components/LoanCalculator";
import ChatButton from "../components/ChatButton";
import { FaApple } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import {
  MdOutlineFileDownload,
  MdOutlineFileUpload,
  MdOutlineDone,
} from "react-icons/md";
import step_3_img from "../images/step_3.png";
import { aboutParagraph, aboutParagraphHidden, advantages, debtConsolidation, instantloan, secureFuture, shortloan, weWork } from "../content/text";
import mobilesl from "../images/mobilesl.png"
import mobiles2 from "../images/mobiles2.JPG"
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Banner_custom } from "../components/Banner_custom";
import { Card } from "../components/Card";
import { Feature } from "../components/Feature";
import { FAQHome } from "../components/FAQHome";
import { About } from "../components/About";
import img1 from "../images/mdi_bike-fast_sl.png"
import img2 from '../images/ph_less-than-or-equal-bold.png'
import img3 from "../images/fluent_money-16-filled.png"
const Home = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <div className="page_wrapper">
        <div className="container">
        <Banner_custom/>
        </div>

        <About/>
        {/* <Service/> */}
        <div className="services_section">
        <div className='services_card_sl_title my-center'>
            <div className='services_card_sl_title-1'>What we do</div>
            <div className='services_card_sl_title-2'>Empowering You with <span className='title-theme-color'>Tailored</span></div>
            <div className='services_card_sl_title-2 title-theme-color'>Loan Services</div>
        </div>         
          <div className="services_card_container">
              <Card title={"Instant Loan"} icon={<GiPayMoney className="service_icon" />} img={img1} des={instantloan} link={'/instantloan'}/>
              <Card title={"Short Loans"} icon={<GiTakeMyMoney className="service_icon" />} img={img2} des={shortloan} link={'/shortloan'}/>
              <Card title={"Debt Consolidation"} icon={<VscCombine className="service_icon" />} img={img3} des={debtConsolidation} link={'/services'}/>
          </div>
        </div>
        <Feature/>
        <div className="features_section">
          <div className="advantages_wrapper">
            <div className="title_section">
              <h2 className="mt20 full-width text-center">
                SuryaLoan's <span>Advantages</span>
              </h2>
              <p className="mt5 text-center">
                Here's how we make your financial journey smooth
              </p>
            </div>
            <div className="advantages_section">
              <div className="container">
                <div className="advantages_section_row text-center">
                  {advantages?.map((item, index)=>{
                    return (
                      <div data-aos="zoom-in-down" className="advantage_section_card" key={index}>
                    <div className="advantage_section_icon_container mx-auto">
                      {item?.icon}
                    </div>
                    <div>
                      <h3>{item?.title}</h3>
                      <p>
                        {item?.description}
                      </p>
                    </div>
                  </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-down" className="get_started_section">
          <div className="title_section ">
            <h2 className="mt20 full-width text-center">
              Get Started <span>Instantly</span>
            </h2>
            <p className="full-width text-center mt5">
              Download the SuryaLoan app and get moving
            </p>
          </div>
          <div className="get_started_row">
            {step === 1 ? (
              <>
                <div className="image_section">
                  <img src={mobilesl} alt="" className="underlay_img" />
                  {/* <img src={overlay_img} className="overlay_img" /> */}
                </div>
              </>
            ) : step === 2 ? (
              <>
                <div className="image_section">
                  <img src={mobiles2} alt="" />
                </div>
              </>
            ) : step === 3 ? (
              <>
                <div className="image_section">
                  <img src={step_3_img} alt="" />
                </div>
              </>
            ) : (
              ""
            )}
            <div className="steps_section">
              <h3 className="mb50">How does this App Work ?</h3>
              <div
                className={
                  step === 1 ? "step_item flex step_active" : "step_item flex"
                }
              >
                <div
                  className={
                    step === 1
                      ? "step_icon_container icon_active"
                      : "step_icon_container"
                  }
                  onClick={(e) => setStep(1)}
                >
                  <MdOutlineFileDownload className="step_icon" />
                </div>
                <div className="step_content">
                  <h4 className="content_title">Download the App and Apply</h4>
                  <p>
                    Head over to apply for loan section and fill your basic
                    details to get started
                  </p>
                </div>
              </div>
              <div
                className={
                  step === 2 ? "step_item flex step_active" : "step_item flex"
                }
              >
                <div
                  className={
                    step === 2
                      ? "step_icon_container icon_active"
                      : "step_icon_container"
                  }
                  onClick={(e) => setStep(2)}
                >
                  <MdOutlineFileUpload className="step_icon" />
                </div>
                <div className="step_content">
                  <h4 className="content_title">Upload Documents</h4>
                  <p>
                    Upload KYC Documents (PAN and Aadhar Card) income proof &
                    wait for verification
                  </p>
                </div>
              </div>
              <div
                className={
                  step === 3
                    ? "step_item flex step_active last_item"
                    : "step_item flex last_item"
                }
              >
                <div
                  className={
                    step === 3
                      ? "step_icon_container icon_active"
                      : "step_icon_container"
                  }
                  onClick={(e) => setStep(3)}
                >
                  <MdOutlineDone className="step_icon" />
                </div>
                <div className="step_content">
                  <h4 className="content_title">Get Approved Instantly</h4>
                  <p>
                    Post verification the disbursal process is Initiated
                    instantly
                  </p>
                </div>
              </div>
              <div className="app_download_button_container ml70">
                <p className="mb10">Download the app now</p>
                <div className="flex flex-center button_wrapper">
                  <Link to="">
                    <FaApple className="app_download_icon" />
                  </Link>
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.SuryaLoan.SuryaLoan"
                    target="_blank"
                  >
                    <DiAndroid className="app_download_icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQHome/>
      </div>
      <ChatButton />
    </>
  );
};

export default Home;
