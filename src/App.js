import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TopContactBar from "./components/TopContactBar";
import Header from "./components/Header";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ApplyForLoan from "./pages/ApplyForLoan";
import ShortLoan from "./pages/ShortLoan";
import InstantLoan from "./pages/InstantLoan";
import FAQ from "./pages/FAQ";
import RateandTerms from "./pages/RateandTerms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsandConditions from "./pages/TermsandConditions";
import Ahmedabad from "./pages/locations/Ahmedabad";
import Hyderabad from "./pages/locations/Hyderabad";
import Mumbai from "./pages/locations/Mumbai";
import Banglore from "./pages/locations/Banglore";
import Delhi from "./pages/locations/Delhi";
import RepayLoan from "./pages/RepayLoan";
import RepayLoan2 from "./pages/RepayLoan2";
import Flexibility from "./pages/Flexibility";
import DebtConsolidation from "./pages/DebtConsolidation";
import MinimalCommitment from "./pages/MinimalCommitment";
import CostEffective from "./pages/CostEffective";
import Thankyou from "./pages/Thankyou";
import Eligibilty from "./pages/EligibiltyFailed";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header_sl } from "./components/Header_sl";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const showmessage = async (message) => {
    try {
      var x = document.getElementById("snackbar");
      x.className = "show";
      x.innerText = message;
      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div id="snackbar"></div>
        <header className="full-width">
          {/* <TopContactBar /> */}
          <Header_sl />
        </header>
        <main className="full-width">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/apply-now"
              element={<ApplyForLoan showmessage={showmessage} />}
            />
            <Route path="/shortloan" element={<ShortLoan />} />
            <Route path="/thankyou" element={<Thankyou />} />
            <Route path="/eligibility" element={<Eligibilty />} />
            <Route path="/instantloan" element={<InstantLoan />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/rateandterms" element={<RateandTerms />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/termsandconditions" element={<TermsandConditions />} />
            {/* <Route path="locations" element={<Locations />} /> */}
            {/* <Route path="/delhi" element={<Delhi />} />
            <Route path="/banglore" element={<Banglore />} />
            <Route path="/mumbai" element={<Mumbai />} />
            <Route path="/ahmedabad" element={<Ahmedabad />} />
            <Route path="/hyderabad" element={<Hyderabad />} /> */}
            <Route
              path="/repayloan"
              element={<RepayLoan showmessage={showmessage} />}
            />
            {/* <Route
              path="/repay-loan"
              element={<RepayLoan2 showmessage={showmessage} />}
            /> */}
            <Route path="/flexibility" element={<Flexibility />} />
            <Route path="/debtconsolidation" element={<DebtConsolidation />} />
            <Route path="/minimalcommitment" element={<MinimalCommitment />} />
            <Route path="/costeffective" element={<CostEffective />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <footer className="full-width">
          <Footer />
          <ToastContainer />
        </footer>
      </div>
    </>
  );
};

export default App;
