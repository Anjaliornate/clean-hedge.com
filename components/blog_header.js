import React, { Component } from 'react'

export default class blog_header extends Component {
  render() {
    return (
      <div>
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
								<a href="/"> <img src={`/images/background/Clean-Hedge-logo-black.png`} width="auto" height="45" /></a>
							</div>
						</div>
						<div className="align-self-center ml-auto header-col-mid">
							<ul id="mainmenu" className="scrollnav">
								<li><a href="/" className="active">Home</a></li>
								<li><a href="/">About Us</a></li>
								<li><a href="/">Services</a></li>
								<li><a href="/">Contact Us</a></li>
								<li><a href="">Blogs</a></li>
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
	<a href="#" id="back-to-top"></a>
	<div id="preloader">
		<div className="spinner">
			<div className="bounce1"></div>
			<div className="bounce2"></div>
			<div className="bounce3"></div>
		</div>
	</div>
</div>
      </div>
    )
  }
}
