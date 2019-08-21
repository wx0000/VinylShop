import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Drop us a line!</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Type here..."
          />
          <button>Send!</button>
        </form>
        <Prompt when={this.state.value} message="Are You sure You want to quit?" />
      </div>
    );
  }
}
export default ContactPage;
