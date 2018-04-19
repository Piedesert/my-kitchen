import React, { Component } from 'react';

class Schedule extends Component {
	render() {
		// Format arrays for month, day, and year.
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		let days = [];
		
		for (var i = 0; i < 31; i++) {
			days[i] = i + 1;
		}
		
		let years = [];
		
		for (var i = 0; i < 10; i++) {
			years[i] = 2018 + i;
		}
		
		// Format arrays for hours.
		let hours = [];
		
		for (var i = 0; i < 12; i++) {
			hours[i] = i;
		}
		
		const minutes = ["00", "15", "30", "45"];
		
		return (
			<div className = "container-fluid">
				<div class = "row">
					<div class = "col-6">
						<div id="divifm">
							<iframe id="ifmCalendar" src="https://www.google.com/calendar/embed?height=550&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=24tn4fht2tr6m86e%40group.calendar.google.com&amp;color=%238C500B&amp;ctz=Asia%2FCalcutta" width="600" height="520" frameborder="0" scrolling="no">
							</iframe>
						</div>
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
						
						<div class = "row">
							<div class = "col-5">
								<div class = "input-group mb-3">
									<select class="custom-select" id="month">
										<option selected>Month</option>
										{months.map((entry, i) =>
											<option value = "{i}">{entry}</option>
										)}
									</select>
									<select class="custom-select" id="day">
										<option selected>Day</option>
										{days.map((entry, i) =>
											<option value = "{i}">{entry}</option>
										)}
									</select>
									<select class="custom-select" id="year">
										<option selected>Year</option>
										{years.map((entry, i) =>
											<option value = "{i}">{entry}</option>
										)}
									</select>
								</div>
							</div>
							<div class = "col-2">
								<p>at</p>
							</div>
							<div class = "col-5">
								<div class = "input-group mb-3">
									<select class="custom-select" id="hour">
										<option selected>Hour</option>
										{hours.map((entry, i) =>
											<option value = "{i}">{entry}</option>
										)}
									</select>
									<select class="custom-select" id="minute">
										<option selected>Minute</option>
										{minutes.map((entry, i) =>
											<option value = "{i}">{entry}</option>
										)}
									</select>
									<select class="custom-select" id="amorpm">
										<option selected>AM</option>
										<option>PM</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Schedule;