import React from "react";

function AdminMenu({ activePage, setActivePage }) {
  return (
    <ul className="admin-menu-ul">
      <li
        onClick={() => setActivePage("overview")}
        className={activePage === "overview" ? "active-page" : "inactive-page"}
      >
        Overview
      </li>
      <li
        onClick={() => setActivePage("addDates")}
        className={activePage === "addDates" ? "active-page" : "inactive-page"}
      >
        Add dates
      </li>
    </ul>
  );
}

export default AdminMenu;
