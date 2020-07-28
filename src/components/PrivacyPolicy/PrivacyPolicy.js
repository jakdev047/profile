import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

import ReactHtmlParser from 'react-html-parser';

class PrivacyPolicy extends Component {
  constructor(){
    super();
    this.state = {
      desc: '...'
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.Information).then(result=>{
      // json data capture
      this.setState({
        desc: result[0]['Privacy']
      });
    }).catch(error=>console.log(error));
  }
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              {ReactHtmlParser(this.state.desc)}
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default PrivacyPolicy;