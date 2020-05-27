import React from 'react'

import Card from '../../shared/components/UIElements/Card';
import './ChatItem.css';

const ChatItem = props => { 
    return (
        <li className="user-item">
            <Card className="user-item__content">
                {/* <div className="user-item__image">
                    <Avatar img src={props.image} alt={props.name} />
                </div>  */}
                <div className="user-item__info">
                    <h3>{props.msg}</h3>
                </div>
            </Card>
        </li>
    )
};

export default ChatItem;