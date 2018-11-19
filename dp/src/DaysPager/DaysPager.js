import React, { Component } from 'react';
import Button from './UI/Button/Button';
import Calendar from 'react-calendar';
import CurrentDate from './UI/Elements/CurrentDate';
import './DaysPager.css';



class DaysPager extends Component {
    state = {
        currentDate: this.props.currentDate,
        dateFrom: this.props.dateFrom,
        dateTo: this.props.dateTo,
        showCalendar: 'hide',
        steps: {
            prevStep: (this.props.currentDate.getDate() > this.props.dateFrom.getDate()) ? 'active' : '',
            nextStep: (this.props.currentDate.getDate() < this.props.dateTo.getDate()) ? 'active' : ''
        }
        
    };

    componentDidUpdate(prevProps) {
        if (prevProps.dateFrom !== this.props.dateFrom || prevProps.dateTo !== this.props.dateTo) {
            let newDateFrom = (prevProps.dateFrom !== this.props.dateFrom) ? this.props.dateFrom : prevProps.dateFrom;
            let newDateTo = (prevProps.dateTo !== this.props.dateTo) ? this.props.dateTo : prevProps.dateTo;
            let newPrevStep = (this.state.currentDate.getDate() > newDateFrom.getDate()) ? 'active' : '';
            let newNextStep = (this.state.currentDate.getDate() < newDateTo.getDate()) ? 'active' : '';

            this.setState({
                dateFrom: newDateFrom,
                dateTo: newDateTo,
                steps: {
                    prevStep: newPrevStep,
                    nextStep: newNextStep 
                }
               
            });

        }

    }
    onChangeCalendarHandler = (date) => {
        this.setState({
            currentDate: date,
            showCalendar: 'hide',
            steps: {
                prevStep: ((date.getDate() - this.state.dateFrom.getDate()) > 0) ? 'active' : '',
                nextStep: ((this.state.dateTo.getDate() - date.getDate()) > 0) ? 'active' : '' 
            }
            
        });
    }
    clickTodayHandler = () => {
        this.setState({
            currentDate: new Date()
        });
    }
    createStringDate = (date) => {
        const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        //Thursday 30 August 2018
        return week[date.getDay()] + ' ' + date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear();
    }
    showCalendarHandler = () => {
        this.setState({
            showCalendar: (this.state.showCalendar === 'hide') ? 'show' : 'hide'
        });
    }
    clickPagerHandler = (step) => {
        const actions = {
            'nextStep': 1,
            'prevStep': -1
        };
        if (this.state.steps[step] === 'active'){
            let newSteps = {...this.state.steps};
            let newDate = this.state.currentDate;
            newDate.setDate(newDate.getDate() + 1 * actions[step]);

            newSteps.prevStep = (newDate.getDate() > this.state.dateFrom.getDate()) ? 'active' : '';
            newSteps.nextStep = (newDate.getDate() < this.state.dateTo.getDate()) ? 'active' : '';
            this.setState({
                currentDate: newDate,
                steps: newSteps
            });
        }
    }
    render() {
        let todayStyle = (this.state.currentDate.getDate() === (new Date()).getDate()) ? 'nowToday' : '';
        return (
            <div className='DaysPager'>
                <Button
                    classStyle={'today ' + todayStyle}
                    click={this.clickTodayHandler}>Today</Button>

                <Button
                    classStyle={'prevDay ' + this.state.steps.prevStep}
                    click={() => this.clickPagerHandler('prevStep')}>&nbsp;</Button>
                <CurrentDate
                    currentDate={this.createStringDate(this.state.currentDate)}
                    showCalendar={this.state.showCalendar}
                    click={this.showCalendarHandler}
                    todayStyle = {todayStyle}>
                    <Calendar
                        minDate={this.state.dateFrom}
                        maxDate={this.state.dateTo}
                        onChange={(value) => this.onChangeCalendarHandler(value)}
                        value={this.state.currentDate} />
                </CurrentDate>
                <Button
                    classStyle={'nextDay ' + this.state.steps.nextStep}
                    click={() => this.clickPagerHandler('nextStep')}>&nbsp;</Button>

                <div className='timeZone'>
                    <span>{Intl.DateTimeFormat().resolvedOptions().timeZone }</span>
                    <span>{(new Date()).getTimezoneOffset()/60}</span>
                </div>

            </div>
        );
    };
}
export default DaysPager;