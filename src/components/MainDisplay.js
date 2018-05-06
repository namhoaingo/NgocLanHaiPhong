import React, { Component } from 'react';
import { connect } from 'react-redux'; //To connect to our store
import '../styles/MainDisplay.css';

class MainDisplay extends Component{

	render(){
		return(			
				<div className="header-video">
						<video className="splash-video" loop="" preload="auto" autoPlay muted="">
							<source src="/resources/videos/708213662.mp4" type="video/mp4"/>  							
								Your browser does not support HTML5 video.
					</video>
				</div>					
			)
	}
}

export default MainDisplay;

