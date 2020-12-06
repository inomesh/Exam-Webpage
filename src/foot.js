import React from "react";

const Foot = ({
  setValues = (f) => f,
  values = "",
  setReload = (f) => f,
  reload = undefined,
}) => {
  const {
    sections,
    currentSection,
    currentSectionIndex,
    currentSectionName,
    alreadyFilledWithColor,
    currentObjectIndex,
    currentObject,
    completed,
  } = values;

  const saveNext = () => {
    if (
      !completed &&
      currentObjectIndex + 1 <=
        sections[currentSectionIndex][currentSectionName].length - 1
    ) {
      setValues({
        ...values,
        currentObject:
          sections[currentSectionIndex][currentSectionName][
            currentObjectIndex + 1
          ],
        currentObjectIndex: currentObjectIndex + 1,
      });
    } else if (
      currentObjectIndex + 1 ===
      sections[currentSectionIndex][currentSectionName].length
    ) {
      try {
        setValues({
          ...values,
          currentSection: Object.keys(sections[currentSectionIndex + 1])[0],
          currentSectionIndex: currentSectionIndex + 1,
          currentSectionName: Object.keys(sections[currentSectionIndex + 1])[0],
          currentObject:
            sections[currentSectionIndex + 1][
              Object.keys(sections[currentSectionIndex + 1])[0]
            ][0],
          currentObjectIndex: 0,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      setValues({ ...values, completed: true });
    }

    setReload(!reload);

    // for head sections
    changeColor();
  };

  const changeColor = () => {
    let allbtn = document.querySelectorAll(".sectionButtons");
    allbtn.forEach((e) => {
      if (currentSectionName !== "" && e.textContent === currentSectionName) {
        e.className = "btn btn-light text-dark mx-1 rounded sectionButtons";
      }
    });
  };

  const afterClearResponse = (e) => {
    setValues({
      ...values,
      examTitle: "",
      examDurationInMinutes: 0,
      sections: [],
      currentSectionArray: [],
      currentSection: "",
      currentSectionIndex: 0,
      currentSectionName: "",
      currentObjectIndex: "",
      currentObject: {},
      alreadyFilledWithColor: false,
      completed: false,
      timer: false,
    });
    setReload(!reload);
    setTimeout(() => {
      window.history.go();
    }, 160);
  };

  return (
    <section
      className="px-4 py-3 mb-2 font-weight-bolder"
      style={{ background: "#2f6690" }}
    >
      <div className="row no-gutters">
        <div className="col-8">
          <div className="row no-gutters">
            <div className="col">
              <button
                onClick={saveNext}
                className="btn btn-light btn-lg mx-2 text-info font-weight-bold rounded"
              >
                Mark for Review & Next
              </button>
              <button
                onClick={afterClearResponse}
                className="btn btn-light btn-lg mx-2 text-info font-weight-bold rounded"
              >
                Clear Response
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 d-flex flex-row-reverse">
          <button
            onClick={saveNext}
            className="btn btn-outline-info btn-lg text-white font-weight-bold rounded"
          >
            Save & Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Foot;
