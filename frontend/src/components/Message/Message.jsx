import React, { Component } from "react";
import './Message.scss';

class Message extends Component {
    constructor(props) {
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {
        const { message } = this.state;
        const isSystem = message.user === "system";
        return (
            <div className={`message-container ${isSystem ? "system-message" : "user-message"}`}>
                {!isSystem && <div className="message-sender">{message.user}</div>}
                <div className="message-body">{message.body}</div>
            </div>
        );
    }
}

export default Message;
