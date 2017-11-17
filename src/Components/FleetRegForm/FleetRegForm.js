import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, ButtonGroup } from 'reactstrap';
import DayCheckBoxes from './ButtonCheckBoxes';
import HandicapDropDown from './HandicapDropDown';


export default class FRF extends React.Component {
  render() {
    return (
      <Form>
        <h3><strong>Fleet Registration Form</strong></h3>
        
        <FormGroup id="fleetNames">
          <Label for="fleetNames">Fleet Names</Label>
          <Input type="text" name="fleetNames" id="fleetNames" placeholder="Add your fleets here" />
          <Button color="secondary" disabled>+ Additional Fleets</Button>{' '}
        </FormGroup>

        <FormGroup id="fleetRaceDays">
          <Label for="fleetRaceDays">What days does this fleet race?</Label>{'\nFleet 1'} <DayCheckBoxes />
        </FormGroup>
       
        <FormGroup id="handicapMethod">
          <Label for="handicapMethod">What method of Handicapping does this fleet use?</Label>{'\nFleet 1'} <HandicapDropDown />
        </FormGroup> 
        
        <Button>Submit</Button>
      </Form>
    );
  }
}