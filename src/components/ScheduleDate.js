import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function ScheduleDate({ calendarDate, setCalendarDate }) {
  return (
    <div>
      <Calendar
        className="schedule-calendar"
        value={calendarDate}
        onChange={setCalendarDate}
      />
    </div>
  );
}
