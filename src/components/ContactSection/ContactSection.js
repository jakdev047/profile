import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class ContactSection extends Component {
  constructor(){
    super();
    this.state = {
      address: '',
      email: '',
      phone: ''
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.Footer).then(result=>{
      // json data capture
      this.setState({
        address: result[0]['address'],
        email: result[0]['email'],
        phone: result[0]['phone']
      });
    }).catch(error=>console.log(error));
  }

  sendContact(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;

    // data post to jsonData
    let jsonObject =  {name:name,email:email,msg:msg};

    RestClient.postRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result=>{
      alert(result);
    }).catch(error=>console.log(error));

    console.log(name,email,msg);
  }

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h2 className="serviceTitle">quick connect</h2>
              <Form>

                <Form.Group>
                  <Form.Label className="service-subtitle">Name</Form.Label>
                  <Form.Control id='name' type="text"  />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="service-subtitle">Email Address</Form.Label>
                  <Form.Control id='email' type="email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label className="service-subtitle">Message</Form.Label>
                  <Form.Control id='msg' as="textarea" rows="3" />
                </Form.Group>

                <Button variant="primary" onClick={this.sendContact}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h2 className="serviceTitle">discuss now</h2>
              <p>{this.state.address}</p>
              <ul className="footerList">
                <li>
                  <FontAwesomeIcon icon={faEnvelope}  /> 
                  {this.state.email}
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone}  /> 
                  {this.state.phone}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ContactSection;
