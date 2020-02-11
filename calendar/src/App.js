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
				<div
					style={{
						display: 'flex',
						position: 'absolute',
						zIndex: 1,
						width: '100vw',
						height: '100vh',
						background: '#005b',
						top: 0,
						left: 0,
						alignItems: "center",
						justifyContent: "center"
					}}
				>
					<Reminder />
				</div>
				<Calendar />
			</main>
		</div>
	);
}

export default App;
