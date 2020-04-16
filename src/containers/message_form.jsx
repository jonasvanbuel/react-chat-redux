import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      channel: 'general',
      author: 'Jonas',
      content: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value
    });
  };

  handleSubmit = (event) => {
    console.log("Message sent...");
    event.preventDefault();

    const { createMessage } = this.props;
    const { channel, author, content } = this.state;
    createMessage(channel, author, content);

    // Empy 'input' field, held inside React state...
    this.setState({
      content: ''
    });
  };

  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Say something!" name="message" onChange={this.handleChange} value={this.state.message} />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default MessageForm;
