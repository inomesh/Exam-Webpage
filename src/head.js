import React from "react";
import Completed from "./Completed";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.minutes = this.props.totalTime;
    this.state = {
      seconds: 10,
      minutes: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      return;
    } else if (this.state.seconds === 0) {
      this.setState((state, props) => ({
        minutes: state.minutes - 1,
        seconds: 59,
      }));
    } else {
      this.setState((state, props) => ({
        seconds: state.seconds - 1,
      }));
    }
  }

  render() {
    return (
      <section className="mt-0">
        {this.state.minutes === 0 && this.state.seconds === 0 && <Completed />}

        <div className="row no-gutters align-items-center">
          <div className="col-9 text-info">
            <div
              className="row no-gutters px-4 py-3 font-weight-bold"
              style={{ fontSize: "24px" }}
            >
              <h3 className="text-dark">Design Facility</h3>
              <ul className="ml-5 text-info">
                <li>
                  <h3>{this.props.examTitle}</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 p-2 d-flex flex-row-reverse">
            <h4
              className="text-light px-4 py-3 btn btn-lg rounded font-weight-bold"
              style={{ background: "#1769b8", color: "var(--btn-text-color)" }}
            >
              {this.state.minutes} : {this.state.seconds}
            </h4>
          </div>
        </div>
      </section>
    );
  }
}

export default Clock;
