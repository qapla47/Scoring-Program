import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class CRF extends React.Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h2>User Registration Form</h2>
            <form action="" method="" >
              
              <div class="form-group">
                <label for="firstName">First Name</label>
                <label type="firstName" class="form-control" id="firstName"/>
              </div>
              
              <div class="form-group">
                <label for="lastName">Last Name</label>
                <label type="lastName" class="form-control" id="lastName"/>
              </div>

              <div class="form-group">
                <label for="clubAffiliation">Club Affiliation</label>
                <label type="clubAffiliation" class="form-control" id="clubAffiliation"/>
                
              </div>

            </form>
          </div>
        </div>
      </div>