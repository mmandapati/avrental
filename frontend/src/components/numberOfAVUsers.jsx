import React, { Component } from "react";
import withCardView from "./common/withCardView";
import { getUserCount } from "../services/userService";

class NumberOfAVUsers extends Component {
  state = {};

  async componentDidMount() {
    const { data: userCount } = await getUserCount();
    this.setState({ userCount: userCount.count });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card" style={{backgroundColor: "#FAE395"}}>
        <h1> Registered AV Users</h1>
        <div
          className="dropdown-divider"
          style={{
            marginBottom: "30px",
            borderBlockColor: "black",
          }}
        ></div>
        <p className="text-center" style={{ fontSize: "50px" }}>
          {this.state.userCount}
        </p>
        </div>
      </React.Fragment>
    );
  }
}

export default NumberOfAVUsers;
