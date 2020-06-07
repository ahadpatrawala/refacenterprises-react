import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
  return (
	<div className="header" id="home">
		<div className="top-bar">
			<div className="slogan">
				<p>&nbsp</p>
			</div>

			<div className="email">
				<p><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>Email : <a id="HyperLink11" href="mailto:refacenterprises@gmail.com">refacenterprises@gmail.com</a></p>
			</div>

			<div className="phone">
				<p><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>Phone : <a id="HyperLink9" href="tel:+919867213428">+919867213428</a>
                <a id="HyperLink17" href="tel:+9821013428">+919821013428</a>
                </p>
			</div>
			<div className="clearfix"></div>
			<div className="logo">
                <a id="logohome" href="/">Refac Enterprises<img id="logo" src={require("./images/logonew.png")} alt="Refac Enterprises" align="left" style={{height:'100px' ,width:'100px'}} />
                    <h5 style={{color: '#9E9E9E', textAlign: 'left', position: 'relative', top: '3px', left: '0px'}}>Manufacturers of all kinds of refrigeration, air-conditioning systems & customized fabrication works</h5>
			         </a>
            </div>

            <div className="clearfix"></div>
           </div>

		<nav>
			<ul className="cd-primary-nav">
            <a href='/'>
           <li>Home</li>
           </a>
           <a href='/about'>
           <li>About</li>
           </a>
           <a href='/projects'>
           <li>Projects</li>
           </a>
           <a href='/gallery'>
           <li>Gallery</li>
           </a>
           <a href='/contact'>
           <li>Contact</li>
           </a>
       </ul>
		</nav>

		<div className="cd-overlay-nav">
			<span></span>
		</div>

		<div className="cd-overlay-content">
			<span></span>
		</div>

		<a className="cd-nav-trigger" href="#"><span className="cd-icon"></span></a>
	</div>
  );
}

export default Nav;
