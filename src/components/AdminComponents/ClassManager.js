import React, { useState } from "react";

function ClassManager({ schedule, activePage }) {
  return (
    <>
      <div
        className={activePage === "overview" ? "admin-card-overview" : "hidden"}
      >
        <p id="card-date">Date: {schedule.date}</p>
        <p id="card-date">Time: {schedule.timeslot}</p>
        <p>Name: {schedule.name}</p>
        <p>Email: {schedule.email}</p>
        <p>Subject: {schedule.subject}</p>
        {schedule.available ? (
          <p className="card-booking booking-available">Available</p>
        ) : (
          <p className="card-booking booking-unavailable">Booked</p>
        )}
      </div>
    </>
  );
}

export default ClassManager;
