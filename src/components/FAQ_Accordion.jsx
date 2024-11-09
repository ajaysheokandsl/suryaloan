import React from 'react'
import { faq } from "../content/text";

export const FAQ_Accordion = ({ limit }) => {
    return (
        <div>
            {faq.map((item, index) => {
                if (index < limit) {
                    return (
                        <div className="accordion accordion-flush m-2" id="accordionFlushExample" key={index}>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index+1}`} aria-expanded="false" aria-controls={`flush-collapse${index+1}`}>
                                {item?.ques}
                            </button>
                            </h2>
                            <div id={`flush-collapse${index+1}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{item?.ans}</div>
                            </div>
                        </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
