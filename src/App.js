import React, { Component } from 'react';
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

class App extends Component {
  render() {
    return (
		<div className="App">
			<nav class = "navbar navbar-fixed-top navbar-expand-lg navbar-light bg-dark">
				<div class = "container-fluid">
					<a id = "recipeNavTitle" class = "navbar-brand" href = "/home">myKitchen</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					
					<ul class = "navbar-nav mr-auto mk-navbar">
						<li class = "nav-item"><a href = '/search' id = "navStyle" class = "nav-link">Find Recipes</a></li>
						<li class = "nav-item"><a href = '/schedule' id = "navStyle" class = "nav-link">Schedule</a></li>
					</ul>
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
