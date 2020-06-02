import React from 'react';

function About(){
    return(
            <div className="about-us">
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