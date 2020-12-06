import React, { useState } from "react";

const Head = ({ examTitle = "Exam Title", totalTime = "Time Left" }) => {
  // const [remainingTime, setRemainingTime] = useState(0);

  const remainingTime = (totalTime) => {
    let rem = typeof totalTime === "number" ? totalTime : eval(totalTime);
    let sec = 59;
    let clock = "00:00";
    let clear = setInterval(() => {
      clock = "0" + rem + ":" + `${sec > 0 ? sec - 1 : 59}`;
      if (clock === "00:00") {
        clearInterval(clear);
      }
    }, 1000);
    return clock;
  };

  return (
    <section className="mt-2">
      <div className="row no-gutters align-items-center">
        <div className="col-9 text-info">
          <div
            className="row no-gutters px-4 py-3 font-weight-bold"
            style={{ fontSize: "24px" }}
          >
            <h3 className="text-dark">Design Facility</h3>
            <ul className="ml-5 text-info">
              <li>
                <h3>{examTitle}</h3>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-3 p-2 d-flex flex-row-reverse">
          <h4
            className="text-light px-4 py-3 btn btn-lg rounded font-weight-bold"
            style={{ background: "#1769b8", color: "var(--btn-text-color)" }}
          >
            {remainingTime()}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Head;
