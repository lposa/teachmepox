import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BubbleDiv from "../components/BubbleDiv";
import bookshelfappimg from "../Logo1.png";
import gabilogo from "../gabilogo.png";
import BasicModal from "../components/Modal";

export default function Projects() {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const contentJSON = [
    {
      id: 0,
      content: {
        img: "https://www.danimontesinos.com/wp-content/uploads/2020/11/5da9e313c17e282a8b3e2ebf_logo-bugaboo.png",
        headerText: "Bugaboo Website Redesign & Testing",
        text: "I can't talk a lot about this project since it's not my personal project but belongs to Emakina. This was my first ever CRO project, where I learned to inject JS and CSS into an existing website to do a redesign. The tricky part is that you can only work with what's on the website, and you are advised against creating new elements. After creating the redesign, we used Google Optimize to create A/B test and see if the redesign brings in more customers",
      },
    },
  ];

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
