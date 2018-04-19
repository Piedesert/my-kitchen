import React, { Component } from 'react';

class Schedule extends Component {
	render() {
		return (
			<div className = "container-fluid">
				<div class = "row">
					<div class = "col-6">
						<p>Google Calendar lies here.</p>
					</div>
					<div class = "col-6">
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon1">Recipe Name</span>
							</div>
							<input type="text" class="form-control" placeholder="" aria-label="RecipeName" aria-describedby="basic-addon1"/>
						</div>
						
						<div class="input-group mb-3">
							<div class="input-group-prepend">
								<span class="input-group-text" id="basic-addon2">Recipe URL</span>
							</div>
							<input type="text" class="form-control" placeholder="" aria-label="RecipeURL" aria-describedby="basic-addon2"/>
						</div>
						
						<div class = "col-6">
							<div class = "input-group mb-3">
								<select class="custom-select" id="month">
								</select>
								<select class="custom-select" id="day">
								</select>
								<select class="custom-select" id="year">
								</select>
							</div>
						</div>
						
						<div class = "col-6">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Schedule;