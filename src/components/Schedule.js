import React, { useEffect } from "react";
import ScheduleBubble from "./ScheduleBubble";
import ScheduleDate from "./ScheduleDate";

export default function Schedule({
  timeslots,
  calendarDate,
  setCalendarDate,
  definitiveDate,
  setTimeslots,
  createNewBooking,
}) {
  return (
    <div className="schedule-container">
      <div className="schedule-date">
        <ScheduleDate
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
        />
      </div>
      <div className="schedule-bubble">
        {timeslots
          .filter((timeslot) => timeslot.date === definitiveDate)
          .map((timeslot) => {
            return (
              <ScheduleBubble
                timeslots={timeslots}
                key={timeslot.id}
                timeslotId={timeslot.id}
                timeslot={timeslot.timeslot}
                available={timeslot.available}
                definitiveDate={definitiveDate}
                setTimeslots={setTimeslots}
                createNewBooking={createNewBooking}
              />
            );
          })}
      </div>
    </div>
  );
}
