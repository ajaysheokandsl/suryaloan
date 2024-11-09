import React from "react";
import { Link } from "react-router-dom";

const EligibilityFailed = () => {
  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa', // Light background
    padding: '20px',
  };

  const svgStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  };

  const messageTitleStyle = {
    color: '#ff4c4c', // Red for attention
    fontSize: '2rem',
    marginBottom: '10px',
  };

  const messageTextStyle = {
    color: '#666',
    fontSize: '1.2rem',
    marginBottom: '20px',
  };

  const actionStyle = {
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    textDecoration: 'none',
    color: '#fff',
    backgroundColor: '#007bff', // Blue for primary actions
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div style={containerStyle}>
      {/* SVG Cross */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={svgStyle}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>

      {/* Message Section */}
      <div>
        <h1 style={messageTitleStyle}>Eligibility Check Failed</h1>
        <p style={messageTextStyle}>
          Unfortunately, you are not eligible at this moment. Please review the eligibility criteria and try again.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={actionStyle}>
        <Link to="/apply-now" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
          Try Again
        </Link>
        <Link to="/contact" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
          Contact Support
        </Link>
      </div>
    </div>
  );
};

export default EligibilityFailed;
