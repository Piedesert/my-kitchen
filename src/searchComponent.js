import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class Search extends Component {
	constructor(props) {
		super(props);
		this.handleChangedVal = this.handleChangedVal.bind(this);
		this.queryOnVal = this.queryOnVal.bind(this);
		
		this.state = {
			jsonData: [],
			val: "",
			tempVal: ""
		};
	}
	
	APICall(searchTerm) {
		var url = "http://api.yummly.com/v1/api/recipes?_app_id=8d990d13&_app_key=789412b4b38a601734f3cad842e07082&q="+(searchTerm);
		let thisComponent = this;
		
		fetch (url)
			.then(response => response.json())
			.then(data => {
				thisComponent.setState({jsonData: data.matches})
				console.log('Json pulled', data.matches);
			})
			.catch(ex => {
				console.log('parsing failed', ex)
			});
	}
	
	/*secondsToApproxMinutes(seconds) {
		var minutes = Math.floor(seconds / 60);
	}*/
	
	handleChangedVal(e) {
		this.setState({tempVal: e.target.value});
	}
	
	queryOnVal() {
		var searchValue = this.state.tempVal;
		this.setState({val: searchValue});
		this.APICall(searchValue);
	}
	
	render() {
		return (
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-3"></div>
					<div className = "col-6">
						<br/>
						<div className = "input-group input-group-lg">
							<input type = "text" className = "form-control" value = {this.state.tempVal} onChange = {this.handleChangedVal}/>
							<div className = "input-group-append">
								<button className = "btn btn-outline-secondary" type = "button" onClick={this.queryOnVal}>Search</button>
							</div>
						</div>
					</div>
					<div className = "col-3"></div>
				</div>
				
				<br/>
				
				{this.state.val != "" && 
					<h6 className = "display-4">Results for "{this.state.val}"</h6>
				}
				
				{this.state.val != "" && this.state.jsonData.map((entry, i)=>
					<div class = "queryDiv row" id = "result">
						<div class = "col-md-1">
							<img class = "resultImg" src = {entry.smallImageUrls[0]}/>
						</div>
						<div class = "col-md-11">
							<Link to = {"/recipes/" + entry.id} params = {{recipeID: entry.id}}><h3>{entry.recipeName} 
							&nbsp;({entry.rating} <span class="glyphicon glyphicon-star"></span>)</h3></Link>
							<h4>
								Cooking Time: {entry.totalTimeInSeconds}s <br/>
								Ingredients: {entry.ingredients.map((ingredient, i) => 
									<span key = {i}>{ingredient} </span>
								)}
							</h4>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Search;