import { VscOpenPreview } from "react-icons/vsc";
import { AiOutlineFileDone } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import {GiPayMoney,  GiTakeMyMoney } from "react-icons/gi";
import { BiSolidCustomize } from "react-icons/bi";
import { SiFsecure } from "react-icons/si";
import { FaStrava } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { FaDroplet } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { VscCombine } from "react-icons/vsc";
import { FaRupeeSign } from "react-icons/fa";
import { FaCodeCommit } from "react-icons/fa6";
import { TbAdjustmentsCog } from "react-icons/tb";

export const aboutParagraph = 'Welcome to Surya Loan, your trusted partner for personal loans. Whether you need cash fast, an urgent loan, or a quick money solution, Surya Loan is here to help. We make it easy to get personal loans quickly, ensuring you have the funds when you need them most.'
export const aboutParagraphHidden= "At Surya Loan, our aim is to provide smooth financial solutions that meet your urgent needs. Enjoy the ease and dependability of our services as we work to be your trusted choice for all your cash loan needs."
export const instantloan = "We provide instant loans to help you handle unexpected financial needs quickly and easily. Our simple application process ensures you get the funds without any delays."
export const shortloan = "Explore the ease of short-term loans at Surya Loan, designed to meet your immediate financial needs. Our fast approval process ensures quick access to the funds you need."
export const debtConsolidation = "Manage your finances better with our debt consolidation services. Combine multiple debts into one easy payment and simplify your financial life."
export const secureFuture = "Choosing SuryaLoan as your financial partner means you'll get top-notch service designed specifically for your needs. We specialize in personal loans, offering a simple and fast process to apply for loans online. Whether you need money quickly or are facing a financial challenge, SuryaLoan provides dependable and speedy solutions. Count on SuryaLoan for your personal loan needs and enjoy the ease and confidence that comes with our trusted financial services."
export const weWork = [
    {
        icon:<AiOutlineFileDone className="process_icon" />,
        title: "Application Submission",
        description: "Complete and submit your loan application with the required documents and information on our website."
    },
    {
        icon: <VscOpenPreview className="process_icon" />,
        title: "Application Review",
        description: "SuryaLoan will review your application, perform credit checks, and verify your submitted documents."
    },
    {
        icon: <IoMdDoneAll className="process_icon" />,
        title: "Application Approval",
        description: "After verification, you will receive loan approval along with the terms, conditions, and the repayment schedule."
    },
    {
        icon: <GiTakeMyMoney className="process_icon" />,
        title: "Disbursal Initiation",
        description: "Once you accept the terms, the loan amount will be directly transferred to your account, hassle-free."
    }
]

export const advantages = [
    {
        icon: <BiSolidCustomize className="advantage_icon" />,
        title: "Customized Personal Loans",
        description: "A variety of personalized and flexible personal loan options"
    },
    {
        icon: <FaStrava className="advantage_icon" />,
        title: "Instant Approval",
        description: "Simple online application process for fast approval and quick disbursal."
    },
    {
        icon: <FaDroplet className="advantage_icon" />,
        title: "Transparent Process",
        description: "A transparent process to ensure a smooth experience and maintain integrity."
    },
    {
        icon: <SiFsecure className="advantage_icon" />,
        title: "Secured Data System",
        description: "Your data is safe with us, so you don't have to worry about any loss or breach."
    },
    {
        icon: <FaHandsClapping className="advantage_icon" />,
        title: "Easy to Use",
        description: "Simple, user-friendly, and convenient, ensuring a smooth and seamless experience."
    },
    {
        icon: <SiWebmoney className="advantage_icon" />,
        title: "Easy Repayment",
        description: "Flexible repayment options to make loan repayments easier for you."
    },
]

