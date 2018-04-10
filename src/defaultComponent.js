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
			</div>
		);
	}
}

export default Default;