import "./ContactUs.css";
import "../../App.css";
import React from "react";
import BackgroundFade from "../../components/backgroundfade/BackgroundFade";

import mailbutton from "../../images/buttons/mailbutton.png"
import phonebutton from "../../images/buttons/phonebutton.png"


function HomePage() {

  const phoneNumber = '205-454-5120';
  const destinationEmail = 'TTownBounce1@gmail.com';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${destinationEmail}`;
    
    // Open the email client with the pre-loaded recipient address
    window.location.href = mailtoLink;
  };

  const handleCallButtonClick = () => {
    const confirmCall = window.confirm(`Do you want to call ${phoneNumber}?`);
    if (confirmCall) {
      // Use appropriate code to initiate the phone call
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <div className="page">
      <div className="cubodyContainer">
        <h1 className="cuheaderText cububbleWhite">Contact Us By Phone</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 className="infoText cububbleWhite " style={{ marginRight: '10px' }}>205-454-5120</h1>
          <button className="rounded-button" onClick={handleCallButtonClick} style={{ verticalAlign: 'middle' }}><img src={phonebutton} alt="Phone Icon" style={{ verticalAlign: 'middle' }}/></button>
        </div>
      </div>
      <div className="cubodyContainer">
        <h1 className="cuheaderText cububbleWhite">Contact Us By Email</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 className="infoText cububbleWhite" style={{ marginRight: '10px' }}>TTownBounce1@gmail.com</h1>
          <button className="rounded-button" onClick={handleEmailClick} style={{ verticalAlign: 'middle' }}><img src={mailbutton} alt="Email Icon" style={{ verticalAlign: 'middle' }} /></button>
        </div>
      </div>
      <BackgroundFade />
    </div>
  );
}

export default HomePage;
