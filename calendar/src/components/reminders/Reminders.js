import React from 'react';
import PropTypes from 'prop-types';
import CalendarContext from '../../context/CalendarContext';
const Reminders = (props) => {
	return (
		<CalendarContext.Consumer>
			{(context) => (
				<div style={{ width: '10rem', height: 'auto' }}>
					<button
						onClick={() => {
							context.showReminders(false);
						}}
					>
						close
					</button>
					<button
						onClick={() => {
							context.showReminders(false);
							context.showReminder(true);
						}}
					>
						new reminder
					</button>
					<div style={{ flex: 1 }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								// maxWidth: '30%',
								background: 'white',
								padding: '2rem',
								margin: '0 auto',
								borderRadius: '1rem'
							}}
						>
							{JSON.stringify(context)}
						</div>
					</div>
				</div>
			)}
		</CalendarContext.Consumer>
	);
};

Reminders.propTypes = {};

export default Reminders;
