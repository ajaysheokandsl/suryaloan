import React from 'react'
import youngMan from '../images/young-man-suryaloan.png'
import "../css/Common_sl.css"
import CountUp from 'react-countup';

export const Feature = () => {
  return (
    <div className='feature_sl'>
        <div className='feature_sl_left flex flex-wrap m-auto '>
            <div className='counter'>
                <div className='counter_number'><CountUp end={8979} /> +</div>
                <div className='counter_des'>Loan Disbursed</div>
            </div>
            <div className='counter'>
                <div className='counter_number'><CountUp end={966} /> +</div>
                <div className='counter_des'>Happy Users</div>
            </div>
            <div className='counter'>
                <div className='counter_number'><CountUp end={375} /> +</div>
                <div className='counter_des'>Skilled Experts</div>
            </div>
            <div className='counter'>
                <div className='counter_number'><CountUp end={333} /> +</div>
                <div className='counter_des'>Honorable Awards</div>
            </div>
        </div>
        <div className='feature_sl_right m-auto'>
            <img src={youngMan} alt='suryalaon' />
        </div>
    </div>
  )
}
