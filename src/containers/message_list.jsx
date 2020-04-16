import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Components
import Message from '../components/message';
import MessageForm from '../containers/message_form';

// Actions
import { getMessages, createMessage } from '../actions/index';

class MessageList extends Component {
  componentWillMount() {
    // Dispatch an action to update the Redux State tree
    this.props.getMessages();
  }

  renderNoMessages = () => {
    return (
      <p>There are no messages...</p>
    );
  }

  renderMessages = () => {
    const { messages } = this.props;
    return messages.map((message) => {
      return <Message message={message} key={message.id} />;
    });
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="message-list">
        <h4>Channel #general</h4>
        <div className="messages-container">
          {messages.length > 0 ? this.renderMessages() : this.renderNoMessages()}
        </div>
        <MessageForm
          createMessage={this.props.createMessage}
          getMessages={this.props.getMessages}
        />
      </div>
    );
  }
}

// To make actions from the Store available inside 'props'
const mapDispatchToProps = {
  getMessages,
  createMessage
};

// To make Redux state available to other components
function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
