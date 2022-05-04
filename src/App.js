import "./App.css";
import React, { Component } from "react";
import axios from "axios";

import Form from "./Form";
import DisplayNote from "./DisplayNote";
import Popup from "./Popup";
import Listing from "./Listing";
import EditNote from "./EditNote";

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
    showEditPopup: false,
    isLoading: false,
    data: [],
    currentNote: {},
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("http://localhost:3010/notes/")
      .then((response) => this.setState({ data: response.data, isLoading: false }))
      .catch((err) => prompt("Something went wrong" + err));
  }

  inputUpdateHandler = (e) => {
    this.setState({
      currentNote: { ...this.state.currentNote, [e.target.name]: e.target.value },
    });
  };

  updateHandler = (id) => {
    axios.put(`http://localhost:3010/notes/${id}`, this.state.currentNote);
    this.setState({ showEditPopup: false });
    this.closeHandler();
  };

  postHandler = () => {
    axios
      .post("http://localhost:3010/notes/", this.state.inputData)
      .then((response) => console.log("Note posted." + response))
      .catch((err) => console.log("Something went wrong" + err));
    this.closeHandler();
  };

  deleteHandler = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: notes });
    });
  };

  editHandler = (id) => {
    axios
      .get(`http://localhost:3010/notes/${id}`)
      .then((response) =>
        this.setState({ currentNote: response.data, showEditPopup: true })
      );
  };

  inputHandler = (e) => {
    this.setState({
      inputData: { ...this.state.inputData, [e.target.name]: e.target.value },
    });
  };

  //  ALTERNATIVE WAY FOR THE POPUPHANDLER
  //  showPopupHandler = (e) => {
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
          {this.state.showEditPopup && (
            <EditNote
              {...this.state.currentNote}
              onChange={this.inputUpdateHandler}
              submit={() => this.updateHandler(this.state.currentNote.id)}
            />
          )}
        </div>
        <ol>
          {this.state.data.map((item) => (
            <Listing
              {...item}
              key={item.id}
              delete={() => this.deleteHandler(item.id)}
              edit={() => this.editHandler(item.id)}
            />
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
