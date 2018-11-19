import React, { Component } from 'react';
import Calendar from 'react-calendar';
import  './App.css';
import DaysPager from './DaysPager/DaysPager';

const T1 = new Date();
T1.setDate(T1.getDate() - 2);
console.log('T1  -- ' + T1);

const T2 = new Date();
T2.setDate(T2.getDate() + 2);
console.log('T2  -- ' + T2);

class App extends Component {

	state = {
		//date: new Date(),
		datesEdges: {
			dateFrom: T1,
			dateTo: T2
		},
		calendars: {
			dateFrom: {
				showCalendar: 'hide'
			},
			dateTo: {
				showCalendar: 'hide'
			}
		}

	}
	createStringDate = (date) => {
		const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return week[date.getDay()] + ' ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
	}
	showCalendarHandler = (field) => {
		const newCalendars = { ...this.state.calendars };
		newCalendars[field].showCalendar = (newCalendars[field].showCalendar === 'hide') ? 'show' : 'hide';
		this.setState({
			calendars: newCalendars
		});
	}
	onChangeCalendar = (field, date) => {
		console.log(field + '   ' + date);
		const newDatesEdges = { ...this.state.datesEdges };
		newDatesEdges[field] = date;
		const newCalendars = { ...this.state.calendars };
		newCalendars[field].showCalendar = 'hide';
		this.setState({
			datesEdges: newDatesEdges,
			calendars: newCalendars
		});
	};

	render() {

		return (
			<main>
				<div className='dateEdgeBlock'>
					<div className='dateEdgeElem'>
						<div onClick={() => this.showCalendarHandler('dateFrom')} className='dateValue'>
							{this.createStringDate(this.state.datesEdges.dateFrom)}
						</div>
						<div className={this.state.calendars.dateFrom.showCalendar}>
							<Calendar
								onChange={(value) => this.onChangeCalendar('dateFrom', value)}
								value={this.state.datesEdges.dateFrom}

							/>
						</div>
					</div>
					<div className='dateEdgeElem'>
						<div onClick={() => this.showCalendarHandler('dateTo')} className='dateValue'>
							{this.createStringDate(this.state.datesEdges.dateTo)}
						</div>
						<div className={this.state.calendars.dateTo.showCalendar}>
							<Calendar
								onChange={(value) => this.onChangeCalendar('dateTo', value)}
								value={this.state.datesEdges.dateTo}
							/>
						</div>
					</div>
				</div>
				<DaysPager dateFrom = {this.state.datesEdges.dateFrom} dateTo = {this.state.datesEdges.dateTo} currentDate = {new Date()}/>
			</main>
		);
	}
}


export default App;