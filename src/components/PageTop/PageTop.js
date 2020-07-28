import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class PageTop extends Component {
  render() {
    return (
      <Fragment>
        <div className="topPageBaner">
          <div className="topPageOverlay"></div>
          <Container className="topPageContent">
            <Row>
              <Col className="text-center">
              <h4 className="pageTitle">{this.props.pageTitle}</h4>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default PageTop;