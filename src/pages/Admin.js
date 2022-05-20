import React, { useState, useEffect } from "react";
import ClassManager from "../components/AdminComponents/ClassManager";
import AddDatesForm from "../components/AdminComponents/AddDatesForm";
import AdminMenu from "../components/AdminComponents/AdminMenu";
import { fetchSchedule } from "../services/fetchEndpoints";
import { NavLink } from "react-router-dom";

function Admin() {
  const [schedules, setSchedules] = useState([]);
  const [activePage, setActivePage] = useState("overview");
  const [calendarDate, setCalendarDate] = useState(new Date());

  useEffect(() => {
    const getSchedule = async () => {
      const schedule = await fetchSchedule();
      setSchedules(schedule);
    };
    getSchedule();
  });

  var date = `${calendarDate.getDate()}/${
    calendarDate.getMonth() + 1
  }/${calendarDate.getFullYear()}`; //create date

  return (
    <>
      <h1 style={{ textAlign: "center" }}>ADMIN PANEL</h1>
      <NavLink
        to="/"
        style={{ textAlign: "center", textDecoration: "none", color: "black" }}
      >
        <p>BACK TO PUBLIC PAGE</p>
      </NavLink>
      <div className="admin-menu-container">
        <AdminMenu activePage={activePage} setActivePage={setActivePage} />
      </div>

      <div className="admin-card-container">
        {schedules
          .filter((s) => date <= s.date)
          .map((schedule) => {
            return (
              <ClassManager
                key={schedule.id}
                schedule={schedule}
                activePage={activePage}
              />
            );
          })}
      </div>
      <div className="admin-add-dates-container">
        <AddDatesForm activePage={activePage} />
      </div>
    </>
  );
}

export default Admin;
