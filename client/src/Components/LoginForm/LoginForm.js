import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LF extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup id="email">
          <Label for="loginEmail">Email</Label>{' '}
          <Input type="email" name="loginEmail" id="loginEmail" placeholder="something@idk.cool" />
        </FormGroup>
        {' '}
        <FormGroup id="password">
          <Label for="loginPassword">Password</Label>{' '}
          <Input type="password" name="loginPassword" id="loginPassword" placeholder="don't tell!" />
        </FormGroup>
        {' '}
        <Button id="submitButton">Submit</Button>
        {' '}
        <FormGroup id="register">
        {'Don\'t have a login yet? Head over here to sign up!'}{' '}
        <Button id="Register">Register</Button>
        </FormGroup>
      </Form>
    );
  }
}