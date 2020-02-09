import React, { useState } from 'react'
import { format } from "date-fns"
import PropTypes from 'prop-types'

const Calendar = props => {
    const [date, setDate] = useState(new Date)

    function renderHeader() {
        const dateFormat = "MMMM yyyy";
        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={prevMonth}>
                        chevron_left
              </div>
                </div>
                <div className="col col-center">
                    <span>
                        {format(date, dateFormat)}
                    </span>
                </div>
                <div className="col col-end" onClick={nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    function renderDays() { }

    function renderCells() { }

    const onDateClick = day => { };

    const nextMonth = () => { };

    const prevMonth = () => { };
    return (
        <div style={{ backgroundColor: "black" }}>
            <div>{renderHeader()}</div>
            <div>{date.getDate()}</div>
            <div>Cells</div>
        </div>
    )
}

Calendar.propTypes = {

}

export default Calendar
