import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Schedule from "../components/Schedule";
import { fetchSchedule } from "../services/fetchEndpoints";
import { createBooking } from "../services/scheduleService";

function Classes() {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [timeslots, setTimeslots] = useState([]);

  var date = `${calendarDate.getDate()}/${
    calendarDate.getMonth() + 1
  }/${calendarDate.getFullYear()}`;

  useEffect(() => {
    const getSchedule = async () => {
      const schedule = await fetchSchedule();
      const filteredSchedule = schedule.filter((s) => date <= s.date); //show only todays or future bookings
      setTimeslots(filteredSchedule);
    };
    getSchedule();
  }, []);

  const createNewBooking = async (id, newBooking) => {
    await createBooking(id, newBooking);
    const schedule = await fetchSchedule();
    setTimeslots(schedule);
  };

  return (
    <div>
      <Navbar />
      <div className="classes-header">
        <h1>Schedule a class!</h1>
        <p>{date}</p>
      </div>

      <Schedule
        timeslots={timeslots}
        calendarDate={calendarDate}
        setCalendarDate={setCalendarDate}
        definitiveDate={date}
        setTimeslots={setTimeslots}
        createNewBooking={createNewBooking}
      />
    </div>
  );
}

export default Classes;
