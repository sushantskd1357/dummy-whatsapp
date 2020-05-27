import React from 'react'
import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import './SettingsItem.css';

const SettingsItem = props => { 
    return (
        <li className="setting-item">
            <Card className="setting-item__content">
                <Link to={`/settings/${props.id}`}>
                    <div className="setting-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.msg}</h3>
                    </div>
                </Link>
            </Card>
        </li>
    )
};

export default SettingsItem;