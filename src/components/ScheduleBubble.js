import { TimesOneMobiledataSharp } from "@mui/icons-material";
import React, { useState } from "react";
import Modal from "react-modal";
import DropDownMenu from "./DropDownMenu";

function ScheduleBubble({
  timeslot,
  available,
  openModal,
  definitiveDate,

  timeslotId,

  createNewBooking,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState();
  const [textInput, setTextInput] = useState({
    name: "",
    email: "",
  });

  const [scheduleDetails, setScheduleDetails] = useState({
    name: "",
    email: "",
    subject: "",
  });

  function handleTextChange(e) {
    const value = e.target.value;
    setTextInput({ ...textInput, [e.target.name]: value });
    const text = {
      name: textInput.name,
      email: textInput.email,
      subject: subject,
    };
    console.log(text);
    setScheduleDetails(text);
  }

  function submitText(e) {
    e.preventDefault();

    createNewBooking(timeslotId, scheduleDetails);
    closeModal();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <div
        className={
          available
            ? "schedule-bubble-container available-slot"
            : " schedule-bubble-container unavailable-slot"
        }
        onClick={openModal}
      >
        <p>{timeslot}</p>

        {available ? <p>Book now!</p> : <p>Sorry, busy!</p>}
      </div>

      {available && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customModal}
          ariaHideApp={false}
        >
          <div className="modal-content">
            <p>Date : {definitiveDate}</p>
            <DropDownMenu setSubject={setSubject} />
            <form
              className="modal-form"
              onSubmit={(e) => {
                submitText(e);
              }}
            >
              <label>
                Name:
                <input
                  required
                  autoComplete="off"
                  type="text"
                  value={textInput.name}
                  className="modal-field"
                  name="name"
                  onChange={handleTextChange}
                />
              </label>
              <label>
                E-mail:
                <input
                  required
                  autoComplete="off"
                  type="text"
                  value={textInput.email}
                  className="modal-field"
                  name="email"
                  onChange={handleTextChange}
                />
              </label>
              <input type="submit" value="Book now!" className="modal-submit" />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

const customModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
  },
};

export default ScheduleBubble;
