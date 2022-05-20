import React from "react";

function PulloutDiv({
  classSelect,
  contentHeader,
  contentParagraph,
  contentBody,
}) {
  return (
    <>
      <div className={"pullout-container " + classSelect}>
        <div>
          <h1>{contentHeader}</h1>
          <p>{contentParagraph}</p>
        </div>
        {contentBody}
      </div>
    </>
  );
}

export default PulloutDiv;
