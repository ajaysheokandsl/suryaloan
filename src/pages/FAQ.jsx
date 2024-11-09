import React from "react";
import "../css/ContentPage.css";
import ChatButton from "../components/ChatButton";
import { faq } from "../content/text";

const FAQ = () => {
  return (
    <>

      <div className="content_page_wrapper">
        <div className="content_page_banner_wrapper">
          <div className="content_page_banner_wrapper_overlay">
            <h2>FAQ</h2>
          </div>
        </div>

        <div className="text_content_wrapper">
          <div className="text_content" style={{ width: "95%" }}>
            <h1 className="page_title mt30 mb50">Frequently asked questions</h1>
            {faq.map((item, index) => {
              return (
                <div class="accordion m-2" key={index} id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                        {item?.ques}
                      </button>
                    </h2>
                    <div id={`collapse${index}`} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        {item?.ans}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default FAQ;
