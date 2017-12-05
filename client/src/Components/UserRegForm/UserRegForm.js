import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class URF extends React.Component {
  render() {
    return (
      <Form>
        <h3>
          <strong>User Registration Form</strong>
        </h3>

        <FormGroup id="userFirstName">
          <Label for="userFirstName">First Name</Label>
          <Input type="text" name="userFirstName" id="userFirstName" />
        </FormGroup>

        <FormGroup id="userLastName">
          <Label for="userLastName">Last Name</Label>
          <Input type="text" name="userLastName" id="userLastName" />
        </FormGroup>

        <FormGroup>
          <Label for="userName">User Name</Label>{" "}
          <Input
            type="text"
            name="userName"
            id="userName"
            placeholder="Your preferred user name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="userPassword">Password</Label>{" "}
          <Input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="at least 6 characters long, numbers and letters"
          />
        </FormGroup>

        {/* <Button>Submit</Button> */}

        <FormGroup id="clubAffiliation">
          <Label for="clubAffiliation">Club Affiliation</Label>
          <Input
            type="text"
            name="clubAffiliation"
            id="clubAffiliation"
            placeholder="Your club's name here"
          />
          <Button color="secondary" disabled>
            + Additional Clubs
          </Button>{" "}
          Additional Club Affiliation to be added
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Certified PRO?
          </Label>
          <Label for="usSailingNumber">
            {" "}
            What is your US Sailing Member Number
          </Label>
          <Input
            type="text"
            name="usSailingNumber"
            id="usSailingNumber"
            placeholder="Member Number"
          />AAS does not collect user data on US Sailing Membership numbers,
          this is for future aims to provide the certified PRO with
          documentation that could be easily uploaded to SOARS.
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
