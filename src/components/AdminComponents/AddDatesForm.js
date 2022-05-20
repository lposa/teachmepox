import React, { useState } from "react";
import { postSchedule } from "../../services/scheduleService";

export default function AddDatesForm({ activePage }) {
  const [textInput, setTextInput] = useState({
    date: "",
    timeslot: "",
  });

  function handleTextChange(e) {
    const value = e.target.value;
    setTextInput({ ...textInput, [e.target.name]: value });
  }

  function submitText(e) {
    e.preventDefault();
    console.log(textInput);
    postSchedule(textInput);
  }

  return (
    <div
      className={activePage === "addDates" ? "admin-card-addDates" : "hidden"}
    >
      <form
        className="admin-add-dates-form"
        onSubmit={(e) => {
          submitText(e);
        }}
      >
        <label>
          Date:
          <input
            required
            autoComplete="off"
            type="text"
            value={textInput.name}
            className="admin-add-dates-field"
            name="date"
            onChange={handleTextChange}
            placeholder="D/M/Y format"
          />
        </label>
        <label>
          Hours:
          <input
            required
            autoComplete="off"
            type="text"
            value={textInput.timeslot}
            className="admin-add-dates-field"
            name="timeslot"
            onChange={handleTextChange}
            placeholder="1-2h format"
          />
        </label>
        <input
          type="submit"
          value="Add to schedule"
          className="admin-add-dates-submit"
        />
      </form>
    </div>
  );
}
