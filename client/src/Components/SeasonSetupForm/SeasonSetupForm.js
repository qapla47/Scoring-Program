import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

export default class SSF extends React.Component {
  render() {
    return (
      <Form>
        <h3>
          <strong>Season Setup</strong>
        </h3>
        <FormGroup id="seasonName">
          <Label for="seasonName">What is your Season called?</Label>
          <Input
            type="text"
            name="seasonName"
            id="seasonName"
            placeholder="ie. current year"
          />
        </FormGroup>

        <FormGroup>
          <Label for="startDate">When does your season start?</Label>
          <Input
            type="date"
            name="startDate"
            id="startDate"
            placeholder="Start Date"
          />
        </FormGroup>

        <FormGroup>
          <Label for="endDate">When does your season end?</Label>
          <Input
            type="date"
            name="endDate"
            id="endDate"
            placeholder="End Date"
          />
        </FormGroup>

        <FormGroup>
          <Label for="seasonSeriesTitles">
            Does your club have multiple series in one season?
          </Label>
          <Input
            type="textarea"
            name="seasonSeriesTitles"
            id="seasonSeriesTitles"
            placeholder="ie. Spring, Summer, Fall. Please separate each series with a comma"
          />
          {/* <button for="addClubSeries">Enter Series</button> */}
        </FormGroup>

        <FormGroup>
          <Label for="weeksInSeries">
            Select the number of weeks scheduled for a series
          </Label>
          <Input type="select" name="weeksInSeries" id="weeksInSeries">
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Input>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Overall Season Scoring?
          </Label>
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
