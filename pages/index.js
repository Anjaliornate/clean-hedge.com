
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
                        <a href="#section-hero">
                        <img src={`images/background/Clean-Hedge-logo-black.png`} alt="me" width="auto" height="45" />
                        </a>
                     </div>
                  </div>
                  <div className="align-self-center ml-auto header-col-mid">
                     <ul id="mainmenu" className="scrollnav">
                        <li><a href="#section-hero" className="active">Home</a></li>
                        <li><a href="#section-about">About</a></li>
                        <li><a href="#section-services">Services</a></li>
                        <li><a href="#section-contact">Contact</a></li>
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
                           <p className="h1_big text-white" data-wow-delay=".75s">Accelerating Sustainability</p>
                           <div className="spacer-50"></div>
                           <a className="btn-custom scroll-to wow fadeInUp" data-wow-delay="1s" href="#section-about">About Us</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="de-video-overlay"></div>
               <video autoPlay loop muted>
                 <source src="videos/Home_Page_Video.mp4" type="video/mp4"/>
               </video>
            
         </div>
         <a href="#section-about" className="scroll-to">
         <span className="mouse">
         <span className="scroll"></span>
         </span>
         </a>
      </section>
   </div>
   <section id="section-about">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-lg-6 mb-sm-30 text-center">
               <div className="de-images">
                  <img className="di-small-2 wow fadeInLeft" src={`images/background/mountain_2.webp`} alt="" width="auto" height="130" />
                  <img className="img-fluid wow fadeInRight" src={`images/background/mountain_1.webp`} alt="" width="auto" height="504" />
               </div>
            </div>
            <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
               <h2>About Us</h2>
               <p className={'txt'}>Clean-Hedge with its expertise in the clean-tech domain provides legal, and economic advocacy to its clients alongside the technical know-how required to fill in with the compliance burden and monetise on the GHG offsetting.</p>
               <p className={'txt'}>Clean-hedge due to its prior industry experience in the renewable energy sector can assist through ESG, CSR and other compliances.</p>
               <p className={'txt'}>Clean-Hedge provides the companys portfolio management service which includes helping in the registration of projects involving carbon offsetting, documentation, evaluation and information about the lucrative market opportunities for carbon trading and investment helping the company upgrade technologically and achieve the net-zero carbon emissions.</p>
               <div className="spacer-10"></div>
            </div>
         </div>
      </div>
   </section>
   <section id="section-services" data-bgcolor="#F6F7FB">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet" />
      <center>
         <h2>Our Services</h2>
      </center>
      <div className="cards">
         <div className="card">
            <img src={`images/background/02%20png.png`} alt="" />
            <p className="card-desc">
               <b>We manage your portfolio by</b><br/><br/>
               <b>-Facilitating</b> exchange<br/>
               <b>-Identifying</b> potential buyers<br/>
               <b>-Assessing</b> current carbon status<br/>
               <b>-Registering</b> credits on global platforms
            </p>
            <h6 className="card-title">Carbon Credit Portfolio Management</h6>
         </div>
         <div className="card">
            <img src={`images/background/09%20png.png`} alt="" />
            <p className="card-desc">
               <b>As consultants we assist airports with active carbon management which includes</b><br />
               -Mapping<br/>
               -Reduction<br/>
               -Neutrality<br/>
               -Transition<br/>
               -Transformation<br/>
               -Optimization<br/>
            </p>
            <h6 className="card-title">Airport Carbon Accreditation</h6>
         </div>
      </div>
      <div className="cards">
         <div className="card">
            <img src={`images/background/06 png.png`} alt="" />
            <p className="card-desc">
               <b>We develop, implement and audit Carbon offset/capture projects such as</b><br/><br/>
               -Solar/Wind/Hydro Power Plant<br/>
               -Biomass Projects<br/>
               -Nature based solutions<br/>
               -Energy Efficiency Systems
            </p>
            <h6 className="card-title">Carbon Offsetting/Capture Project Development</h6>
         </div>
         <div className="card">
            <img src={`images/background/03 png.png`} alt="" />
            <p className="card-desc">
               <b>Assist planning and auditing projects related to-</b><br/><br/>
               -Zero Waste Discharge<br/>
               -Zero Liquid Discharge<br/>
               -Net Zero Methodology Implementation<br/>
            </p>
            <h6 className="card-title">Net Zero methodology implementation</h6>
         </div>
         <div className="card">
            <img src={`images/background/08 png.png`} alt="" />
            <p className="card-desc">
               <b>We perform LCAs for all relevant products by</b><br/><br/>
               -Defining goal and scope<br/>
               -Life cycle Inventory Analysis<br/>
               -Life cycle Impact Assessment<br/>
            </p>
            <h6 className="card-title">Carbon Credit Portfolio Management</h6>
         </div>
      </div>
   </section>
   <section id="section-contact" className="no-bg">
      <div className="container">
         <div className="row">
            <div className="col-lg-6 offset-lg-3" >
               <div className="text-center" >
                  <h2>Contact Us</h2>
                  <div className="spacer-30" ></div>
               </div>
            </div>
         </div>
         <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm-6">
            <form name="contactForm" id="contact_form" className="row form-default" method="POST" action="https://formspree.io/f/xknykavd">
            <div className="col-md-12" >
               <div className="field-set" >
                  <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" />
                  <div className="line-fx" ></div>
               </div>
               <div className="field-set" >
                  <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" />
                  <div className="line-fx" ></div>
               </div>
               <div className="field-set" >
                  <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" />
                  <div className="line-fx" ></div>
               </div>
            </div>
            <div className="col-md-12" >
               <div className="field-set" >
                  <textarea name="message" id="message" className="form-control" placeholder="Your Message"></textarea>
                  <div className="line-fx" ></div>
               </div>
            </div>
            <div className="spacer-single"></div>
            <div className="col-md-12 text-center">
            <input type="submit" className="btn btn-custom color-2" />
               <div id="mail_success" className="success" >Your message has been sent successfully.</div>
               <div id="mail_fail" className="error" >Sorry, error occured this time sending your message.</div>
            </div>
         </form>
            </div>
        </div>
    </div>
         <div className="spacer-double" ></div>
         <div className="row text-center wow fadeInUp animated" >
            <div className="col-md-4" >
               <div className="wm-1" ></div>
               <i className="icon_mobile id-color size40 mb20"></i>
               <h6 className="id-color">Call Us</h6>
               <p>+91-11-4353-6666</p>
            </div>
            <div className="col-md-4" >
               <div className="wm-1" ></div>
               <i className="icon_house_alt id-color size40 mb20"></i>
               <h6 className="id-color">Visit Office</h6>
               <p>A-87, Okhla Phase – II New Delhi</p>
            </div>
            <div className="col-md-4" >
               <div className="wm-1" ></div>
               <i className="icon_mail_alt id-color size40 mb20"></i>
               <h6 className="id-color">Email Us</h6>
               <p>info@clean-hedge.com</p>
            </div>
         </div>
      </div>
   </section>
   <div className="spacer-double"></div>
   <footer className="footer">
      <div className="container">
         <div className="row align-items-center">
            <div className="col-md-6 sm-text-center mb-sm-30">
               Copyright 2022 - Clean Hedge
            </div>
            <div className="col-md-6 text-md-right text-sm-left">
               <div className="social-icons">
                  <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                  <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                  <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
                  <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                  <a href="#"><i className="fa fa-rss fa-lg"></i></a>
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