import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
    <div className="container">
        <div className="col-md-3 col-sm-3 link">
            <h4>Navigate</h4>
        <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>				
                <li className="no-border"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-3 link">
            <h4>Location</h4>
            <ul>
                <li className="no-border">11/A Club Back Road,</li>
                <li className="no-border">3/9, Haji Moosa Apts,</li>
                <li className="no-border">Maratha Mandir Cross Lane,</li>
                <li className="no-border">Mumbai-400008,</li>
                <li className="no-border">Maharashtra, India</li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-3 link">
            <h4><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>Email Us</h4>
          <div className="email">
          <a id="email" href="mailto:refacenterprises@gmail.com">refacenterprises@gmail.com</a>
          </div>
        </div>
        <div className="col-md-3 col-sm-3 link">
            <h4><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>Contact Us</h4>
            <div className="phone">
            <ul>                  
                <li className="no-border"><a id="HyperLink18" href="tel:+919867213428">+919867213428</a></li>
                <li className="no-border"><a id="HyperLink19" href="tel:+9821013428">+919821013428</a></li>
            </ul>
            </div>
        </div>
        </div>
<div className="footer-grid-4 copyright">
    <p>&copy; Refac Enterprises. All Rights Reserved</p>
</div>

</div>
  );
}

export default Footer;
