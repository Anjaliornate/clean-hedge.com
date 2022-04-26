
export default function Home() {
  return (
    <>
            {/* Header Start */}
            <div id="wrapper"/>
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
                                        <a href="index.php">
                                          <img src={`images/background/Clean-Hedge-logo.png`} alt="me" width="auto" height="64" />
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
            {/* Header Close */}
           
  <div className="no-bottom no-top" id="content">
   <div id="top"></div>
   <section id="section-hero" className="full-height text-light no-padding" data-speed="5" data-type="background">
      <div className="de-video-container">
         <div className="de-video-content">
            <div className="text-center">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-8 offset-md-2 text-center">
                        <h4 className="id-color">Welcome</h4>
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
         <video autoPlay>
         <source src={`videos/Home_Page_Video.mp4`} type="video/mp4" />
         </video>
         
      </div>
      <a href="#section-about" className="scroll-to">
      <span className="mouse">
      <span className="scroll"></span>
      </span>
      </a>
   </section>
</div>




    </>
  );
}