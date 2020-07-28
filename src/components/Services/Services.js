import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class Services extends Component {
  constructor(){
    super();
    this.state = {
      myData: []
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.Services).then(result=>{
      // json data capture
      this.setState({
        myData: result
      });
    }).catch(error=>console.log(error));
  }

  render() {

    const listService = this.state.myData;

    const listView = listService.map( item=> {
      return <Col lg={4} md={6} sm={12} key={item.id}>
              <div className="serviceCard text-center">
                <img src={item.service_logo} alt="service-logo"/>
                <h2 className="serviceTitle">{item.service_name}</h2>
                <p className="service-subtitle">{item.service_description}</p>
              </div>
            </Col>
    });
    return (
      <Fragment>
        <Container>
          <h2 className="sectionTitle">my services</h2>
          <Row>
            { listView }
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default  Services;
