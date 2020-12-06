import React, { useState } from "react";

const SelectedSection = ({ sections, currentSectionName = "" }) => {

  const sectionButtons = (i) => (
    <button
      key={i}
      type="button"
      class="btn mx-1 rounded sectionButtons"
      style={{
        color: "var(--btn-text-color)",
      }}
      // onClick={changeColor}
    >
      {Object.keys(sections[i])}
    </button>
  );

  return (
    <section className="container">
      <div
        className="row no-gutters px-5 py-2 justify-content-center align-items-center rounded"
        style={{ background: "var(--btn-background-color)" }}
      >
        <div
          className="btn-group btn-group-lg"
          role="group"
          aria-label="All Sections"
        >
          {sections.map((section, index) => sectionButtons(index))}
        </div>
      </div>
    </section>
  );
};

export default SelectedSection;
