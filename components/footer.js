import React, {Component} from 'react';

class footer extends Component {
    render() {
        return (
            <>
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
            </>
            );
        }
    }
    
    export default footer