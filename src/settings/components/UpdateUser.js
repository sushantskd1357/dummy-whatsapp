import React from 'react'
import { useParams } from 'react-router-dom';
 
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';
// import Settings from '../pages/Settings';

const USERS = [
    {
        creator: 'u1',
        name: 'Sushant',
        image: 
            'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    },
];

const UpdateUser = () => {
    const userId = useParams().userId;

    const identifiedUser = USERS.find(creator => creator.id === userId);

    if (!identifiedUser) {
        return (
            <div className="center">
                <h2>Could not find place!</h2>
            </div>
        )
    };

    return (
        <form>
            <Input 
                element="input" 
                id="name" 
                type="text" 
                label="Your Name" 
                validators={[VALIDATOR_REQUIRE]} 
                errorText="Please enter a name."
                onInput={() => {}}
                value={identifiedUser.name}
                valid={true}
            />
            <input 
                element="input"
                id="image"
                type="title"
                label="Your Image"
                value={identifiedUser.image}
                valid={true}
            />
            <Button type="submit" disabled={true}>
                UPDATE USER
            </Button>
        </form>
    )
};

export default UpdateUser;