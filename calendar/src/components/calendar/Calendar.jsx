import React, { useState } from 'react';
import '../../App.css';
import {
	format,
	startOfWeek,
	endOfWeek,
	addDays,
	startOfMonth,
	endOfMonth,
	isSameMonth,
	isSameDay,
	parse,
	addMonths,
	subMonths
} from 'date-fns';
import PropTypes from 'prop-types';

const Calendar = (props) => {
	const [ date, setDate ] = useState(new Date());

	function renderHeader() {
		const dateFormat = 'MMMM yyyy';
		return (
			<div className="header row flex-middle">
				<div className="col col-start">
					<div className="icon" onClick={() => prevMonth()}>
						chevron_left
					</div>
				</div>
				<div className="col col-center">
					<span>{format(date, dateFormat)}</span>
				</div>
				<div className="col col-end" onClick={() => nextMonth()}>
					<div className="icon">chevron_right</div>
				</div>
			</div>
		);
    }

	function renderDays() {
		const dateFormat = 'EEEE';
		const days = [];
		let startDate = startOfWeek(date);
		for (let i = 0; i < 7; i++) {
			days.push(
				<div className="col col-center" key={i}>
					{format(addDays(startDate, i), dateFormat)}
				</div>
			);
		}
		return <div className="days row">{days}</div>;
	}

	function renderCells() {
		const monthStart = startOfMonth(date);
		const monthEnd = endOfMonth(monthStart);
		const startDate = startOfWeek(monthStart);
		const endDate = endOfWeek(monthEnd);
		const dateFormat = 'd';
		const rows = [];
		let days = [];
		let day = startDate;
		let formattedDate = '';
		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = format(day, dateFormat);
				const cloneDay = day;
				days.push(
					<div
						className={`col cell ${!isSameMonth(day, monthStart)
							? 'disabled'
							: isSameDay(day, date) ? 'selected' : ''}`}
						key={day}
						onClick={() => onDateClick(cloneDay)}
					>
						<span className="number">{formattedDate}</span>
					</div>
				);
				day = addDays(day, 1);
			}
			rows.push(
				<div className="row" key={day}>
					{days}
				</div>
			);
			days = [];
		}
		return <div className="body">{rows}</div>;
	}

	const onDateClick = (day) => {
		console.log({ day });
	};

	const nextMonth = () => {
		//Set the next month
		setDate(addMonths(date, 1));
	};

	const prevMonth = () => {
		// Set in state prev month
		setDate(subMonths(date, 1));
	};
	return (
		<div className="calendar">
			<div>{renderHeader()}</div>
			<div>{renderDays()}</div>
			<div>{renderCells()}</div>
		</div>
	);
};

Calendar.propTypes = {};

export default Calendar;
