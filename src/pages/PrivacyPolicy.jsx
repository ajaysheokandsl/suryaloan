import React from "react";
import { FaUser, FaMobile, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../css/ContentPage.css";
import ChatButton from "../components/ChatButton";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="content_page_wrapper">
        <div className="content_page_banner_wrapper">
          <div className="content_page_banner_wrapper_overlay">
            <h2>Privacy Policy</h2>
          </div>
        </div>

        <div className="text_content_wrapper">
          <div className="text_content" style={{ width: "95%" }}>
            <h1 className="page_title mt30 mb50">Privacy Policy</h1>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <p>
                  <b>Raghavi Finance Limited</b> we operates the https://www.suryaloan.com website. This Privacy Policy explains how we collect, use, and share your personal  information when you use our Service. 

                </p>
                <h2 className="mb10 mt10">Information We Collection</h2>
                <p className="mt10">
                  <b>Personal Information:</b> When you apply for a loan or use
                  our Services, we may collect personal information such as your
                  Name, address, email address, phone number, date of birth, and
                  other identifying information.
                </p>
                <p className="mt10">
                  <b>Usage Information:</b> We may collect information about how
                  you access and use our website and services, including IP
                  addresses, browser type, and operating system.
                </p>
                <p className="mt10">
                  <b>Financial Information:</b> Bank account details, credit
                  card information, credit history, and other financial data
                  necessary for providing our services.
                </p>
                <p className="mt10">
                  <b>Identification Documents:</b> Copies of government-issued
                  identification documents, such as passports or driver's
                  licenses.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">How We Use Your Information</h2>
                <p className="mt10">
                  We use your information for the following purposes:
                </p>
                <p className="mt10">To provide and maintain our services.</p>
                <p className="mt10">
                  To process your transactions and manage your accounts.
                </p>
                <p className="mt10">
                  To verify your identity and prevent fraud.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">Data security</h2>
                <p className="mt10">
                  We implement appropriate technical and organisational measures
                  to protect your personal information from unauthorised access,
                  use, or disclosure. However, no method of transmission over
                  the internet or electronic storage is 100% secure.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">Your rights</h2>
                <p className="mt10">
                  Depending on your jurisdiction, you may have the following
                  rights regarding your personal information:
                </p>
                <p className="mt10">
                  The right to access your personal information.
                </p>
                <p className="mt10">
                  The right to correct any inaccurate or incomplete information.
                </p>
                <p className="mt10">
                  The right to request the deletion of your personal
                  information.
                </p>
                <p className="mt10">
                  The right to object to or restrict the processing of your
                  personal information.
                </p>
                <p className="mt10">
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">Data Retention and Deletion</h2>
                <p className="mt10">
                  You also attest to the fact that, in accordance with our
                  adopted document retention policy, we will be free to keep
                  such papers for internal records.
                </p>
                <p className="mt10">
                  You have the choice to consent to the use of certain data,
                  limit its disclosure to third parties, control data retention,
                  or revoke consent that has already been given to collect
                  personal data if the Credit Line you were given is settled and
                  you owe them nothing more, and you obtain specific regulatory
                  authority in accordance with the Prevention of
                  Money-Laundering Act, 2002.
                </p>
                <p className="mt10">
                  Depending on your jurisdiction, you may have the following
                  rights regarding your personal information:
                </p>
                <p className="mt10">
                  You have a right to request the deletion of your personal
                  information.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">Cookies and Tracking Technologies</h2>
                <p className="mt10">
                  We use cookies and similar tracking technologies to enhance
                  your experience on our website. You can control the use of
                  cookies through your browser settings.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">Grievance Officer</h2>
                <p className="mt10">
                  At SuryaLoan, your privacy and satisfaction are our top
                  priorities. To ensure your concerns are addressed promptly, we
                  have appointed a dedicated Grievance Officer. If you have any
                  issues or grievances regarding your personal information or
                  our services, please do not hesitate to reach out.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb15 mt10">Contact Our Grievance Officer</h2>
                <div className="ml20">
                  <p className="mt10 flex flex-center">
                    <FaUser className="content_icon mr5" />
                    <span>Raman</span>
                  </p>
                  <p className="mt10 flex flex-center">
                    <FaMobile className="content_icon mr5" />
                    <span>+917404141850</span>
                  </p>
                  <p className="mt10 flex flex-center">
                    <MdEmail className="content_icon mr5" />
                    <span>care@suryaloan.com</span>
                  </p>
                  <p className="mt10 flex flex-center">
                    <FaLocationArrow className="content_icon mr5" />
                    <span>
                    Heritage Plaza, Gulab Singh Chowk, Hisar, Haryana -125001
                    </span>
                  </p>
                </div>
                <p className="mt10">
                  We are committed to resolving your concerns in a timely and
                  efficient manner. Thank you for choosing SuryaLoan.
                </p>
              </div>
            </div>
            <div className="flex flex-center content_row">
              <div className="content_item" style={{ maxWidth: "90%" }}>
                <h2 className="mb10 mt10">Changes to this privacy policy</h2>
                <p className="mt10">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any significant changes by posting the new
                  Privacy Policy on our website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatButton />
    </>
  );
};

export default PrivacyPolicy;
