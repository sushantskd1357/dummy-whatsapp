import React from 'react'

import ChatItem from './ChatItem';
import Card from '../../shared/components/UIElements/Card';
import './ChatList.css';

const ChatList = props => { 
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No chats found.</h2>
                </Card>
            </div>
        )
    }

    return (
        <ul className="user-list">
            {props.items.map(chat => (
                <ChatItem 
                    key={chat.id}
                    id={chat.id}
                    msg={chat.msg}
                />
            ))}
        </ul>
    );
};

export default ChatList;