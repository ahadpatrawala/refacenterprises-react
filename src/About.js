import React from 'react';
import {Helmet} from 'react-helmet'

function About(){
    return(
       <div className="about-us">
		   <Helmet>
		   <title>Refac Enterprises | About</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Manufacturer of all kinds of refrigeration, air-conditioning systems and customized fabrication works, HVAC Manufacturers Company in Mumbai, HVAC Exporters Company in Mumbai." />
<meta name="keywords" content="Manufacturer of all kinds of refrigeration, air-conditioning systems and customized fabrication works, HVAC Manufacturers Company in Mumbai, HVAC Exporters Company in Mumbai, refrigerator price, refrigerator online, refrigerator working, refrigeration cycle, refrigeration, refrigeration process, refrigeration manufacturers, refrigeration manufacturers in india, refrigeration manufacturing companies india, refrigeration manufacturing companies, refrigeration manufacturing process, amish refrigeration manufacturing company, bharat refrigeration manufacturing company, rapid refrigeration manufacturing company limited, commercial refrigeration manufacturing companies, commercial refrigeration manufacturing, refrigeration compressor manufacturers, duracold refrigeration mfg company, refrigeration manufacturing company in mumbai, air-conditioner, air-conditioning specialities, air-conditioning system, air-conditioning system design manual, air-conditioning system used in hotels, air conditioning system design, Indian IT recruiter, Human resource consultant, Lifts, Elevators, Escalators, IT Services, Information Technology India, IT Manpower India, IT Manpower Mumbai, Head Hunter Mumbai, Head Hunting India, Head Hunting Companies Mumbai, Head Hunting Companies India, construction crew recruitment from India, outsourcing, Personnel Selection and Recruitment, Executive search in India, Indian recruiter, Total HR solutions, Head hunters in India, Pre-employment check ,HR outsourcing, Contractual staffing, Compensation surveys, Nurses recruiter in India, Physician recruiter in India, Oil and gas personnel from India, marine and shipping recruitment, electromechanical project crew, Due Diligence, Mental aptitude tests, Bio-data Mumbai, best recruiting agency in India, certified recruiter , job consultants India, Indian manpower consultants, Indian job consultants, employment agency, job agency, careers, human resource management, human resource consultants, manpower consulting, manpower consultants India, manpower consultant in India, job consulting firm, placement consultants, hr consultants, recruiting" />
		   </Helmet>
		<div className="container">
			<div className="col-md-6 col-sm-6 about-us-image">
				<img src={require("./images/about-us.jpg")} alt="Refac Enterprises"/>
			</div>
			<div className="col-md-6 col-sm-6 about-us-info">
				<div className="about-us-info-text">
					<h2>About Us</h2>
					<p>Refac Enterprises is a professionally managed company manufacturing all kinds of refrigeration, air-conditioning systems and customized fabrication works. The Company was established in 1998 with a dedicated team for design, installation,commissioning and after sales service.

Since 1998, we have installed air conditioning systems in a wide variety of and commercial environments including ships, pharmaceutical, restaurants, hotels, offices and industrial premises.

This experience means we can accommodate your needs whatever the environment.
Our objective is to provide the best possible combination of value for money, product choice, professional expertise and support for all customers.

We develop our products with complete care and skills to maximize their energy efficiency. Environmental issues such as carbon reduction technology and ease of maintenance which play a major role in all our developments. We assemble our products using the very best materials and most efficient components available for trouble free and maximum longevity of our products, and test them extensively before dispatch.</p>
				</div>
			</div>
		</div>
	</div>
    );
}


export default About;