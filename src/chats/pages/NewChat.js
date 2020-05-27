import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './ChatForm.css';

const NewChat = () => {
  const [formState, inputHandler] = useForm(
    {
        message: {
            value: '',
            isValid: false
        },
    },
    false
  );

  const chatSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!
  };

  return (
    <form className="place-form" onSubmit={chatSubmitHandler}>
      <Input
        id="message"
        element="textarea"
        label="Message"
        validators={[VALIDATOR_REQUIRE]}
        errorText="Please enter your message."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        SEND MESSAGE
      </Button>
    </form>
  );
};

export default NewChat;