export const services = [
    {
        icon: <GiPayMoney className="services_icon" />,
        title: "Quick Loan",
        description: "We provide instant loans to help you quickly and efficiently handle unexpected financial needs.",
        link:"/instantloan"
    },
    {
        icon: <GiTakeMyMoney className="services_icon" />,
        title: "Short Loan",
        description: "Experience the ease of short-term loans with SuryaLoan, crafted to meet your urgent financial needs effortlessly.",
        link:"/shortloan"
    },
    {
        icon: <VscCombine className="services_icon" />,
        title: "Debt Consolidation",
        description: "Gain control of your finances with our debt consolidation services. Combine multiple debts into one easy-to-manage payment.",
        link:"/debtconsolidation"
    },
    {
        icon: <TbAdjustmentsCog className="services_icon" />,
        title: "Flexibility",
        description: "Short-term loans typically offer more flexible eligibility requirements and quicker approval processes.",
        link:"/flexibility"
    },
    {
        icon: <FaCodeCommit className="services_icon" />,
        title: "Minimal Commitment",
        description: "Short-term loans usually have repayment periods that range from a few weeks to a few months.",
        link:"/minimalcommitment"
    },
    {
        icon: <FaRupeeSign className="services_icon" />,
        title: "Cost Effective",
        description: "Although short-term loans may have higher interest rates than long-term loans, the overall cost of borrowing is often lower due to the shorter repayment period.",
        link:"/costeffective"
    },
]

export const aboutUs = "SuryaLoan empowers millennials to achieve their lifestyle goals with innovative loan solutions. We distinguish ourselves in the competitive personal loan market by providing the fastest loans with customer-friendly terms. As an RBI-registered NBFC, we are committed to offering our customers the best loan products available. With an experienced leadership team and skilled professionals, we’ve become one of the fastest-growing and most trusted fintech companies in the industry."
export const financialGrowth = "At SuryaLoan, we transform financial empowerment with personalized solutions tailored to meet your specific needs. With a focus on innovation and excellence, we help individuals and businesses reach their financial goals with expertise and integrity. Supported by a team of experienced professionals, SuryaLoan guarantees transparency and reliability in every step, building long-term relationships based on trust. Whether you're looking for loans or expert financial guidance, SuryaLoan is committed to securing your financial future and driving success in today’s dynamic market."
export const faq = [
    {
        ques:"What is Surya Loan?",
        ans:"Surya Loan is a short-term loan provider offering fast and convenient financial solutions to individuals who need immediate cash. Whether it's an unexpected bill or emergency expense, we provide quick access to funds when you need them most. ",
        collapse: "collapseOne"
    },
    {
        ques:"How much can I borrow from Surya Loan?",
        ans:"The amount you can borrow depends on factors such as your income, credit score, and local lending regulations. Surya Loan provides flexible loan amounts to suit individual needs, with limits in place to promote responsible borrowing.",
        collapse: "collapseTwo"
    },
    {
        ques:"How does Surya Loan work?",
        ans:"We offer short-term loans based on your income and employment status. Simply apply online or through our mobile app, and once approved, funds are typically disbursed within 24 hours, ensuring quick access to cash when you need it.",
        collapse: "collapseThree"
    },
    {
        ques:"What are the repayment terms for Surya Loan loans?",
        ans:"Our loans are generally repaid in installments, either weekly or monthly, depending on the loan amount and type. The repayment schedule is designed to be flexible and manageable, allowing you to spread out payments over time. ",
        collapse: "collapseFour"
    },
    {
        ques:"What are the eligibility requirements to apply for a loan with Surya Loan?",
        ans:"To qualify, you must provide proof of employment, have a steady income, and meet credit criteria. Eligibility requirements vary depending on the loan product and local lending regulations, ensuring loans are available to a wide range of individuals. ",
        collapse: "collapseFive"
    },
    {
        ques:"Are there any fees associated with Surya Loan loans?",
        ans:"Yes, we charge origination fees, interest rates, and other associated costs. All fees and charges will be clearly outlined in your loan agreement, ensuring transparent pricing and no hidden costs. ",
        collapse: "collapseSix"
    },
    {
        ques:"How quickly can I get funds from Surya Loan?",
        ans:"We pride ourselves on fast approval and disbursement. Once approved, funds are typically deposited into your account within one business day, making us a reliable source for emergency loans.",
        collapse: "collapseSeven"
    },
    {
        ques:"Can I repay my Surya Loan loan early?",
        ans:"Yes, early repayment is often allowed without any additional fees or penalties. You can settle your loan before the due date, saving on interest and closing the account early. Details will be provided in your loan agreement. ",
        collapse: "collapseEight"
    },
    {
        ques:"What happens if I can’t repay my Surya Loan loan on time?",
        ans:"If you are unable to meet your repayment deadline, it’s important to contact us immediately to discuss your options. Depending on your circumstances, we may offer a repayment extension or alternative arrangements to help manage your loan.",
        collapse: "collapseNine"
    },
    {
        ques:"Is my personal information safe with Surya Loan?",
        ans:"We take data privacy and security very seriously. Surya Loan uses industry-standard encryption and secure protocols to protect your personal and financial information, ensuring your data remains confidential.",
        collapse: "collapseTen"
    },
] 

