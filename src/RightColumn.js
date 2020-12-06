import React, { useState } from "react";
import userImage from "./user.svg";

const RightColumn = ({
  sectionName = "Name of Section",
  setValues = (f) => f,
  setReload = (f) => f,
  values = {},
  reload = undefined,
}) => {
  const {
    sections,
    currentSectionArray,
    currentSectionIndex,
    currentObjectIndex,
    currentObject,
  } = values;

  const handleClick = (event) => {
    // todo
    let num = parseInt(event.target.textContent) - 1;

    setValues({
      ...values,
      currentObject:
        sections[currentSectionIndex][
          Object.keys(sections[currentSectionIndex])[0]
        ][num],
      currentObjectIndex: num,
    });

    setReload(!reload);

    return event;
  };

  return (
    <div className="border-left border-info w-100 h-100">
      <section>
        <div className="row m-4 justify-content-center align-items-center">
          <div className="col-4 text-right">
            <img
              src={userImage}
              alt="Profile Pic"
              className="m-2 border border-info"
              width={80}
              height={80}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-8">
            <h3 className="text-left">Best of luck!</h3>
          </div>
        </div>
      </section>

      <section>
        <div>
          <ul className="list-group list-group-flush m-2 p-2 font-weight-bold">
            <li className="list-group-item border-0">
              <div className="row no-gutters">
                <div className="col-2">
                  <span
                    className="btn btn-lg text-white bg-dark"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    1
                  </span>
                </div>
                <div className="col-10 align-self-center">
                  <span> Question not Visited</span>
                </div>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="row no-gutters">
                <div className="col-2">
                  <span
                    className="btn btn-lg text-white bg-danger"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    2
                  </span>
                </div>
                <div className="col-10 align-self-center">
                  <span> Question not Answered</span>
                </div>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="row no-gutters">
                <div className="col-2">
                  <span
                    className="btn btn-lg text-white bg-success"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    3
                  </span>
                </div>
                <div className="col-10 align-self-center">
                  <span> Question Answered</span>
                </div>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="row no-gutters">
                <div className="col-2">
                  <span
                    className="btn btn-lg text-white bg-info"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    4
                  </span>
                </div>
                <div className="col-10 align-self-center">
                  <span> Questions Marked</span>
                </div>
              </div>
            </li>
            <li className="list-group-item border-0">
              <div className="row no-gutters">
                <div className="col-2">
                  <span
                    className="btn btn-lg text-white bg-warning"
                    style={{
                      borderRadius: "50%",
                    }}
                  >
                    5
                  </span>
                </div>
                <div className="col-10 align-self-center">
                  <span> Questions Answered & Marked for Review</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="row no-gutters">
          <div className="col-12 my-2 p-2 bg-info text-center font-weight-bold">
            <h4>{sectionName}</h4>
          </div>
        </div>
      </section>

      <section>
        <div className="row container pt-2 px-4">
          <div className="col-12 mb-2">
            <h6>Choose a question:</h6>
          </div>
          <div className="col-12">
            <ul className="d-flex flex-row justify-content-around">
              {currentSectionArray.map((obj, index) => (
                <li
                  key={index}
                  className="btn btn-lg bg-info text-white font-weight-bold border border-info"
                  style={{ borderRadius: "50%" }}
                  onClick={handleClick}
                >
                  <span>{index + 1}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-12 mt-5 px-5" style={{ top: "150px" }}>
            <button
              className="btn btn-lg btn-block btn-outline-info"
              style={{ borderRadius: "30px" }}
            >
              SUBMIT EXAM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RightColumn;
