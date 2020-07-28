import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons';
import {faFacebook,faYoutube} from '@fortawesome/free-brands-svg-icons';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class Footer extends Component {
  constructor(){
    super();
    this.state = {
      address: '',
      email: '',
      phone: '',
      facebook: '',
      youtube: '',
      footer_credit: ''
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.Footer).then(result=>{
      // json data capture
      this.setState({
        address: result[0]['address'],
        email: result[0]['email'],
        phone: result[0]['phone'],
        facebook: result[0]['facebook'],
        youtube: result[0]['youtube'],
        footer_credit: result[0]['footer_credit']
      });
    }).catch(error=>console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-5">
              <h2 className="cardTitle text-capitalize">follow me</h2>
              <ul className="footerList">
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={`//${this.state.facebook}`} className="fSocialIcon">
                    <FontAwesomeIcon icon={faFacebook} className="iconBullet" /> 
                    Facebook
                  </a> 
                </li>
                <li>
                  <a target="_blank" rel="noopener noreferrer" href={`//${this.state.youtube}`} className="fSocialIcon">
                    <FontAwesomeIcon icon={faYoutube} className="iconBullet" /> 
                    Youtube
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5">
              <h2 className="cardTitle text-capitalize">address</h2>
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
            <Col lg={3} md={6} sm={12} className="p-5">
              <h2 className="cardTitle text-capitalize">information</h2>
              <ul className="footerList">
                <li> <Link to="/about"> about me </Link> </li>
                <li> <Link to="/contact"> contact me </Link>  </li>
              </ul>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-5">
              <h2 className="cardTitle text-capitalize">legal</h2>
              <ul className="footerList">
                <li> <Link to="/refund"> Refund Policy </Link> </li>

                <li> <Link to="/terms">  Terms And Condition </Link> </li>

                <li> <Link to="/policy"> Privacy Policy </Link>  </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <Container fluid={true} className="copyrightSection text-center text-capitalize">
          <a href="#" className="copyrightLink">{this.state.footer_credit}</a>
        </Container>
      </Fragment>
    )
  }
}
export default Footer;
