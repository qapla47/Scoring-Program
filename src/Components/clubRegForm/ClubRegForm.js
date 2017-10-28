import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CRF extends React.Component {
  render() {
    return (
      <Form>
        <h3>Club Registration Form</h3>
        <FormGroup id="clubName">
          <Label for="clubName">Club Name</Label>
          <Input type="text" name="clubName" id="clubName" placeholder="What club are you registering?" />
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

        <FormGroup>
          <Label for="clubFleets">Text Area</Label>
          <Input type="textarea" name="clubFleets" id="clubFleets" />
          <button for="addClubFleets">Enter Fleet</button>
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}