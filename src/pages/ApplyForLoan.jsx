import React from "react";
import '../css/Common.css';
import MultiStepForm from '../components/MultiStepForm.tsx';
import ChatButton from "../components/ChatButton.jsx";

const ApplyForLoan = (props) => {
  return (
    <>
      <div className="page_wrapper">
        <div className="page_banner_wrapper">
          <div className="page_banner_wrapper_overlay">
            <h2>Apply for Loan</h2>
          </div>
        </div>
        <div className="multi_step_form_container mt40">
          <div className="form_title">
            <h2>Apply for a Personal Loan</h2>
            <p className="mb20">Fill out the form below to get started</p>
          </div>
          <div className="form_container">
            <MultiStepForm showmessage={props?.showmessage} />
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default ApplyForLoan;
