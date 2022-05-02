
export default function Home() {
  return (
<>   
<div id="wrapper">
   <div class="page-overlay">
      <div class="preloader-wrap">
         <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
         </div>
      </div>
   </div>
   <header class="transparent scroll-light">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <div class="d-flex justify-content-between">
                  <div class="align-self-center header-col-left">
                     <div id="logo">
                        <a href="index.php">
                        <img src={`images/background/Clean-Hedge-logo.png`} alt="me" width="auto" height="64" />
                        </a>
                     </div>
                  </div>
                  <div class="align-self-center ml-auto header-col-mid">
                     <ul id="mainmenu" class="scrollnav">
                        <li><a href="#section-hero" class="active">Home</a></li>
                        <li><a href="#section-about">About</a></li>
                        <li><a href="#section-services">Services</a></li>
                        <li><a href="#section-contact">Contact</a></li>
                        <li></li>
                     </ul>
                  </div>
                  <div class="align-self-center"><span id="menu-btn"></span></div>
                  <div class="clearfix"></div>
               </div>
            </div>
         </div>
      </div>
   </header>
   <div class="no-bottom no-top" id="content">
      <div id="top"></div>
      <section id="section-hero" class="full-height text-light no-padding" data-speed="5" data-type="background">
         <div class="de-video-container">
            <div class="de-video-content">
               <div class="text-center">
                  <div class="container">
                     <div class="row">
                        <div class="col-lg-8 offset-md-2 text-center">
                           <h4 class="id-color">Welcome</h4>
                           <div class="spacer-10"></div>
                        </div>
                        <div class="spacer-30"></div>
                        <div class="col-md-6 offset-md-3 text-center">
                           <p class="h1_big text-white" data-wow-delay=".75s">Accelerating Sustainability</p>
                           <div class="spacer-50"></div>
                           <a class="btn-custom scroll-to wow fadeInUp" data-wow-delay="1s" href="#section-about">About Us</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="de-video-overlay">
            <video autoPlay>
               <source src={`videos/Home_Page_Video.mp4`} type="video/mp4" />
            </video>
            </div>
         </div>
         <a href="#section-about" class="scroll-to">
         <span class="mouse">
         <span class="scroll"></span>
         </span>
         </a>
      </section>
   </div>

   <section id="section-about">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6 mb-sm-30 text-center">
               <div class="de-images">
                  <img clas="di-small-2 wow fadeInLeft" src={`images/background/mountain_1.jpg`} alt="" width="auto" height="64" />
                  <img class="img-fluid wow fadeInRight" src={`images/background/mountain.jpg`} alt="" width="auto" height="64" />
               </div>
            </div>
            <div class="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
               <h2>About Us</h2>
               <p>Clean Hedge is your one-stop solution for all your Sustainable Management needs. We specialize in Nature based policy advocacy, environmental strategy, and carbon offset/capture
                  based portfolio management. We work with businesses to incentivize your green energy investments by offering customized consulting services. With 7 years of experience in Solar Industry, we have a portfolio of 100MW+ Solar Based Projects. 
               </p>
               <div class="spacer-10"></div>
               <span id="btn-show-skills" class="btn-border wow fadeInUp" data-wow-delay="1s">Show My Skills</span>
            </div>
         </div>
         <div id="skills" class="row">
            <div class="spacer-double"></div>
            <div class="spacer-double"></div>
            <div class="col-md-4">
               <div class="skill-bar style-2">
                  <h5>Design</h5>
                  <div class="de-progress">
                     <div class="value"></div>
                     <div class="progress-bar" data-value="80%"></div>
                  </div>
               </div>
               <div class="skill-bar style-2">
                  <h5>Branding</h5>
                  <div class="de-progress">
                     <div class="value"></div>
                     <div class="progress-bar" data-value="70%"></div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="skill-bar style-2">
                  <h5>Marketing</h5>
                  <div class="de-progress">
                     <div class="value"></div>
                     <div class="progress-bar" data-value="70%"></div>
                  </div>
               </div>
               <div class="skill-bar style-2">
                  <h5>Development</h5>
                  <div class="de-progress">
                     <div class="value"></div>
                     <div class="progress-bar" data-value="90%"></div>
                  </div>
               </div>
            </div>
            <div class="col-md-4">
               <div class="skill-bar style-2">
                  <h5>Photography</h5>
                  <div class="de-progress">
                     <div class="value"></div>
                     <div class="progress-bar" data-value="90%"></div>
                  </div>
               </div>
               <div class="skill-bar style-2">
                  <h5>SEO</h5>
                  <div class="de-progress">
                     <div class="value"></div>
                     <div class="progress-bar" data-value="75%"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section id="section-services" data-bgcolor="#F6F7FB">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet" />
      <center>
         <h2>Our Services</h2>
      </center>
      <div class="cards">
         <div class="card">
            <img src={`images/background/02%20png.png`} alt="" />
            <p class="card-desc">
               <b>We manage your portfolio by</b><br/><br/>
               <b>-Facilitating</b> exchange<br/>
               <b>-Identifying</b> potential buyers<br/>
               <b>-Assessing</b> current carbon status<br/>
               <b>-Registering</b> credits on global platforms
            </p>
            <h6 class="card-title">Carbon Credit Portfolio Management</h6>
         </div>
         <div class="card">
            <img src={`images/background/09%20png.png`} alt="" />
            <p class="card-desc">
               <b>As consultants we assist airports with active carbon management which includes</b><br />
               -Mapping<br/>
               -Reduction<br/>
               -Neutrality<br/>
               -Transition<br/>
               -Transformation<br/>
               -Optimization<br/>
            </p>
            <h6 class="card-title">Airport Carbon Accreditation</h6>
         </div>
      </div>
      <div class="cards">
         <div class="card">
            <img src={`images/background/06 png.png`} alt="" />
            <p class="card-desc">
               <b>We develop, implement and audit Carbon offset/capture projects such as</b><br/><br/>
               -Solar/Wind/Hydro Power Plant<br/>
               -Biomass Projects<br/>
               -Nature based solutions<br/>
               -Energy Efficiency Systems
            </p>
            <h6 class="card-title">Carbon Offsetting/Capture Project Development</h6>
         </div>
         <div class="card">
            <img src={`images/background/03 png.png`} alt="" />
            <p class="card-desc">
               <b>Assist planning and auditing projects related to-</b><br/><br/>
               -Zero Waste Discharge<br/>
               -Zero Liquid Discharge<br/>
               -Net Zero Methodology Implementation<br/>
            </p>
            <h6 class="card-title">Net Zero methodology implementation</h6>
         </div>
         <div class="card">
            <img src={`images/background/08 png.png`} alt="" />
            <p class="card-desc">
               <b>We perform LCAs for all relevant products by</b><br/><br/>
               -Defining goal and scope<br/>
               -Life cycle Inventory Analysis<br/>
               -Life cycle Impact Assessment<br/>
            </p>
            <h6 class="card-title">Carbon Credit Portfolio Management</h6>
         </div>
      </div>
   </section>
   <section id="section-contact" class="no-bg">
      <div class="container">
         <div class="row">
            <div class="col-lg-6 offset-lg-3">
               <div class="text-center">
                  <h2>Contact Us</h2>
                  <div class="spacer-30"></div>
               </div>
            </div>
         </div>
         <h1></h1>
      </div>
   </section>
   <div class="row text-center wow fadeInUp">
      <div class="col-md-4">
         <div class="wm-1"></div>
         <i class="icon_mobile id-color size40 mb20"></i>
         <h6 class="id-color">Call Us</h6>
         <p>+91-11-4353-6666</p>
      </div>
      <div class="col-md-4">
         <div class="wm-1"></div>
         <i class="icon_house_alt id-color size40 mb20"></i>
         <h6 class="id-color">Visit Office</h6>
         <p>A-87, Okhla Phase – II New Delhi</p>
      </div>
      <div class="col-md-4">
         <div class="wm-1"></div>
         <i class="icon_mail_alt id-color size40 mb20"></i>
         <h6 class="id-color">Email Us</h6>
         <p>info@clean-hedge.com</p>
      </div>
   </div>
   <div class="spacer-double"></div>
   <footer class="footer">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-md-6 sm-text-center mb-sm-30">
               Copyright 2022 - Clean Hedge
            </div>
            <div class="col-md-6 text-md-right text-sm-left">
               <div class="social-icons">
                  <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                  <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                  <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                  <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                  <a href="#"><i class="fa fa-rss fa-lg"></i></a>
               </div>
            </div>
         </div>
      </div>
   </footer>
   <a href="#" id="back-to-top"></a>
   {/* <div id="preloader">
      <div className="spinner">
         <div className="bounce1"></div>
         <div className="bounce2"></div>
         <div className="bounce3"></div>
      </div>
   </div> */}
</div>

</>
  );
}