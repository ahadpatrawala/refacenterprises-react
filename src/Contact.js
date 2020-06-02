import React from 'react';

function Contact(){
    return(
        <div>
            <div className="contact">
    <h2>Contact Us</h2>
    <div className="clearfix"></div>
		<div className="container">
		 <form id="form" className="contact_form" action="/contactus.php" method="POST" >
				<div className="message">
					<div className="col-md-6 col-sm-6 grid_6 c1">
						<input type="text" id="name" name="name" className="text" placeholder="Name" required pattern="^[a-zA-Z ]+$"/>
						<input type="email" id="email" name="email" className="text" placeholder="Email" required pattern="\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*"/>
						<input type="tel" id="phone" name="phone" className="text" placeholder="Phone" required maxLength="10" pattern="^\d+$"/>
					</div>
					<div className="col-md-6 col-sm-6 grid_6 c1">
                                                <textarea id="body" placeholder="Message" name="body" required></textarea>
					</div>
					<div className="clearfix"> </div> 
				
				</div>

                        <input type="submit" id="submit" className="more_btn" name="submit" value="Submit" onClick=""/>
		    </form>
                </div>
	</div>
	<div className="map">
		<h2>Location</h2>
		<iframe src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3773.0914550864827!2d72.824094!3d18.971567999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e6!4m0!4m5!1s0x3be7ce696f9035c1%3A0xb9cf79cbe36ce90!2sRefac+Enterprises%2C+11%2FA+%2C3%2F9+Haji+moosa+Apartment%2C%2C+YMCA+Club+Back+Road%2CMumbai+Central%2C%2C+Club+Back+Rd%2C+Agripada%2C+Mumbai%2C+Maharashtra+400008!3m2!1d18.971567999999998!2d72.824094!5e0!3m2!1sen!2sin!4v1392652115504"></iframe>
	</div>
        </div>
    );
}


export default Contact;

