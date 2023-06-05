import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100086782807354"
          target="_blank"
        >
          <i className="uil uil-facebook-f footer-social"></i>
        </a>
        <a href="tel:+254743432504">
          <i className="uil uil-phone-alt footer-social"></i>
        </a>
        <a href="mailto:franklineosoro08@gmail.com">
          <i className="uil uil-envelope footer-social"></i>
        </a>
      </div>
      <div>
        <p className="copyright">&copy; 2023 FrankDev. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
