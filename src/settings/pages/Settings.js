import React from 'react';

import SettingsList from '../components/SettingsList';

const Settings = () => {
    const OPTIONS = [
        {
            id: 'profile',
            name: 'Profile',
            msg: 'Hello world'
        },
        {
            id: 'account',
            name: 'Account',
            msg: 'Hello world'
        },
        {
            id: 'chats Info',
            name: 'Chats',
            msg: 'Hello world'
        },
        {
            id: 'notifications',
            name: 'Notifications',
            msg: 'Hello world'
        },
        {
            id: 'help',
            name: 'Help',
            msg: 'Hello world'
        },
        {
            id: 'Invite a friend',
            name: 'Invite a friend',
            msg: 'Hello world'
        }
    ];
    return <SettingsList items={OPTIONS} />;
};

export default Settings;