import React from "react";

const Completed = () => {
  const cancel = (e) => {
    let ele = e.target.parentElement.parentElement.parentElement.parentElement;
    ele.removeAttribute("style");
  };

  const reTake = () => {
    window.history.go();
  };

  return (
    <div
      className="modal"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={cancel}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={cancel}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={reTake}>
              Retake Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