export const termsandconditions = [
    {
        title: "Eligibility:",
        des:"You must be at least 18 years old and a resident of India to use the Site and Services. You must have a valid bank account in India."
    },
    {
        title: "Loan Application:",
        des:"You may apply for loans ranging from 5,000 to 100,000 through the Site. The repayment period for the loan is up to 30 days, with a daily interest rate of 1%. All  applications are subject to approval based on our assessment criteria."
    },
    {
        title: "Loan Approval and Disbursement",
        des:"Once your loan application is approved, the loan amount  will be credited to your designated bank account. Approval and disbursement times may vary  based on the completeness and accuracy of your application and documents. "
    },
    {
        title: "Repayment Terms",
        des:"You agree to repay the loan amount along with applicable interest in  accordance with the repayment schedule provided in your loan agreement. Failure to repay on  time may result in additional charges, legal actions, and may affect your credit score."
    },
    {
        title: "Interest and Fees",
        des:" The interest rate for the loan will be 1% per day. The Annual Percentage Rate (APR) will be calculated based on the daily interest rate annualized. No hidden fees will be  charged; all applicable fees and charges will be clearly disclosed during the application process."
    },
    {
        title: "User Obligations",
        des:"You agree to provide accurate and complete information during the  registration and loan application process. You are responsible for maintaining the confidentiality  of your account information and for all activities that occur under your account."
    },
    {
        title: "Prohibited Activities",
        des:"You agree not to engage in any fraudulent activities or provide false  information. You agree not to use the Site and Services for any illegal or unauthorized purpose."
    },
    {
        title: "Privacy Policy",
        des:"Our Privacy Policy outlines how we collect, use, and protect your personal  information. By using the Site and Services, you agree to our Privacy Policy."
    },
    {
        title: "Intellectual Property",
        des:"All content on the Site, including text, graphics, logos, and images, is the  property of Raghavi Finance Limited or its content suppliers and is protected by intellectual  property laws. You may not use, reproduce, or distribute any content from the Site without our  prior written permission."
    },
    {
        title: "Modification of Terms",
        des:"We reserve the right to modify these Terms at any time. Any changes  will be effective immediately upon posting on the Site. Your continued use of the Site and  Services after the changes constitutes your acceptance of the revised Terms."
    },
    {
        title: "Termination",
        des:"We may terminate or suspend your access to the Site and Services at any time,  without prior notice or liability, for any reason, including if you breach these Terms."
    },
    {
        title: "Limitation of Liability",
        des:"To the maximum extent permitted by law, Raghavi Finance Limited  shall not be liable for any indirect, incidental, special, or consequential damages arising out of or  in connection with your use of the Site and Services"
    },
    {
        title: "Governing Law",
        des:"These Terms shall be governed by and construed in accordance with the laws  of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of  the courts located in Hisar (Haryana), India."
    },
]

export const howToDeleteData = [
    {
        title:"Open the Surya Loan App",
        des:" Launch the app on your mobile device and log in to your  account."
    },
    {
        title:"Go to Account Settings",
        des:'Navigate to the "Settings" or "Account" section from the main  menu.'
    },
    {
        title:" Request Data Deletion",
        des:'Find the option labeled "Delete Account" or "Request Data  Deletion." Tap on it and follow the on-screen instructions.'
    },
    {
        title:"Confirm Deletion",
        des:"You will be asked to confirm your decision. Please note that this action is  irreversible. Once confirmed, your account and all associated data will be permanently deleted  from our servers."
    },
]

