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
			<a href="#section-about" className="scroll-to"> <span className="mouse">
         <span className="scroll"></span> </span>
			</a>
		</section>
	</div>

{/* One Stop Solution Section Start*/}
<section id="section-about" data-bgcolor="White">
  <div className="container">
    <div className="v-center">
      <h2>One Stop Solution for <span className="id-color"> All Your Sustainability Needs</span>
      </h2>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6 mb-sm-30 text-center">
        <div className="de-images">
          <img className="di-small-2 wow fadeInLeft" src={`images/background/mountain_2.webp`} alt="" width="auto" height="130" />
          <img className="img-fluid wow fadeInRight" src={`images/background/mountain_1.webp`} alt="" width="auto" height="504" />
        </div>
      </div>
      <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
        <p className={ 'txt' }>The world is facing a planet-sized carbon problem. But while reducing our carbon footprint is the need of the hour, we understand that immediate reduction in emissions isn’t always feasible.</p>
        <p className={ 'txt' }>Building carbon efficiency is a complex, time-consuming process, that CleanHedge can streamline for you.</p>
        <p className={ 'txt' }>We develop and implement sustainable projects that reduce, remove or avoid carbon dioxide emissions. From solar, wind, and biogas projects to community-led fuel saving initiatives, we devise ventures that have a measurable impact on the environment.</p>
        <p className={ 'txt' }>In doing so, we generate carbon credits to offset your carbon footprint.</p>
        <div className="spacer-10"></div>
      </div>
    </div>
  </div>
</section>
{/* One Stop Solution Section End*/}


{/* What are Carbon Credits Section Start*/}
<section id="section-about" data-bgcolor="#f3f4f4">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 offset-md-0 wow fadeInLeft" data-wow-delay=".5s">
        <h2>What are <span className="id-color"> Carbon Credits?</span>
        </h2>
        <p className={ 'txt' }>Carbon credits are permits to release a certain amount of carbon dioxide or any other greenhouse gas into the atmosphere. They represent an equal amount of C02 that has been reduced or eliminated from the environment through sustainable projects.</p>
        <p className={ 'txt' }>One credit is equivalent to 1 tonne of CO2.</p>
        <p className={ 'txt' }>These tradable units are not chained by geographical boundaries. This means an organization that cannot directly take steps towards sustainability, can invest in green projects across the world to still keep its net-zero commitment.</p>
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


{/* What do We Offer Section Start*/}
<section id="section-services" data-bgcolor="White">
  <link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet" />
  <center>
    <h2>What do <span className="id-color"> We Offer?</span>
    </h2>
  </center>
  <div className="cards">
    <div className="card">
      <img src={`images/background/CO2.webp.png`} alt="" />
      {/* <p className="card-desc"></p> */}
      <h6 className="card-title">Carbon<br/>Offset Projects</h6>
    </div>
    <div className="card">
      <img src={`images/background/02%20png.png`} alt="" />
      {/* <p className="card-desc"></p> */}
      <h6 className="card-title">Carbon Credit Registration <br /> and Trading Services for Existing Projects </h6>
    </div>
    <div className="card">
      <img src={`images/background/Energy.png`} alt="" />
      {/* <p className="card-desc"></p> */}
      <h6 className="card-title">Energy<br/>Efficiency Solutions</h6>
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
						<div className="service-three__single-circle"></div><center><img src={`images/background/Variety.webp`} class="img-size" alt="" /></center></div>
						<center><h5>Variety!</h5></center>
					<p className={ 'txtj'}>We can implement a diverse portfolio of nature and community-based projects across multiple sectors to widen your impact.</p>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="service-three__single wow flipInY" data-wow-delay="0ms" data-wow-duration="1500ms">
					<div className="service-three__icon">
						<div className="service-three__single-circle"></div><center><img src={`images/background/personalized.webp`} class="img-size" alt="" /></center></div>
						<center><h5>Personalized</h5></center>
					<p className={ 'txtj'}>CleanHedge recommends projects that match your requirements and check all the right boxes for your company.</p>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="service-three__single wow flipInY" data-wow-delay="600ms" data-wow-duration="1500ms">
					<div className="service-three__icon">
						<div className="service-three__single-circle"></div><center><img src={`images/background/monitoring.webp`} class="img-size" alt="" /></center></div>
						<center><h5>Transparent</h5></center>
					<p className={ 'txtj'}>We ensure complete transparency in our operations, so you know that your money is making an actual impact.</p>
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
				<div className="col-md-6 sm-text-center mb-sm-30"> Copyright 2022 - Clean Hedge </div>
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