import React from 'react';
import PropTypes from 'prop-types';

const Reminder = (props) => {
	return (
		<div style={{ flex: 1 }}>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					maxWidth: '30%',
					background: 'white',
					padding: '2rem',
					margin: '0 auto',
					borderRadius: '1rem'
				}}
			>
				<h1>{`${'New Reminder'}`}</h1>
				{/* 
				// TODO: Show the month of the year
				 */}
				 <br/>
				 <p>Here is a Month</p>
				<label>Reminder</label>
				<textarea type="text-area" placeholder="write a reminder max 30 chars" maxLength={30} />
				{/* 
					// TODO: Add a better time selector or improve it
				 */}
				<br />
				<label>Time</label>
				<input type="time" />
				<br />
				{/* 
				City 
				// TODO: Add json with cities
				*/}
				<label>City</label>
				<select style={{ flex: 1 }} name="city">
					<option>city</option>
				</select>
				{/* Select color */}
				<br />
				{/* 
				// TODO: add a json of colors
 				*/}
				<label>Color</label>
				<select name="color">
					<option>red</option> <div style={{ backgroundColor: 'red', width: '10px', height: '10px' }} />
				</select>
			</div>
		</div>
	);
};

Reminder.propTypes = {};

export default Reminder;
