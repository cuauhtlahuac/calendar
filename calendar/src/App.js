import React from 'react';
import './App.css';
import Calendar from './components/calendar/Calendar';
import Reminder from './components/reminder/Reminder';

function App() {
	return (
		<div className="App">
			<header>
				<span className="icon">date_range</span>
				<span>
					react<b>calendar</b>
				</span>
				<h1>CALENDAR</h1>
			</header>
			<main>
				<Calendar />
				<Reminder />
			</main>
		</div>
	);
}

export default App;
