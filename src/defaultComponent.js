import React, { Component } from 'react';

class Default extends Component {
	render() {
		return (
			<div class = "container-fluid">
				
					<div class = "jumbotron">
						<h1 class = "display-2">Welcome to myKitchen!</h1>
						<p class = "lead">myKitchen is a web application which allows you to search for recipes and use Google Calendar to schedule your meals!</p>
						<a class = "btn btn-primary btn-lg" href = "/search">Get Started!</a>
					</div>				
					
					<div class = "row text-left" id = "infoCol">
						<div class = "col-sm-4">
							<h3>Find Recipes</h3>
							<p>With our simple web scrapper, we avoid recipes with similar ingredients.</p>
							<p>That way you are looking at unique variants of each recipe you view!</p>
						</div>
						<div class = "col-sm-4">
							<h3>Schedule Recipes</h3>
							<p>Intergrated with Google accounts you can schedule recipes you want to make and link it directly with your Google Calender.</p>
							<p>If you live a busy life, then keeping track of what's for dinner can be difficult at times.
							Our scheduler allows you to make these deciscions ahead of time</p>
						</div>
						<div class = "col-sm-4">
							<h3>Save Recipes</h3>        
							<p>Our cookbook feature allows you to save your favorite recipes for a later date.</p> 
						</div>
					</div>				
				

			</div>
			
		);
	}
}

export default Default;