import React from "react";
import styled from "styled-components";
import placeholderimg from "../placeholder.jpg";

function BubbleDiv({ title, imgsrc, handleOpenModal }) {
  return (
    <BubbleWrapper onClick={handleOpenModal}>
      <Bubble>
        <img
          className="projects-img"
          src={imgsrc ? imgsrc : placeholderimg}
          alt="bubble-img"
        />
      </Bubble>
      <p>{title}</p>
    </BubbleWrapper>
  );
}

const Bubble = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  box-shadow: 0 0 10px #e5e5e5;
  display: flex;
  align-items: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default BubbleDiv;
