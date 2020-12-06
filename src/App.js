import React, { useEffect, useState } from "react";
import Foot from "./foot";
import Head from "./head";
import QuestionSection from "./QuestionSection";
import RightColumn from "./RightColumn";
import SelectedSection from "./SelectedSection";

const App = () => {
  const [reload, setReload] = useState(false);

  const [values, setValues] = useState({
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
  });

  const {
    examTitle,
    examDurationInMinutes,
    sections,
    currentSection,
    currentSectionArray,
    currentSectionName,
    currentSectionIndex,
    alreadyFilledWithColor,
    currentObjectIndex,
    currentObject,
  } = values;

  const show = async () => {
    const res = await fetch(
      "http://5.181.217.46/DesignFacility/useGETMethodForTheResponse/[nomesh]"
    );
    const data = await res.json();
    setValues({
      ...values,
      examTitle: data.exam.examTitle,
      examDurationInMinutes: data.exam.examDurationInMinutes,
      sections: data.exam.sections,
      currentSectionArray:
        data.exam.sections[0][Object.keys(data.exam.sections[0])[0]],
      currentSection: Object.keys(data.exam.sections[0])[0],
      currentSectionIndex: 0,
      currentSectionName: Object.keys(data.exam.sections[0])[0],
      currentObject:
        data.exam.sections[0][Object.keys(data.exam.sections[0])[0]][0],
      currentObjectIndex: 0,
    });

    // console.log( data.exam.sections[1][Object.keys(data.exam.sections[1])[0]]);
    // console.log(currentSectionArray);
  };

  useEffect(() => {
    show();
  }, []);

  return (
    <div>
      <div className="row no-gutters container-fluid">
        <div className="col-9" style={{ height: "100vh !important" }}>
          <Head examTitle={examTitle} totalTime={examDurationInMinutes} />
          <SelectedSection
            sections={sections}
            currentSectionName={currentSectionName}
          />
          <QuestionSection
            questionNumber={`Q ${currentObjectIndex + 1}`}
            setValues={setValues}
            values={values}
            questionObject={currentObject}
            alreadyFilledWithColor={alreadyFilledWithColor}
          />
          <Foot
            setValues={setValues}
            values={values}
            reload={reload}
            setReload={setReload}
          />
        </div>
        <div className="col-3">
          <RightColumn
            sectionName={currentSection}
            setValues={setValues}
            setReload={setReload}
            values={values}
            reload={reload}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
