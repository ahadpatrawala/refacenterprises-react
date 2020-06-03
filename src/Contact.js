import React from 'react';
import {Helmet} from 'react-helmet'

function Contact(){
    return(
        <div>
			<Helmet>
			<title>Refac Enterprises | Contacts Us</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Manufacturer of all kinds of refrigeration, air-conditioning systems and customized fabrication works, HVAC Manufacturers Company in Mumbai, HVAC Exporters Company in Mumbai." />
	<meta name="keywords" content="Manufacturer of all kinds of refrigeration, air-conditioning systems and customized fabrication works, HVAC Manufacturers Company in Mumbai, HVAC Exporters Company in Mumbai, refrigerator price, refrigerator online, refrigerator working, refrigeration cycle, refrigeration, refrigeration process, refrigeration manufacturers, refrigeration manufacturers in india, refrigeration manufacturing companies india, refrigeration manufacturing companies, refrigeration manufacturing process, amish refrigeration manufacturing company, bharat refrigeration manufacturing company, rapid refrigeration manufacturing company limited, commercial refrigeration manufacturing companies, commercial refrigeration manufacturing, refrigeration compressor manufacturers, duracold refrigeration mfg company, refrigeration manufacturing company in mumbai, air-conditioner, air-conditioning specialities, air-conditioning system, air-conditioning system design manual, air-conditioning system used in hotels, air conditioning system design, Indian IT recruiter, Human resource consultant, Lifts, Elevators, Escalators, IT Services, Information Technology India, IT Manpower India, IT Manpower Mumbai, Head Hunter Mumbai, Head Hunting India, Head Hunting Companies Mumbai, Head Hunting Companies India, construction crew recruitment from India, outsourcing, Personnel Selection and Recruitment, Executive search in India, Indian recruiter, Total HR solutions, Head hunters in India, Pre-employment check ,HR outsourcing, Contractual staffing, Compensation surveys, Nurses recruiter in India, Physician recruiter in India, Oil and gas personnel from India, marine and shipping recruitment, electromechanical project crew, Due Diligence, Mental aptitude tests, Bio-data Mumbai, best recruiting agency in India, certified recruiter , job consultants India, Indian manpower consultants, Indian job consultants, employment agency, job agency, careers, human resource management, human resource consultants, manpower consulting, manpower consultants India, manpower consultant in India, job consulting firm, placement consultants, hr consultants, recruiting" />	
			</Helmet>
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
		<iframe title="location" src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d3773.0914550864827!2d72.824094!3d18.971567999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!1i0!3e6!4m0!4m5!1s0x3be7ce696f9035c1%3A0xb9cf79cbe36ce90!2sRefac+Enterprises%2C+11%2FA+%2C3%2F9+Haji+moosa+Apartment%2C%2C+YMCA+Club+Back+Road%2CMumbai+Central%2C%2C+Club+Back+Rd%2C+Agripada%2C+Mumbai%2C+Maharashtra+400008!3m2!1d18.971567999999998!2d72.824094!5e0!3m2!1sen!2sin!4v1392652115504"></iframe>
	</div>
        </div>
    );
}


export default Contact;

