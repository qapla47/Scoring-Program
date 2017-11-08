import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="loginEmail">Email</Label>{' '}
          <Input type="email" name="loginEmail" id="loginEmail" placeholder="something@idk.cool" />
        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="loginPassword">Password</Label>{' '}
          <Input type="password" name="loginPassword" id="loginPassword" placeholder="don't tell!" />
        </FormGroup>
        {' '}
        <Button id="submitButton">Submit</Button>
        {' '}{' '}
        {'Not a user yet? Head over here to sign up!'}
        <Button id="Register">Register</Button>
      </Form>
    );
  }
}