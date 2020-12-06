import React, { useState, useEffect } from "react";

const Head = ({ examTitle = "Exam Title", totalTime = 0, timer = false }) => {
  const [seconds, setSeconds] = useState(parseInt(totalTime * 60));

  useEffect(() => {
    const counter =
      timer && seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    if (!counter) {
      // alert("just checking");
    }
    return () => {
      clearInterval(counter);
    };
  }, [seconds]);

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
            {seconds}sec
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Head;
