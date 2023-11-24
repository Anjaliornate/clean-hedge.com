export default function Home() {
	return (
  <> 
  <div id="wrapper">
	  <div className="page-overlay">
		  <div className="preloader-wrap">
			  <div className="spinner">
				  <div className="bounce1"></div>
				  <div className="bounce2"></div>
				  <div className="bounce3"></div>
			  </div>
		  </div>
	  </div>
	  <header className="transparent scroll-light">
		  <div className="container">
			  <div className="row">
				  <div className="col-md-12">
					  <div className="d-flex justify-content-between">
						  <div className="align-self-center header-col-left">
							  <div id="logo">
								  <a href=""> <img src={`images/background/Clean-Hedge-logo-black.png`} alt="me" width="auto" height="45" /> </a>
							  </div>
						  </div>
						  <div className="align-self-center ml-auto header-col-mid">
							  <ul id="mainmenu" className="scrollnav">
								  <li><a href="#section-hero" className="active">Home</a></li>
								  <li><a href="#section-about">About Us</a></li>
								  <li><a href="#section-services">Services</a></li>
								  <li><a href="#section-contact">Contact Us</a></li>
								  <li><a href="/open">Green Open Acess</a></li>
								  <li><a href="/blogs">Blogs</a></li>
  
								  <li></li>
							  </ul>
						  </div>
						  <div className="align-self-center"><span id="menu-btn"></span></div>
						  <div className="clearfix"></div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </header>
	  <div className="no-bottom no-top" id="content">
		  <div id="top"></div>
		  <section id="section-hero" className="full-height text-light no-padding" data-speed="5" data-type="background">
			  <div className="de-video-container">
				  <div className="de-video-content">
					  <div className="text-center">
						  <div className="container">
							  <div className="row">
								  <div className="col-lg-8 offset-md-2 text-center">
									  <div className="spacer-10"></div>
								  </div>
								  <div className="spacer-30"></div>
								  <div className="col-md-6 offset-md-3 text-center">
									  <p className="h1_big text-white" data-wow-delay=".75s">You Can Make a<br/>Difference.</p>
									  <div className="spacer-50"></div> <a className="btn-custom scroll-to wow fadeInUp" data-wow-delay="1s" href="#section-about">About Us</a> </div>
							  </div>
						  </div>
					  </div>
				  </div>
				  <div className="de-video-overlay"></div>
				  <video autoPlay loop muted>
					  <source src="videos/Home_Page_Video.mp4" type="video/mp4" /> </video>
			  </div>
			  <a href="#section-about " className="scroll-to"> <span className="mouse">
		   <span className="scroll"></span> </span>
			  </a>
		  </section>
	  </div>
  
  {/* One Stop Solution Section Start*/}
  <section id="section-about" data-bgcolor="White">
	<div className="container">
	  <div className="v-center">
		<h2> Solution for <span className="id-color">  Sustainability </span>
		</h2>
	  </div>
	  <div className="row align-items-center">
		<div className="col-lg-6 mb-sm-30 text-center">
		  <div className="de-images">
			<img className="di-small-2 wow fadeInLeft" src={`images/new/4.jpeg`} alt="" width="auto" height="130" />
			<img className="img-fluid wow fadeInRight" src={`images/new/2.jpeg`} alt="" width="auto" height="304" />
		  </div>
		</div>
		<div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
		  <p className={ 'txt' }>The world is facing a planet-sized carbon problem. But while reducing our carbon footprint is the need of the hour, we understand that immediate reduction in emissions isn’t always feasible.</p><br></br>
		  <p className={ 'txt' }>Building carbon efficiency is a complex, time-consuming process. CleanHedge aims to provide practical solutions for the transition. </p>
		  <p className={ 'txt' }>We develop and implement renewable energy projects that reduce, remove or avoid carbon dioxide emissions and have a measurable impact on the environment.</p>
		  <div className="spacer-10"></div>
		</div>
	  </div>
	</div>
  
	
  </section>
  {/* One Stop Solution Section End*/}
  
  {/* Open Access Solar Energy  Section Start*/}
  <section className="service-three" data-bgcolor="#f3f4f4">
  
		  
	  <div className="container">
		  <div className="block-title text-center">
		  <a href="#section-contact " className="scroll-to"> <span className="mouse">
		   <span className="scroll"></span> </span> </a>
			  <center>
				  <h2>Open Access  <span className="id-color"> Solar Energy</span></h2> </center>
				  <p className={ 'txtj'}>CleanHedge offers a simple and effective solution to reduce your energy expenses and lower your scope 2 emissions. We achieve this by providing cheaper and cleaner electricity through open-access projects.
   
   The power we produce at our solar parks is transferred directly to your facility through the grid. You buy this energy at a lower tariff than the standard grid tariff, thereby lowering your costs in a competitive market while transitioning to a Net Zero complain
   </p>
			  <div className="spacer-50"></div>
		  </div>
		  <div className="row high-gutters"> 
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/new/Electricity.png`} className="img-size" alt="" /></center></div>
						  <center><h5>High Electricity Savings</h5></center>
					  <p className={ 'txtj'}></p>
				  </div>
			  </div>
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/new/Reduced Carbon.png`} className="img-size" alt="" /></center></div>
						  <center><h5>Reduced Carbon Footprint</h5></center>
					  <p className={ 'txtj'}></p>
				  </div>
			  </div>
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/new/improve.png`} className="img-size" alt="" /></center></div>
						  <center><h5>Improved ESG Rating</h5></center>
					  <p className={ 'txtj'}></p>
				  </div>
			  </div>
  
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/new/No risk.png`} className="img-size" alt="" /></center></div>
						  <center><h5>Low Risk</h5></center>
					  <p className={ 'txtj'}></p>
				  </div>
				  </div>
  
				  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/new/no osm.png`} className="img-size" alt="" /></center></div>
						  <center><h5>No O&M Responsibility</h5></center>
					  <p className={ 'txtj'}></p>
				  </div>
				  </div>
		  </div>
	  </div>
  </section>
  {/* Solar Energy Section End */}
  
  
  {/* What are Carbon Credits Section Start*/}
  <section id="section-about" data-bgcolor="#fff">
	<div className="container">
	  <div className="row align-items-center">
		<div className="col-lg-5 offset-md-0 wow fadeInLeft" data-wow-delay=".5s">
		  <h2>What is  <span className="id-color"> Open Access</span>
		  </h2>
		  <p className={ 'txt' }>Open Access empowers commercial and industrial consumers like you, to reduce your dependency on the local DISCOM and buy electricity directly from producers in the open market. </p>
		  <p className={ 'txt' }>By entering into a Power Purchase Agreement (PPA) with us for a specified duration, you can rely on our expertise to handle renewable energy farms and power your business with sustainable energy. </p>
		  <p className={ 'txt' }>In India, consumers with a sanctioned load of min.1 MW can buy power through open access. However, Green Energy Policy discussions indicate off-takers with a minimum load of 100 kW will be able to utilize the open access mechanism. </p>
		  <div className="spacer-10"></div>
		</div>
		<div className="col-lg-6 offset-md-1 mb-sm-30 text-center">
		  <div className="de-images">
			<img className="img-fluid wow fadeInRight" src={`images/background/Carbon_Credits.webp`} alt="" width="auto" height="504" />
		  </div>
		</div>
	  </div>
	</div>
  </section>
  {/* What are Carbon Credits Section End*/}
  
  {/* Carbon Credit Services Section Start*/}
  <section id="section-about" data-bgcolor="#f3f4f4">
	<div className="container">
	  <div className="v-center">
		<h2> Carbon Credit  <span className="id-color"> Services </span>
		</h2>
	  </div>
	  <div className="row align-items-center">
		<div className="col-lg-6 offset-md-0 wow fadeInLeft" data-wow-delay=".5s">
		<h3> · Decarbonisation Projects:  <span className="id-color"></span></h3>
		  <p className={ 'txt' }>Using our expertise in solar energy and lithium batteries, <br></br>CleanHedge develops carbon-efficient projects for rural areas <br></br>and the agricultural sector to reduce or cut fossil-fuel consumption. </p>
		 
		</div>
  
		 <div className="col-lg-6 offset-md-0 wow fadeInLeft" data-wow-delay=".5s">
		 <h3> · Carbon Offsets: <span className="id-color"></span>
		</h3>
		  <p className={ 'txt' }>In line with international policies, we generate and provide <br></br>carbon offsets or RECs through our projects and partners. </p>
		  
		  <div className="spacer-10"></div>
		</div>
	  
		
  
		 <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
		  <div className="spacer-10"></div>
		</div>
	  </div>
	</div>
  </section>
  {/* Carbon Credit Services Section End*/}
  
  
  
  
  {/* What do We Offer Section Start*/}
  <section id="section-services" data-bgcolor="White">
	<link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet" />
	<center>
	  <h2>What do <span className="id-color"> We Offer?</span>
	  </h2>
	</center>
	<div className="cards">
	  <div className="card">
		<img src={`images/new/Rooftop.png`} alt="" />
		{/* <p className="card-desc"></p> */}
		<h6 className="card-title">Rooftop Solar Installations<br/></h6>
	  </div>
	  <div className="card">
		<img src={`images/new/open Acess.png`} alt="" />
		{/* <p className="card-desc"></p> */}
		<h6 className="card-title">Open Access Solar Projects <br />  </h6>
	  </div>
	  <div className="card">
		<img src={`images/new/carbon capture.png`} alt="" />
		{/* <p className="card-desc"></p> */}
		<h6 className="card-title">Carbon Capture Project Development<br/></h6>
	  </div>
	  <div className="card">
		<img src={`images/new/net zero.png`} alt="" />
		{/* <p className="card-desc"></p> */}
		<h6 className="card-title">Net Zero Policy Implementation<br/></h6>
	  </div>
	  <div className="card">
		<img src={`images/new/Sustanilibity .png`} alt="" />
		{/* <p className="card-desc"></p> */}
		<h6 className="card-title">Sustainability Certification Advisory<br/></h6>
	  </div>
	</div>
  </section>
  {/* What do We Offer Section End*/}
  
  
  {/* Why Choose CleanHedge Section Start*/}
  <section className="service-three" data-bgcolor="#f3f4f4">
	  <div className="container">
		  <div className="block-title text-center">
			  <center>
				  <h2>Why Choose<span className="id-color"> CleanHedge?</span></h2> </center>
			  <div className="spacer-50"></div>
		  </div>
		  <div className="row high-gutters">
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="300ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/background/Variety.webp`} className="img-size" alt="" /></center></div>
						  <center><h5>Variety!</h5></center>
					  <p className={ 'txtj'}>We can implement a diverse portfolio of nature and community-based projects across multiple sectors to widen your impact.</p>
				  </div>
			  </div>
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={`images/background/monitoring.webp`} className="img-size" alt="" /></center></div>
						  <center><h5>Transparent</h5></center>
					  <p className={ 'txtj'}>We make sure everything we do is open, guide you through each step, and provide regular updates and reports so you always know how your money is making a difference. </p>
				  </div>
			  </div>
			  <div className="col-lg-4">
				  <div className="service-three__single wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
					  <div className="service-three__icon">
						  <div className="service-three__single-circle"></div><center><img src={` images/background/personalized.webp`} className="img-size" alt="" /></center></div>
						  <center><h5>Expertise</h5></center>
					  <p className={ 'txtj'}>With more than ten years of experience in the clean tech industry, we ensure that the highest quality standards are maintained for each project. </p>
				  </div>
			  </div>
		  </div>
	  </div>
  </section>
  
  
  {/* Why Choose CleanHedge Section End */}
  
	  <section id="section-contact" data-bgcolor="#ffffff">
		  <div className="container">
			  <div className="row">
				  <div className="col-lg-6 offset-lg-3">
					  <div className="text-center">
						  <h2>Contact<span className="id-color"> Us</span></h2>
						  <p>To Know More</p>
						  <div className="spacer-30"></div>
					  </div>
				  </div>
			  </div>
			  <div className="container">
				  <div className="row justify-content-center">
					  <div className="col-sm-6">
						  <form name="contactForm" id="contact_form" className="row form-default" method="POST" action="https://formspree.io/f/xknykavd">
							  <div className="col-md-12">
								  <div className="field-set">
									  <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
									  <div className="line-fx"></div>
								  </div>
								  <div className="field-set">
									  <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" />
									  <div className="line-fx"></div>
								  </div>
								  <div className="field-set">
									  <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
									  <div className="line-fx"></div>
								  </div>
							  </div>
							  <div className="col-md-12">
								  <div className="field-set">
									  <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
									  <div className="line-fx"></div>
								  </div>
							  </div>
							  <div className="spacer-single"></div>
							  <div className="col-md-12 text-center">
								  <input type="submit" className="btn btn-custom color-2" />
								  <div id="mail_success" className="success">Your message has been sent successfully.</div>
								  <div id="mail_fail" className="error">Sorry, error occured this time sending your message.</div>
							  </div>
						  </form>
					  </div>
				  </div>
			  </div>
			  <div className="spacer-double"></div>
			  <div className="row text-center wow fadeInUp animated">
				  <div className="col-md-4">
					  <div className="wm-1"></div> <i className="icon_mobile id-color size40 mb20"></i>
					  <h6 className="id-color">Call Us</h6>
					  <p>+91-11-4353-6666</p>
				  </div>
				  <div className="col-md-4">
					  <div className="wm-1"></div> <i className="icon_house_alt id-color size40 mb20"></i>
					  <h6 className="id-color">Visit Office</h6>
					  <p>A-87, Okhla Phase – II New Delhi</p>
				  </div>
				  <div className="col-md-4">
					  <div className="wm-1"></div> <i className="icon_mail_alt id-color size40 mb20"></i>
					  <h6 className="id-color">Email Us</h6>
					  <p>info@clean-hedge.com</p>
				  </div>
			  </div>
		  </div>
	  </section>
	  <footer className="footer">
		  <div className="container">
			  <div className="row align-items-center">
				  <div className="col-md-6 sm-text-center mb-sm-30"> Copyright 2022 - Clean Hedge</div>
				  <div className="col-md-6 text-md-right text-sm-left">
					  <div className="social-icons">
					<a href="#"><i className="fa fa-facebook fa-lg"></i></a>
					<a href="#"><i className="fa fa-linkedin fa-lg"></i></a> 
				 </div>
				  </div>
			  </div>
		  </div>
	  </footer>
	  <a href="#" id="back-to-top"></a>
	  <div id="preloader">
		  <div className="spinner">
			  <div className="bounce1"></div>
			  <div className="bounce2"></div>
			  <div className="bounce3"></div>
		  </div>
	  </div>
  </div>
  </>
	);
  }