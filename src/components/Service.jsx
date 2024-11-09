import React from 'react'
import { Card } from './Card'
import { GiPayMoney } from "react-icons/gi";
import { advantages, debtConsolidation, instantloan, secureFuture, shortloan, weWork } from "../content/text";

export const Service = () => {
  return (
    <div className='services_card_sl'>
        <div className='services_card_sl_title my-center'>
            <div className='services_card_sl_title-1'>What we do</div>
            <div className='services_card_sl_title-2'>Empowering You with <span className='title-theme-color'>Tailored</span></div>
            <div className='services_card_sl_title-2 title-theme-color'>Loan Services</div>
        </div>
        <div className='services_card_sl_cards'>
            {/* <Card title={"Instant Loan"} icon={<GiPayMoney className="service_icon" />} des={instantloan} link={'/instantloan'}/> */}
        </div>
    </div>
  )
}
