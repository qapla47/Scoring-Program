import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class HandicapDropDown extends React.Component {
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
      <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
        <DropdownToggle caret>
          Handicap Method
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>One Design</DropdownItem>
          <DropdownItem divider />
          <DropdownItem disabled>IRC</DropdownItem>
          <DropdownItem disabled>MORC</DropdownItem>
          <DropdownItem disabled>ORR</DropdownItem>
          <DropdownItem disabled>PHRF TOD</DropdownItem>
          <DropdownItem disabled>PHRF TOT</DropdownItem>
          <DropdownItem disabled>Portsmouth</DropdownItem>
          <DropdownItem divider />
          <DropdownItem disabled>Opti</DropdownItem>
          <DropdownItem disabled>Laser Master</DropdownItem>
          <DropdownItem divider />
          <DropdownItem disabled>Match Racing</DropdownItem>
          <DropdownItem disabled>Team Racing</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}