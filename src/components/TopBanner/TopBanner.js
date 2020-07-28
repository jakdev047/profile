import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class TopBanner extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      subTitle: ''
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.welcomeText).then(result=>{
      // json data capture
      this.setState({
        title: result[0]["home_title"],
        subTitle: result[0]["home_subtitle"]
      })
    }).catch(error=> {
      // json data capture
      this.setState({
        title: '???',
        subTitle: '???'
      })
    });
  }

  render() {
    return (
      <Fragment>
        <div className="topFixedBaner">
          <div className="topFixedOverlay"></div>
          <Container className="topContent">
            <Row>
              <Col className="text-center">
                <h2 className="topTitle">{this.state.title}</h2>
                <h4 className="topSubTitle">{this.state.subTitle}</h4>
                <Button variant="primary">More Info</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default  TopBanner;
