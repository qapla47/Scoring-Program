import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class ScoreRace extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Form>
        <h3><strong>Score A Race</strong></h3>
        
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Day of Week </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>

        <FormGroup id="userFirstName">
          <Label for="userFirstName">First Name</Label>
          <Input type="text" name="userFirstName" id="userFirstName" />
        </FormGroup>
       
        <FormGroup id="userLastName">
          <Label for="userLastName">Last Name</Label>
          <Input type="text" name="userLastName" id="userLastName" />
        </FormGroup>

        <FormGroup>
          <Label for="userName">User Name</Label>{' '}
          <Input type="text" name="userName" id="userName" placeholder="Your preferred user name" />
        </FormGroup>

        <FormGroup>
          <Label for="userPassword">Password</Label>{' '}
          <Input type="password" name="userPassword" id="userPassword" placeholder="at least 6 characters long, numbers and letters" />
        </FormGroup>

        {/* <Button>Submit</Button> */}

        <FormGroup id="clubAffiliation">
          <Label for="clubAffiliation">Club Affiliation</Label>
          <Input type="text" name="clubAffiliation" id="clubAffiliation" placeholder="Your club's name here" />
          <Button color="secondary" disabled>+ Additional Clubs</Button>{' '}Additional Club Affiliation to be added
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Certified PRO? 
          </Label>
          <Label for="usSailingNumber"> What is your US Sailing Member Number</Label>
          <Input type="text" name="usSailingNumber" id="usSailingNumber" placeholder="Member Number"/>AAS does not collect user data on US Sailing Membership numbers, this is for future aims to provide the certified PRO with documentation that could be easily uploaded to SOARS.
        </FormGroup>
        
        <Button>Submit</Button>
      </Form>
    );
  }
}