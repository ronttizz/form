import "./App.css";
import React, { Component } from "react";
import axios from "axios";

import Form from "./Form";
import DisplayNote from "./DisplayNote";
import Popup from "./Popup";
import Listing from "./Listing";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
      contact: "",
    },
    showPopup: false,
    isLoading: false,
    data: [],
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:3010/notes/")
      .then((response) => this.setState({ data: response.data, isLoading: false }))
      .catch((err) => console.log(err));
  }

  postHandler = () => {
    axios
      .post("http://localhost:3010/notes/", this.state.inputData)
      .then((response) => console.log("Note posted." + response))
      .catch((err) => console.log("Something went wrong" + err));
    this.closeHandler();
  };

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  // showPopupHandler = (e) => {
  //   if (e.target.name === "send" || e.target.name === "close") {
  //     this.setState({
  //       showPopup: !this.state.showPopup,
  //     });
  //   }
  // };

  showPopupHandler = (e) => {
    e.preventDefault();
    this.setState({ showPopup: !this.state.showPopup });
  };

  closeHandler = () => {
    window.location.reload();
  };

  render() {
    return (
      <div>
        <div className="App">
          <Form onChange={this.inputHandler} submit={this.showPopupHandler} />
          <DisplayNote {...this.state.inputData} />
          {this.state.showPopup && (
            <Popup
              {...this.state.inputData}
              popup={this.showPopupHandler}
              close={this.closeHandler}
              post={this.postHandler}
            />
          )}
        </div>
        <ol>
          {this.state.data.map((item) => (
            <Listing {...item} key={item.id} />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
