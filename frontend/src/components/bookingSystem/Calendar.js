import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


const Calendar = (onTimeSelected) => {

    const [date, setDate] = useState(new Date());
    const [reservationConfirmed, setReservationConfirmed] = useState(false);

    // const handleConfirm = () => {
    //     setReservationConfirmed(true);
    //     onTimeSelected(date);
    // };

    const handleTimeSelected = (time) => {
        onTimeSelected(time);
    };


    return (
        <div>
        <DatePicker
            showTimeSelect
            minTime={new Date(0, 0, 0, 12, 30)}
            maxTime={new Date(0, 0, 0, 19, 0)}
            selected={date}
            onChange={handleTimeSelected}
            // onChange={(date) => setDate(date)}
            dateFormat="MMMM d, yyyy h:mmaa"
            disabled={reservationConfirmed}
            />
    </div>
    );
};

export default Calendar;