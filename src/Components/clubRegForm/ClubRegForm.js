import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CRF extends React.Component {
  render() {
    return (
      <Form>
        <h3><strong>Club Registration Form</strong></h3>
        
        <FormGroup id="clubName">
          <Label for="clubName">Club Name</Label>
          <Input type="text" name="clubName" id="clubName" placeholder="What club are you registering?" />
        </FormGroup>

        <FormGroup id="clubAddress">
          <Label for="clubAddress">Club Address</Label>
          <Input type="textarea" name="clubAddress" id="clubAddress" placeholder="Where is your club located?" />
        </FormGroup>
       
        <FormGroup>
          <Label for="raceDaysSelectMulti">Select your race days</Label>
          <Input type="select" name="raceDays" id="raceDaysSelectMulti" multiple>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </Input>
        </FormGroup>

       
        
        <Button>Submit</Button>
      </Form>
    );
  }
}