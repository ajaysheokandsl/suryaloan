import React from "react";
import "../css/ContentPage.css";
import ChatButton from "../components/ChatButton";
import { howToDeleteData, termsandconditions } from "../content/text";

const TermsandConditions = () => {
  return (
    <>
      <div className="content_page_wrapper">
        <div className="content_page_banner_wrapper">
          <div className="content_page_banner_wrapper_overlay">
            <h2>T&C</h2>
          </div>
        </div>

        <div className="text_content_wrapper">
          <div className="text_content" style={{ width: "95%" }}>
            <h1 className="page_title mt30 mb50">Terms and Conditions</h1>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <p>
                 Welcome to the Surya Loan website, operated by Raghavi Finance Limited ("we", "us", "our").
                By accessing or using our website ("Site") and services ("Services"), you agree to be bound by
                the following terms and conditions ("Terms"). Please read them carefully.
                </p>
                <ul>
                  {
                    termsandconditions.map((item,index)=>{
                      return(
                        <li className="tc_li" key={index}>
                    <b>{item.title}</b> {item.des}
                  </li>
                      )
                    })
                  }
                 
                </ul>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item">
                <h2>Data Deletion Policy</h2>
                <p className="mt10">
                At Surya Loan, we value your privacy and are committed to ensuring your personal data is  handled securely and responsibly. If you wish to delete your account and personal data, please  follow the steps below: 
                </p>
                <p className="mt10">
                  <b>How to Delete Your Data:</b>
                </p>
                <ul>
                  {howToDeleteData.map((item, index)=>{
                    return (
                      <li className="tc_li">
                    <b>{item.title}:</b> {item.des}
                  </li>
                    )
                  })}
                  {/* <li className="tc_li">
                    <b>Open the SuryaLoan App:</b> Launch the app on your
                    mobile device and log in to your account.
                  </li>
                  <li className="tc_li">
                    <b>Go to Account Settings:</b> Navigate to the "Settings" or
                    "Account" section from the main menu.
                  </li>
                  <li className="tc_li">
                    <b>Request Data Deletion:</b> Find the option labeled
                    "Delete Account" or "Request Data Deletion." Tap on it and
                    follow the on-screen instructions.
                  </li>
                  <li className="tc_li">
                    <b>Confirm Deletion:</b> You will be asked to confirm your
                    decision. Please note that this action is irreversible. Once
                    confirmed, your account and all associated data will be
                    permanently deleted from our servers.
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2>What Happens Next ?</h2>
                <ul>
                  <li className="tc_li">
                    <b>Processing Time: </b>Your data deletion request will be processed within 7-14 days.
                  </li>
                  <li className="tc_li">
                    <b>Email Confirmation:</b>  You will receive an email confirmation once your data has been  successfully deleted.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2>Important Considerations :</h2>
                <ul>
                  <li className="tc_li">
                    <b>Irreversibility: </b>Once your data is deleted, it cannot
                    be recovered. Ensure you have saved any important
                    information before proceeding.
                  </li>
                  <li className="tc_li">
                    <b>Outstanding Loans:</b> If you have any outstanding loans
                    or financial obligations with SuryaLoan, please settle
                    them before requesting data deletion.
                  </li>
                  <li className="tc_li">
                    <b>Customer Support:</b> If you encounter any issues or have
                    questions about the data deletion process, please contact
                    our customer support team at info@SuryaLoan.com or call
                    us at +917404141850.
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2>Contact Us</h2>
                <p className="mt10">
                  If you have any questions or concerns about these Terms,
                  please contact us at:{" "}
                </p>
                <ul>
                  <li className="tc_li">Raghavi Finance Pvt Ltd</li>
                  <li className="tc_li">info@SuryaLoan.com</li>
                  <li className="tc_li">+917404141850</li>
                </ul>

                <div className="mt30">
                  <p>
                    By using our services, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms &
                    Conditions. If you do not agree to these Terms, please do
                    not use our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default TermsandConditions;
