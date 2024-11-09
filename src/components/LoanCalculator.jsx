import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import money_bag from "../images/money-bag.gif"
import { toast } from 'react-toastify';

const LoanCalculator = () => {
  const [baseamount, setBaseAmount] = useState(5000);
  const [tenure, setTenure] = useState(1);
  const [repayableAmount, setRepayableAmount] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [interest, setInterest] = useState(0);

  const calculateAmount = () => {
    // Trigger the calculation by updating the state
    if(baseamount < 5000 ){
      toast.error("Amount must be greater then 5000");
      return
    }else if(baseamount>100000){
      toast.error("Amount must be less than 10,0000");
      return;
    }else if(tenure>30){
      toast.error("You can Check on upto 30 days only");
      return;
    }else if(tenure<1){
      toast.error("Number of Days must be more than 0");
      return;
    }
    const calculatedInterest = baseamount * 0.01 * tenure;
    const calculatedTotalAmount = Number(baseamount) + calculatedInterest;
    setInterest(calculatedInterest);
    setTotalAmount(calculatedTotalAmount);
    setRepayableAmount(true);
    toast.success(`You have to pay only Rs ${calculatedTotalAmount}`);
  };

  
  return (
    <>
      <div className="loan_calculator">
      
        <h2>
        <img src={money_bag} height={50} width={50} />
          <br/>Loan Calculator
        

        </h2>
        <div className="input_field_container">
          <div className="item_title">
            <h4 className="mb10">Amount</h4>
          </div>
          <div className="illustrative_values flex flex-center space-between">
            <p>5K</p>
            <p>1L</p>
          </div>
          <div className="input_item flex flex-center">
            <input
              type="number"
              value={baseamount}
              step={500}
              min="5000"
              max="100000"
              onChange={(e) =>  setBaseAmount(e.target.value)}
            />
            <div className="amount ml10">
              <span className="data_values">{baseamount}</span>
            </div>
          </div>
          <div className="item_title">
            <h4 className="mb10">Period</h4>
          </div>
          <div className="illustrative_values flex flex-center space-between">
            <p>1 Day</p>
            <p>30 Days</p>
          </div>
          <div className="input_item flex flex-center">
            <input
              type="number"
              min="1"
              max="30"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />
            <div className="amount ml10">
              <span className="data_values">{tenure}</span>
            </div>
          </div>
          <div className="item_title">
            <h4 className="mb10">Interest Rate</h4>
          </div>
          <div className="illustrative_values flex flex-center space-between">
            <p>1%</p>
            {/* <p>1%</p> */}
          </div>
          <div className="input_item flex flex-center">
            {/* <input type="number" name="" id="" min="1" max="1" disabled />
            <div className="amount ml10">
              <span className="data_values">1%</span>
            </div> */}
          </div>
          <div className="button_container flex justify-center">
            <button className="btn_sl" onClick={calculateAmount}>Calculate</button>
          </div>
          <div className="input_item mt20 loan_amount_display_container">
          <p>
                  APR &nbsp;
                  <b>
                    486.67%
                  </b>
                </p>
          </div>
          {repayableAmount ? (
            <>
              <div className="input_item mt20 loan_amount_display_container">
                <p>
                  You have to pay &nbsp;
                  <b>
                    <FaRupeeSign className="rupee_icon" />
                    {totalAmount}
                  </b>
                </p>
                {/* <p>
                  Processing fees will be &nbsp;<b>10%</b>
                </p> */}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default LoanCalculator;
