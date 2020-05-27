import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Sushant',
            image: 
                '../../shared/util/Images/robot.png',
            msg: 'Hello world'
        },
        {
            id: 'u2',
            name: 'Rohan',
            image: 
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            msg: 'Hello world'
        },
        {
            id: 'u3',
            name: 'Yash',
            image: 
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            msg: 'Hello world'
        },
        {
            id: 'u4',
            name: 'Varun',
            image: 
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            msg: 'Hello world'
        },
        {
            id: 'u5',
            name: 'Karan',
            image: 
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            msg: 'Hello world'
        },
        {
            id: 'u6',
            name: 'Hrithik',
            image: 
                'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            msg: 'Hello world'
        }
    ];
    return <UserList items={USERS} />;
};

export default Users;