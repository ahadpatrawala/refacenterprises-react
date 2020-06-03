import React from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet'

function Home(){
    return(
        <div>
			<Helmet>
			<title>Refac Enterprises</title>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="Manufacturer of all kinds of refrigeration, air-conditioning systems and customized fabrication works, HVAC Manufacturers Company in Mumbai, HVAC Exporters Company in Mumbai." />
	<meta name="keywords" content="Manufacturer of all kinds of refrigeration, air-conditioning systems and customized fabrication works, HVAC Manufacturers Company in Mumbai, HVAC Exporters Company in Mumbai, refrigerator price, refrigerator online, refrigerator working, refrigeration cycle, refrigeration, refrigeration process, refrigeration manufacturers, refrigeration manufacturers in india, refrigeration manufacturing companies india, refrigeration manufacturing companies, refrigeration manufacturing process, amish refrigeration manufacturing company, bharat refrigeration manufacturing company, rapid refrigeration manufacturing company limited, commercial refrigeration manufacturing companies, commercial refrigeration manufacturing, refrigeration compressor manufacturers, duracold refrigeration mfg company, refrigeration manufacturing company in mumbai, air-conditioner, air-conditioning specialities, air-conditioning system, air-conditioning system design manual, air-conditioning system used in hotels, air conditioning system design, Indian IT recruiter, Human resource consultant, Lifts, Elevators, Escalators, IT Services, Information Technology India, IT Manpower India, IT Manpower Mumbai, Head Hunter Mumbai, Head Hunting India, Head Hunting Companies Mumbai, Head Hunting Companies India, construction crew recruitment from India, outsourcing, Personnel Selection and Recruitment, Executive search in India, Indian recruiter, Total HR solutions, Head hunters in India, Pre-employment check ,HR outsourcing, Contractual staffing, Compensation surveys, Nurses recruiter in India, Physician recruiter in India, Oil and gas personnel from India, marine and shipping recruitment, electromechanical project crew, Due Diligence, Mental aptitude tests, Bio-data Mumbai, best recruiting agency in India, certified recruiter , job consultants India, Indian manpower consultants, Indian job consultants, employment agency, job agency, careers, human resource management, human resource consultants, manpower consulting, manpower consultants India, manpower consultant in India, job consulting firm, placement consultants, hr consultants, recruiting" />
			</Helmet>
			<div className="slider">
			<div className="camera_wrap camera_black_skin" id="camera_wrap_2">
				<div data-src={require("./images/slide-1.jpg")}></div>
				<div data-src={require("./images/slide-2.jpg")}></div>
				<div data-src={require("./images/slide-3.jpg")}></div>
				<div data-src={require("./images/slide-4.jpg")}></div>
				<div data-src={require("./images/slide-5.jpg")}></div>
			</div>
		</div>
            <div className="good">
		<h2>THINGS WE ARE GOOD AT</h2>
		<div className="container">
			<div className="col-md-4 col-sm-4 good-thing1">
				<div className="good-image">
					<img id="Image1" alt="Customized Solution" src={require("./images/good-1.png")} />
                 </div>
				<div className="good-h3">
					<h3>Customized Solution</h3>
				</div>
				<div className="good-p">
					<p>We provide customized solutions</p>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="col-md-4 col-sm-4 good-thing2">
				<div className="good-image">
					<img id="Image2" alt="Manufacturing" src={require("./images/good-2.png")} />
				</div>
				<div className="good-h3">
					<h3>Manufacturing</h3>
				</div>
				<div className="good-p">
					<p>We manufacture top quality units</p>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="col-md-4 col-sm-4 good-thing3">
				<div className="good-image">
					<img id="Image3" alt="After Sales Service" src={require("./images/good-3.png")} />
				</div>
				<div className="good-h3">
					<h3>After Sales Service</h3>
				</div>
				<div className="good-p">
					<p>We provide after sales services</p>
				</div>
				<div className="clearfix"></div>
			</div>
			<div className="clearfix"></div>
		</div>
	</div>

	<div className="portfolio">
		<h3>Our Clients</h3>
        	<div className="team">
		<div className="container">
        <div className="view view-fourth col-md-4 col-sm-4">
            <img id="Image6" src={require("./images/bbq.jpg")} alt="Barbeque Nation" />
                <div className="mask">
                    <h4>Barbeque Nation</h4>
                    <p>Barbeque Nation is one of the leading casual dining chains in India who has pioneered the concept of “over the table barbeque” live grills embedded in dining tables – allowing guests to grill their own barbecue’s right at their tables</p>
                </div>
            </div>
			<div className="view view-fourth col-md-4 col-sm-4">
                <img id="Image4" src={require("./images/parlelogo.jpg")} alt="Parle Industries Pvt Ltd" />
                <div className="mask">
                    <h4>Parle Industries</h4>
                    <p>Parle Products Private Limited is an Indian food products company</p>
                </div>
            </div>
            <div className="view view-fourth col-md-4 col-sm-4">
            <img id="Image5" src={require("./images/tunga.png")} alt="Tunga Hotels" />
                <div className="mask">
                    <h4>Tunga Hotels</h4>
                    <p>The budget hotels in Navi Mumbai and Andheri, Mumbai offering variety of dining experience, comfortable stay, and wide range of amenities to their customers</p>
                </div>
            </div>
        </div>
    </div>
    <h5><Link to="projects#clients">See More</Link></h5>
	</div>
        </div>
    );
}


export default Home;