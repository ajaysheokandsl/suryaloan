import React from 'react';
import counter_1 from '../images/counter_icon_1.svg';
import counter_2 from '../images/counter_icon_2.svg';
import counter_3 from '../images/counter_icon_3.svg';
import counter_4 from '../images/counter_icon_4.svg';
import '../css/Common.css'
import CountUp from 'react-countup';


const Number_Statistics = () => {
    return (
        <>
            <div className="number_statistics">
                <div className="number_row">
                    <div data-aos="flip-left" className="number_statistics_item flex flex-center">
                        <div className="number_statistics_icon flex flex-center justify-center">
                            <img src={counter_1} alt="" />
                        </div>
                        <div className="number_statistics_content ml10">
                            <h3><CountUp end={8979} /> +</h3>
                            <p>Loan Disbursed</p>
                        </div>
                    </div>
                    <div data-aos="flip-right" className="number_statistics_item flex flex-center">
                        <div className="number_statistics_icon flex flex-center justify-center">
                            <img src={counter_2} alt="" />
                        </div>
                        <div className="number_statistics_content ml10">
                            <h3><CountUp end={966} /> +</h3>
                            <p>Happy Users</p>
                        </div>
                    </div>
                    <div data-aos="flip-right" className="number_statistics_item flex flex-center">
                        <div className="number_statistics_icon flex flex-center justify-center">
                            <img src={counter_3} alt="" />
                        </div>
                        <div className="number_statistics_content ml10">
                            <h3><CountUp end={375} /> +</h3>
                            <p>Skilled Experts</p>
                        </div>
                    </div>
                    <div data-aos="flip-right" className="number_statistics_item flex flex-center">
                        <div className="number_statistics_icon flex flex-center justify-center">
                            <img src={counter_4} alt="" />
                        </div>
                        <div className="number_statistics_content ml10">
                            <h3><CountUp end={333} /> +</h3>
                            <p>Honorable Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Number_Statistics