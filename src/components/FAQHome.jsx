import React from 'react'
import Indian_woman_sl from "../images/indian-woman-sl.png"
import { FAQ_Accordion } from './FAQ_Accordion'
export const FAQHome = () => {
  return (
    <div className='faq_home'>
        <div className="faq_home_title text-center">
            <div>FAQ</div>
            <h2>Find Answres to Common</h2>
            <h2 className='title-theme-color'>Queries</h2>
        </div>
        
        <div className='w-100 faq_home_container'>
        <div className="faq_home_left m-auto">
            <FAQ_Accordion limit={5}/>
        </div>
        <div className="faq_home_right m-auto">
            <img src={Indian_woman_sl}/>
        </div>
        </div>
        
    </div>
  )
}
