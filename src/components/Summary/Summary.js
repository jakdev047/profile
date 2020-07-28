import React, { Component, Fragment } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import {Container,Row,Col,Card} from 'react-bootstrap';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';

class Summary extends Component {
  render() {
    return (
      <Fragment>
        <div className="topFixedBaner topFixedSummaryBaner summarySection">
          <div className="topFixedOverlay topFixedSummaryOverlay"></div>
          <Container>
            <Row className="text-center">
              <Col lg={8} md={6} sm={12}>
                <Row className="countSection">
                  <Col>
                    <h1 className="countNumber">
                      <CountUp start={0} end={100}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Total project</h4>
                    <hr className="bg-white w-25 mx-auto"/>
                  </Col>
                  <Col>
                    <h1 className="countNumber">
                      <CountUp start={0} end={150}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    </h1>
                    <h4 className="countTitle">Total clients</h4>
                    <hr className="bg-white w-25 mx-auto"/>
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={6} sm={12}>
                <Card  className="workCard">
                  <Card.Body>
                    <Card.Title className="cardTitle">How I Work</Card.Title>
                    <Card.Text className="cardSubTitle">
                      <FontAwesomeIcon icon={faCheckCircle} className="iconBullet" /> Requirement Gathering
                    </Card.Text>
                    <Card.Text className="cardSubTitle">
                      <FontAwesomeIcon icon={faCheckCircle} className="iconBullet" />  System Analysis
                    </Card.Text>
                    <Card.Text className="cardSubTitle">
                      <FontAwesomeIcon icon={faCheckCircle} className="iconBullet" /> Coding Testing
                    </Card.Text>
                    <Card.Text className="cardSubTitle">
                      <FontAwesomeIcon icon={faCheckCircle} className="iconBullet" /> Implementation
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}

export default Summary;
