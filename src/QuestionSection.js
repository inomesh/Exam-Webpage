import React, { useEffect, useState } from "react";

const QuestionSection = ({
  questionNumber = "Question Number",
  alreadyFilledWithColor = false,
  setValues = (f) => f,
  values = undefined,
  questionObject = {},
}) => {
  const { quesText, option1, option2, option3, option4 } = questionObject;


  const highlight = (event) => {
    if (!alreadyFilledWithColor) {
      event.target.className =
        "bg-info text-white col-11 p-3 border border-info";
      setValues({ ...values, alreadyFilledWithColor: true });
    }
  };

  const Dehighlight = () => {
    setValues({ ...values, alreadyFilledWithColor: false });
  };

  useEffect(() => {
    Dehighlight();
  }, []);

  return (
    <section className="my-5 px-4 container-fluid">
      <div className="row">
        <div className="col-12 text-info font-weight-bolder">
          <span
            className="border-bottom border-info"
            style={{ fontSize: "22px" }}
          >
            {questionNumber}
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 w-100 jumbotron text-center bg-white">
          <div className="container">
            <span className="display-4 text-justify">
              {quesText !== "undefined" ? quesText : "Question Text"}
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ul className="list-group d-flex flex-column">
            <li className="list-group-item list-group-item-action my-2 border-0">
              <div className="row no-gutters justify-content-center align-items-center">
                <div className="col-1 text-center text-dark font-weight-bold">
                  <span
                    className="btn btn-lg text-white"
                    style={{
                      borderRadius: "50%",
                      background: "var(--btn-background-color)",
                      fontSize: "22px",
                    }}
                  >
                    A
                  </span>
                </div>
                <div
                  className="col-11 p-3 border border-info"
                  onClick={highlight}
                >
                  <span className="text-justify">
                    {option1 !== "undefined" ? option1 : "OPTION 1"}
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action my-2 border-0">
              <div className="row no-gutters justify-content-center align-items-center">
                <div className="col-1 text-center text-dark font-weight-bold">
                  <span
                    className="btn btn-lg text-white"
                    style={{
                      borderRadius: "50%",
                      background: "var(--btn-background-color)",
                      fontSize: "22px",
                    }}
                  >
                    B
                  </span>
                </div>
                <div
                  className="col-11 p-3 border border-info"
                  onClick={highlight}
                >
                  <span className="text-justify">
                    {option2 !== "undefined" ? option2 : "OPTION 2"}
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action my-2 border-0">
              <div className="row no-gutters justify-content-center align-items-center">
                <div className="col-1 text-center text-dark font-weight-bold">
                  <span
                    className="btn btn-lg text-white"
                    style={{
                      borderRadius: "50%",
                      background: "var(--btn-background-color)",
                      fontSize: "22px",
                    }}
                  >
                    C
                  </span>
                </div>
                <div
                  className="col-11 p-3 border border-info"
                  onClick={highlight}
                >
                  <span className="text-justify">
                    {option3 !== "undefined" ? option3 : "OPTION 3"}
                  </span>
                </div>
              </div>
            </li>
            <li className="list-group-item list-group-item-action my-2 border-0">
              <div className="row no-gutters justify-content-center align-items-center">
                <div className="col-1 text-center text-dark font-weight-bold">
                  <span
                    className="btn btn-lg text-white"
                    style={{
                      borderRadius: "50%",
                      background: "var(--btn-background-color)",
                      fontSize: "22px",
                    }}
                  >
                    D
                  </span>
                </div>
                <div
                  className="col-11 p-3 border border-info"
                  onClick={highlight}
                >
                  <span className="text-justify">
                    {option4 !== "undefined" ? option4 : "OPTION 4"}
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
