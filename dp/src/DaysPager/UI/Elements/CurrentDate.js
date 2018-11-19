import React from 'react';
import './Elements.css';

const currentDate = (props) => {
    return(
        <div className='CurrentDate'>
            <div
                onClick = {props.click}
                className = {'currentDateValue '+props.todayStyle}>
                {props.currentDate}
            </div>
            <div className={props.showCalendar}>
                {props.children}
            </div>
        </div>
    );
}
export default currentDate;