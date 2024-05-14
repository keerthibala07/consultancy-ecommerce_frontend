

import React from 'react';
import './Footer.css';
import log from '../Assets/logo3.jpg';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintrest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import mail from '../Assets/mail2.png';
import loc from '../Assets/loc.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={log} alt="" />
        <p>GARMENTS</p>
      </div>
      <div className="footer-info">
        <div className="footer-address">
          <h4><img src={loc} alt="" />Address</h4>
          <p>373/3, Salem Main Road,</p>
          <p>B.Komaraplayam - 638183</p>
          <p>Namakkal district , TamilNadu</p>
        </div>
        <div className="footer-contact">
          <h4><img src={mail} alt="" />Contact</h4>
          <p>Mobile No : 9344228398</p>
          <p>Alternate No : 9524065746</p>
          <p>Mail : royalgarmentskpm@gmail.com</p>
        </div>
      </div>
      {/* <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintrest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div> */}
    </div>
  );
};

export default Footer;
