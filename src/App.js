import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import Search from './searchComponent';
import Schedule from './scheduleComponent';
import Default from './defaultComponent';
import RecipeView from './recipeView';
import { GoogleLogout, GoogleLogin } from 'react-google-login';
	
class App extends Component {
	constructor(props) {
		super(props);
		this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
		
		this.state = {
			loggedIn: false,
			email: "",
			picUrl: ""
		};
	}
	
	responseGoogleSuccess(response) {
		console.log("Success", response);
		this.setState({loggedIn: true});
		this.setState({email: response.profileObj.email});
		this.setState({picUrl: response.profileObj.imageUrl});
	}
	
	responseGoogleFail(response) {
		console.log("Fail", response);
	}
	
  render() {
    return (
		<div className="App">
			<nav class = "navbar navbar-fixed-top navbar-expand-lg navbar-light bg-dark">
				<div class = "container-fluid">	
				
					<a id = "recipeNavTitle" class = "navbar-brand" href = "/home">myKitchen</a>
					<button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarResponsive"
					aria-controls = "navbarResponsive" aria-expanded = "false" aria-label = "Toggle navigation">
						<span class = "navbar-toggler-icon"></span>
					</button>						
					
					<div class = "collapse navbar-collapse" id = "navbarResponsive">						
						<ul class = "navbar-nav mr-auto mk-navbar">
							<li class = "nav-item"><a href = '/search' id = "navStyle" class = "nav-link">Find Recipes</a></li>
							<li class = "nav-item"><a href = '/schedule' id = "navStyle" class = "nav-link">Schedule</a></li>
						</ul>
						
						{!this.state.loggedIn &&
						<GoogleLogin
							clientId = "122146894892-ouqdfmr7105f55aiim0vg1glrcf0atnk.apps.googleusercontent.com"
							buttonText = "Login"
							onSuccess = {this.responseGoogleSuccess}
							onFailure = {this.responseGoogleFail}
						/>
						}
						
						{this.state.loggedIn &&
						<div>
							<p>Profile Details</p>
							<img src = {this.state.picUrl} id = "pic" class = "img-circle" width = "100" height = "100" />
							<p>Email Address</p>
							<p id = "email" class = "alert alert-danger">{this.state.email}</p>
						</div>
						}
					</div>
				</div>
			</nav>
			
			<Router>
				<div>
					<Route path = "/home" component = {Default}/>
					<Route path = "/search" render = {(props) => <Search val={""}/>}/>
					<Route path = "/schedule" component = {Schedule}/>
					<Route path = "/recipes/:recipeID" component = {RecipeView}/>
				</div>
			</Router>			
		</div>		
    );
  }
}

export default App;
