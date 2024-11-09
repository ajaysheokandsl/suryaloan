import React, { useState } from "react";
import "../css/Common.css";

import qr_image from "../images/qr_company.jpg";
import qr2 from "../images/qr2.png";
import ChatButton from "../components/ChatButton";

const RepayLoan = (props) => {
  const [content, setContent] = useState("pannumber");

  const [getLoading, setLoading] = React.useState(false);

  const [getPancard, setPancard] = useState("");
  const [getOtp, setOtp] = useState("");
  const [getPayamount, setPayamount] = useState("");
 
  const send_otp = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://api.salaryontime.in/Api/CustomerDetails/Sendotp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
           "Auth": "Y2M0Nzk0OGYwNmQyMjdmZTlhY2E1ZWQ1Nzk5YTZmMWE=",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          pancard: getPancard,
        }),
      });

      if (resp.status == 200) {
        const dataset = await resp.json();
        if (dataset.Status == 1) {
          setLoading(false);
          props.showmessage(dataset.Message);
          setContent("panotp");
        } else {
          props.showmessage(dataset.Message);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handlePAN = (e) => {
    const value = e.target.value.toUpperCase(); // Convert input to uppercase

    // Ensure the input follows the PAN format
    if (
      /^[A-Z]{0,5}$/.test(value.slice(0, 5)) &&
      /^[\d]{0,4}$/.test(value.slice(5, 9)) &&
      /^[A-Z]{0,1}$/.test(value.slice(9))
    ) {
      setPancard(value);
    }
  };

  const handleOTP = (e) => {
    const value = e.target.value;
    // Ensure the input is numeric and has a maximum length of 4
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOtp(value);
    }
  };

  const verify_otp = async () => {
    try {
      setLoading(true);
      const resp = await fetch("https://api.salaryontime.in/Api/CustomerDetails/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
           "Auth": "Y2M0Nzk0OGYwNmQyMjdmZTlhY2E1ZWQ1Nzk5YTZmMWE=",
            "Accept": "application/json"
        },
        body: JSON.stringify({
          panNumber: getPancard,
          otp: getOtp,
        }),
      });

      if (resp.status == 200) {
        const dataset = await resp.json();
        console.log(dataset)
        if (dataset.Status == 1) {
      
       
          const repaymentAmount = dataset?.data?.repayment_data?.repayment_amount;
          console.log('Repayment Amount:', repaymentAmount);
          setPayamount(repaymentAmount); // Assuming you have a state to hold this value
          setLoading(false);
          setContent("amountfetched");
        } else {
          props.showmessage(dataset.Message);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const pay_here = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.salaryontime.in/Api/CustomerDetails/verifyOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          panNumber: getPancard,
          otp: getOtp,
        }),
      });

      if (response.status == 200) {
        const datasets = await response.json();
        if (datasets.Status == 1) {
          const repaymentAmount = datasets?.data?.repayment_data?.repayment_amount;
          const LOAN_NO = datasets?.data?.repayment_data?.loan_no;
          console.log('Repayment Amount:', datasets.order_id);
          // setPayamount(repaymentAmount); // Assuming you have a state to hold this value
          setLoading(false);
          // setContent("amountfetched");
          var options = {
            key: "rzp_live_5ObxicPjrf2lxS", // Enter the Key ID generated from the Dashboard
            amount: (repaymentAmount*100).toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "SalaryOnTime", //your business name
            description: getPancard,
            image: "https://web.salaryontime.in/public/images/final_logo.png",
            order_id: datasets.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            callback_url: "https://salaryontime.com/thankyou",
            prefill: {
              //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
              name: "Hidden", //your customer's name
              email: "hidden@gmail.com",
              contact: "9999999999", //Provide the customer's phone number for better conversion rates
            },
            notes: {
              loan_no: LOAN_NO
            },
            theme: {
              color: "#8180e0",
            },
          };
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    // props.showmessage("testme")
  }, [""]);

  return (
    <>
      <div className="page_wrapper">
        <div className="page_banner_wrapper repay_loan_banner">
          <div className="page_banner_wrapper_overlay repay_loan_banner_overlay">
            <h2>Repay Loan</h2>
          </div>
        </div>

        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
        <script>{ }</script>

        <div className="repay_loan_wrapper">
          <div className="repay_loan_section">
            {content === "pannumber" ? (
              <>
                
                <div className="pan_number">
                  <p className="note mb20">
                    Please verify the accuracy of the below details before doing
                    any transfer
                  </p>
                  <span>Please enter your PAN Details</span> <br />
                  <input
                    type="text"
                    value={getPancard}
                    onChange={handlePAN}
                    required
                    maxLength={10}
                  />
                  <div className="button_container mt30">
                    <button onClick={(e) => send_otp()}>
                      {getLoading == true ? (
                        <div className="loadinganim"></div>
                      ) : (
                        "Get OTP"
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : content === "panotp" ? (
              <>
                <div className="pan_number">
                  <p className="pan_details mb20">PAN NUMBER : {getPancard}</p>
                  <input
                    type="text"
                    placeholder="Please enter the OTP received"
                    value={getOtp}
                    onChange={handleOTP}
                    maxLength={4}
                  />
                  <p className="agreement">
                    <input type="checkbox" name="" id="" />
                    <span>
                      To process with your loan application, kindly confirm your
                      acceptance of our Terms and Conditons, Privacy Policy, and
                      your consent to fetch your cibil score
                    </span>
                  </p>
                  <div className="button_container mt20 ml10">
                    <button
                      onClick={(e) => {
                        verify_otp();
                      }}
                    >
                      {getLoading == true ? (
                        <div className="loadinganim"></div>
                      ) : (
                        "Get Amount"
                      )}
                    </button>
                  </div>
                </div>
              </>
            ) : content === "amountfetched" ? (
              <>
                <div className="pan_number">
                  <p className="pan_details mb20">PAN NUMBER : {getPancard}</p>
                  <p className="pan_details mb20">
                    AMOUNT TO PAY : {getPayamount}
                  </p>

                  <div className="button_container mt20">
                    <button
                      onClick={(e) => {
                        pay_here();
                      }}
                      id="payButtonHere"
                    >
                      {getLoading == true ? (
                        <div className="loadinganim"></div>
                      ) : (
                        "Repay Loan"
                      )}
                    </button>
                  </div> 
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          
           
          <div className="bank_details_section flex flex-center space-between">
            <table className="details_table">
              <tr>
                <td>
                  <span className="account_field_value">Bank Name</span>
                </td>
                <td>
                  <span className="account_data_value">ICICI Bank Ltd</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Company Name</span>
                </td>
                <td>
                  <span className="account_data_value">
                    KASAR CREDIT AND CAPITAL PRIVATE LIMITED
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Account No.</span>
                </td>
                <td>
                  <span className="account_data_value">071805004842</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">IFSC Code</span>
                </td>
                <td>
                  <span className="account_data_value">ICIC0000718</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Branch Address</span>
                </td>
                <td>
                  <span className="account_data_value">
                    Vaibhav Khand, Indirapuram, Ghaziabad, UP - 201012
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Account Type</span>
                </td>
                <td>
                  <span className="account_data_value">Current</span>
                </td>
              </tr>
            </table>
            
            <div className="qr_details">
              <img src={qr_image} alt="Couldn't load" />
            </div>
          </div>
          <div className="bank_details_section flex flex-center space-between">
          <table className="details_table">
              <tr>
                <td>
                  <span className="account_field_value">Bank Name</span>
                </td>
                <td>
                  <span className="account_data_value">IDFC First Bank</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Company Name</span>
                </td>
                <td>
                  <span className="account_data_value">
                    KASAR CREDIT AND CAPITAL PRIVATE LIMITED
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Account No.</span>
                </td>
                <td>
                  <span className="account_data_value">10182292783</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">IFSC Code</span>
                </td>
                <td>
                  <span className="account_data_value">IDFB0020234</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Branch Address</span>
                </td>
                <td>
                  <span className="account_data_value">
                    Ground floor, WZ-104, Plot no 46-H, Meenakshi Garden, Tilak Nagar, New Delhi - 110018
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="account_field_value">Account Type</span>
                </td>
                <td>
                  <span className="account_data_value">Current</span>
                </td>
              </tr>
            </table>
            <div className="qr_details">
            <img src={qr2} alt="Couldn't load" />
            </div>
            </div>
            <div className="repay_loan_section"><br/>
          <><div className="pan_number">
                  <h2>Here's how our loan repayment works:</h2><br/>
                  <p><strong>Flexible Options: </strong>We offer a range of repayment tenures, allowing you to choose a period that aligns with your financial capacity. Whether you prefer to clear your debt quickly or opt for smaller monthly installments, we have options to suit your needs.</p><br/>
                  <p><strong>EMI Calculation:</strong> Our Equated Monthly Installment (EMI) calculator helps you determine the exact amount you'll repay each month. This transparency enables you to plan your finances effectively.</p><br/>
                  <p><strong>Auto-Debit Facility:</strong> To ensure you never miss a payment, we offer an auto-debit facility. Your EMI amount is automatically deducted from your linked bank account, giving you peace of mind.</p><br/>
                  <p><strong>Online Payment:</strong> We provide a secure online platform for you to make your EMI payments conveniently. Say goodbye to long queues and enjoy the ease of digital transactions.</p><br/>
                  <p><strong>Timely Reminders:</strong> We send you timely reminders before your EMI due date, helping you stay on top of your repayment schedule.</p><br/>
                  <p><strong>No Hidden Charges:</strong> Our commitment to transparency means you won't encounter any hidden charges. The amount you agree upon during the loan approval process is what you'll repay – no surprises.</p><br/>
                </div></>
                <><div className="pan_number">
                  <h2>What is the maximum and minimum repayment period at SuryaLoan?</h2><br/>
                 <p>At SuryaLoan, we allow you enough time and flexibility to repay your loan. This is done to ensure that repayments don’t feel like a burden. However, when it comes to the precise duration, the minimum repayment period is 60 days, and the maximum repayment period is 90 days.</p>
                </div></>
          </div>
        </div>
      </div>

      
      <ChatButton />
    </>
  );
};

export default RepayLoan;
