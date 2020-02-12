import React from 'react';

export default React.createContext({
	showRemindersModal: false,
	showReminderModal: false,
	reminders: [
		{
			id: 0,
			date: '5 feb',
			time: '19:00',
			description: 'This is a description',
			color: 'red',
			city: 'CDMX'
		}
	],
	addReminderToCalendar: (reminder) => {},
	deleteReminderToCalendar: (reminderId) => {},
	showReminder: (show) => {},
	hideReminder: (hide) => {},
	showReminders: (show) => {},
	hideReminders: (hide) => {}
});
