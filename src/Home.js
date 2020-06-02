import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
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
					<img id="Image1" src={require("./images/good-1.png")} />
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
					<img id="Image2" src={require("./images/good-2.png")} />
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
					<img id="Image3" src={require("./images/good-3.png")} />
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