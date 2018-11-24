import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "", data: [] };
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        axios
          .get("/api/users")
          .then(res => this.setState({ data: res.data }))
          .catch(e => console.log(e)),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/messages", { message: this.state.message })
      .then(message => console.log(message.data))
      .catch(e => console.log(e));
    this.setState({ message: "" });
  };
  render() {
    let displayData;
    if (this.state.data.length === 0) {
      displayData = <div className="loading">LOADING DATA....</div>;
    } else {
      displayData = this.state.data.map(item => {
        return (
          <div key={item._id} className="data">
            <div>{item.deviceId}</div>
            <div>{item.message}</div>
            <div>{item.location}</div>
            <div>{item.time}</div>
          </div>
        );
      });
    }

    return (
      <div className="dashboard">
        <div className="Title">
          <div className="TitleAndButton">
            {" "}
            <div className="Emergency">Emergency Maverick</div>
            <Link className="back" to="/">
              Go Back
            </Link>
          </div>

          <h4 className="subtitle">Signals arrived from people in Emergency</h4>
          <div className="displayData">
            <div className="data data-title">
              <div>Device Id</div>
              <div>Message</div>
              <div>Location</div>
              <div>Time</div>
            </div>
            <div className="table">{displayData}</div>
            <div className="announcement">
              <div className="message">Network-wide announcements</div>
              <form onSubmit={this.handleSubmit}>
                <div className="form">
                  <textarea
                    className="message-area"
                    name="message"
                    value={this.state.message}
                    onChange={this.onChange}
                  />
                  <button className="submit" type="submt">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div />
      </div>
    );
  }
}
export default Dashboard;
