import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faCheckCircle} from '@fortawesome/free-solid-svg-icons';
// import courseImg from '../../asset/image/courses01.png';
import { Player,BigPlayButton } from 'video-react';
import 'video-react/dist/video-react.css';
import ReactHtmlParser from 'react-html-parser';

class CourseDetails extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    let long_title = '';
    let total_lecture = '';
    let total_student = '';
    let long_des = '';
    let video_url = '';
    let skill_all = '';
    let courses_link = '';

    let singleCourseArray = this.props.courseData;

    if ( singleCourseArray.length === 1 ) {
      long_title = singleCourseArray[0]['long_title'];
      total_lecture = singleCourseArray[0]['total_lecture'];
      total_student = singleCourseArray[0]['total_student'];
      long_des = singleCourseArray[0]['long_des'];
      video_url = singleCourseArray[0]['video_url'];
      skill_all = singleCourseArray[0]['skill_all'];
      courses_link = singleCourseArray[0]['courses_link'];
    }
    
    return (
      <Fragment>
        <div className="topPageBaner">
          <div className="topPageOverlay"></div>
          <Container className="topPageContent">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h3 className="courseFullTitle">{long_title}</h3>
                <p className="courseSubTitle">Total Lecture= {total_lecture}</p>
                <p className="courseSubTitle">Total Student= {total_student}</p>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <p className="course-des-top"> {long_des} </p>
              </Col>

            </Row>
          </Container>
        </div>
        <div className="course-details-content mt-5">
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Card>
                  <Card.Body>
                    <Card.Title className="cardTitle">Skill You Get</Card.Title>
                    {ReactHtmlParser(skill_all)}
                    <Button target="_blank" href={`//${courses_link}`} variant="primary">Buy Now</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Player  playsInline>
                  <source  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                  <BigPlayButton position="center"/>
                </Player>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    )
  }
}
export default CourseDetails;