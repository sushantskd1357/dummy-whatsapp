import React from 'react'

import SettingsItem from './SettingsItem';
import './SettingsList.css';

const SettingsList = (props) => {
    return (
        <ul className="settings-list">
            {props.items.map(setting => (
                <SettingsItem 
                    key={setting.id}
                    id={setting.id}
                    name={setting.name}
                    msg={setting.msg}
                />
            ))}
        </ul>
    );
};

export default SettingsList;
