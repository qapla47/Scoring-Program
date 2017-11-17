import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

class DayCheckBoxes extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div>

        <ButtonGroup>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>Mon</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Tue</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Wed</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>Thu</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(5)} active={this.state.cSelected.includes(5)}>Fri</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(6)} active={this.state.cSelected.includes(6)}>Sat</Button>
          <Button color="primary" onClick={() => this.onCheckboxBtnClick(7)} active={this.state.cSelected.includes(7)}>Sun</Button>
        </ButtonGroup>
        <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
      </div>
    );
  }
}

export default DayCheckBoxes;