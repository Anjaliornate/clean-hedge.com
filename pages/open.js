import Blog_header from "../components/blog_header";
import Footer from "../components/footer";
import '../styles/Home.module.css';
import React from 'react';

export default function open({ data }) {
    console.log(data)
    return (
        <>
            <div>
                <Blog_header />
                <div id="loader-area">
                    <div className="container">
                        <div className="project-load"></div>
                    </div>
                </div>
                <section id="section-blog" className="text-light" data-bgcolor="#f5f5f5" style={{ paddingTop: "0%" }}>
                    <div className="container">
                        <div className="row">


                            <img className="img-fluid wow fadeInRight" src={`images/new/open.jpeg`} alt="" width="1500px" height="0" />
                            <div className="col-lg-6 offset-lg-3">






                            </div>
                            <div className="row">
                                {/* Open Access Solar Energy  Section Start*/}
                                <section className="service-three" data-bgcolor="#f3f4f4">


                                    <div className="container">
                                        <div className="block-title text-center">
                                            <a href="#section-contact " className="scroll-to"> <span className="mouse">
                                                <span className="scroll"></span> </span> </a>
                                            <center>
                                                <h2>An Effective Way to Reduce Costs and  <span className="id-color"> Carbon Footprint </span></h2> </center>
                                            <p className={'txtj'}>Green Open Access allows consumers to cut down their energy costs and emissions by directly procuring renewable energy from producers in the open market. <br></br>

                                                It&apos;s an efficient way for businesses to transition to net zero without investing time or capital in the installation/ maintenance of a RE plant.<br></br>

                                                <br></br>In a bid to promote green energy in the nation, the Indian government has made the green energy open access regulations particularly favourable for commercial and industrial consumers.

                                                In many states, a consumer with a sanctioned load of 100kW or more can source their electricity from green sources such as solar, wind, hydro, etc. Moreover, as per new norms, the government will also provide green certificates to such consumers<br></br>

                                            </p>
                                        </div>
                                    </div>
                                </section>
                                {/* Solar Energy Section End */}

                                {/* One Stop Solution Section Start*/}
                                <section id="section-about" data-bgcolor="White">
                                    <div className="container">
                                        <div className="v-center">
                                            <h2> MERC Updates Green Open Access  <span className="id-color">  Rules </span>
                                            </h2>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-6 mb-sm-30 text-center">
                                                <div className="de-images">
                                                    <img className="di-small-2 wow fadeInLeft" src={`images/new/13.jpg`} alt="" width="auto" height="130" />
                                                    <img className="img-fluid wow fadeInRight" src={`images/new/11.jpeg`} alt="" width="auto" height="304" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5 offset-md-1 wow fadeInLeft" data-wow-delay=".5s">
                                                <p className={'txt'}>Maharashtra has now made it simpler for commercial and industrial consumers to get cheaper and greener electricity.

                                                    The Maharashtra Electricity Regulatory Commission MERC recently updated its Green Open Access policy as per the Green Open Access policy introduced by the Ministry of Power.
                                                </p><br></br>
                                                <p className={'txt'}>The most notable change was the 10x reduction in the minimum load requirement:<br></br>

                                                    •	Businesses with a sanctioned load of 100kW or more can purchase renewable energy from the open market.<br></br>&nbsp;&nbsp;&nbsp;&nbsp;
                                                   <br></br> •	  ()Businesses with multiple connections within the same area, totaling 100kW or more, can also benefit from the policy.<br></br>
                                                </p><br></br>
                                                <p className={'txt'}>Captive consumers can access as much power as they need without encountering constraints. Furthermore, MERC has enabled individuals with rooftop solar installations to simultaneously procure energy from the green open-access market.

                                                    The Maharashtra State Load Dispatch Centre and Maharashtra State Transmission Utility will act as the nodal agencies for the initiative.
                                                </p>
                                                <div className="spacer-10"></div>
                                                <a className="btn" href="https://blog.clean-hedge.com/wp-content/uploads/2023/11/MERC-adopts-Green-Energy-Open-Access.pdf">
                                                    <span className="btn-custom">Know More</span>
                                                </a>



                                            </div>
                                        </div>
                                    </div>
                                </section></div>

                            {/* One Stop Solution Section End*/}

                            {/* Open Access Solar Energy  Section Start*/}
                            <section className="service-three" data-bgcolor="#f3f4f4">


                                <div className="container">
                                    <div className="block-title text-center">
                                        <a href="#section-contact " className="scroll-to"> <span className="mouse">
                                            <span className="scroll"></span> </span> </a>

                                        <h4>If you are seeking a way to benefit from India’s open access policy and meet your net-zero objectives, we can assist you! CleanHedge operates a specialized renewable energy plant exclusively for green energy open access.<br></br>

                                            <br></br>Connect with us for more details and, let us help you navigate this process effortlessly.


                                        </h4>
                                    </div>
                                </div>
                            </section>
                            {/* Solar Energy Section End */}

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
                                
                        </div>
                    </div>
                </section>
                <Footer>

                </Footer>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const getPosts = await fetch('https://blog.clean-hedge.com/wp-json/wp/v2/posts?_embed');
    const data = await getPosts.json();
    return { props: { data } }

}

