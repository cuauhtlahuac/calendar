import React, { useState, useEffect } from 'react';
import './App.css';
import CalendarContext from './context/CalendarContext';
import Calendar from './components/calendar/Calendar';
import Reminder from './components/reminder/Reminder';
import Reminders from './components/reminders/Reminders';

function App() {
	const [ reminders, setReminders ] = useState([ {} ]);
	const [ showReminderModal, setReminderModal ] = useState(false);
	const [ showRemindersModal, setRemindersModal ] = useState(false);
	useEffect(
		() => {
			return () => {};
		},
		[ reminders ]
	);
	const addReminderToCalendar = (reminder) => {
		console.log('add reminder' + reminder);
		reminder = {};
	};
	const deleteReminderToCalendar = (reminderId) => {
		console.log('delete reminder ' + reminderId);
	};
	const showReminder = (show) => {
		setReminderModal(show);
	};
	const showReminders = (show) => {
		setRemindersModal(show);
	};
	// const { showReminderModal } = state;
	return (
		<div className="App">
			<CalendarContext.Provider
				value={{
					addReminderToCalendar,
					deleteReminderToCalendar,
					showReminder,
					showReminders,
				}}
			>
				<header>
					<h1>CALENDAR</h1>
					<p> {JSON.stringify(showReminderModal)} </p>
				</header>
				<main>
					<div
						style={{
							display: showReminderModal ? 'flex' : 'none',
							position: 'absolute',
							zIndex: 1,
							width: '100vw',
							height: '100vh',
							background: '#005b',
							top: 0,
							left: 0,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Reminder />
					</div>
					<div
						style={{
							display: showRemindersModal ? 'flex' : 'none',
							position: 'absolute',
							zIndex: 1,
							width: '100vw',
							height: '100vh',
							background: '#005b',
							top: 0,
							left: 0,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Reminders />
					</div>

					<Calendar />
				</main>
			</CalendarContext.Provider>
		</div>
	);
}

export default App;
