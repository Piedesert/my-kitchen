import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

class RecipeView extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			recipe: this.props.match.params.recipeID,
			jsonData: [],
			componentMounted: false
		};
	}
	
	componentDidMount() {
		var url = "http://api.yummly.com/v1/api/recipe/" + this.state.recipe + "?_app_id=8d990d13&_app_key=789412b4b38a601734f3cad842e07082";
		let thisComponent = this;
		
		fetch (url)
			.then(response => response.json())
			.then(data => {
				thisComponent.setState({jsonData: data});
				console.log('json data', data);
				thisComponent.setState({componentMounted: true});
			})
			.catch(ex => {
				console.log('parsing failed', ex)
			});
	}
	
	//<img src = {this.state.jsonData.images[0].hostedLargeUrl}/>
	
	render() {
		if (this.state.componentMounted) {
			var starString = "";
			
			for (var i = 0; i < this.state.jsonData.rating; i++) {
				starString = starString + "*";
				
				if (i != this.state.jsonData.rating - 1) {
					starString = starString + " ";
				}
			}
			
			return (
				<div>
					<div class = "row recipe">
						<div class = "col-4">
							<br/>
							<h1 class = "text-warning my-0">{starString}</h1>
							<img class = "resultImg" src = {this.state.jsonData.images["0"].hostedLargeUrl}/>
							<h1>{this.state.jsonData.name}</h1>
							<p>Source: <a href = {this.state.jsonData.source.sourceRecipeUrl}>{this.state.jsonData.source.sourceDisplayName}</a></p>
							<br/>
								<Link to = {"/schedule/" + this.state.recipe} params = {{recipeID: this.state.recipe}}>
									Add Meal to your Schedule!
								</Link>
						</div>
						
						<div class = "col-8">
							<br/>
							<div class = "row">
								<div class = "col-5 text-left">
									<h3 class = "text-primary">Ingredients</h3>
									{this.state.jsonData.ingredientLines.map((entry, i) =>
										<h4>{entry}</h4>
									)}
									<br/>
									<h3 class = "text-primary">Information</h3>
									<h4>Preperation and cooking time: {this.state.jsonData.totalTime}</h4>
									<h4>Yield: {this.state.jsonData.yield}</h4>
								</div>
								<div class = "col-3 text-center">
									<h3 class = "text-primary">More data will be available here</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default RecipeView;