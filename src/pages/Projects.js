import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BubbleDiv from "../components/BubbleDiv";
import bookshelfappimg from "../Logo1.png";
import gabilogo from "../gabilogo.png";
import ritualslogo from "../Rituals_Cosmetics_logo.png"
import intersportlogo from "../InterSport-Logo.png"
import BasicModal from "../components/Modal";

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };



  var content;

  return (
    <div>
      <Navbar />

      <div className="projects-container">
        <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
          MY PROJECTS
        </h1>
        <div className="projects-items">
          <BubbleDiv
            title={"Bugaboo CRO @Emakina"}
            imgsrc={
              "https://www.danimontesinos.com/wp-content/uploads/2020/11/5da9e313c17e282a8b3e2ebf_logo-bugaboo.png"
            }
            handleOpenModal={handleOpenModal}
          />
          <BubbleDiv
            title={"BookShelf App @myself"}
            imgsrc={bookshelfappimg}
            handleOpenModal={handleOpenModal}
          />
          <BubbleDiv
            title={"GabiDoo E-Shop @myself"}
            imgsrc={gabilogo}
            handleOpenModal={handleOpenModal}
          />
          <BubbleDiv
              title={"Bugaboo Salesforce FE @emakina"}
              imgsrc={
                "https://www.danimontesinos.com/wp-content/uploads/2020/11/5da9e313c17e282a8b3e2ebf_logo-bugaboo.png"
              }
              handleOpenModal={handleOpenModal}
          />
          <BubbleDiv
              title={"InterSport Salesforce FE @emakina"}
              imgsrc={intersportlogo}
              handleOpenModal={handleOpenModal}
          />
          <BubbleDiv
              title={"Rituals React/React Native @emakina"}
              imgsrc={ritualslogo}
              handleOpenModal={handleOpenModal}
          />
        </div>
      </div>
      <BasicModal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        content={content}
      />
    </div>
  );
}
