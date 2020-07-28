import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from "react-router-dom";

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class Courses extends Component {
  constructor(){
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.CourseHome).then(result=>{
      // json data capture
      this.setState({
        myData: result
      });
    }).catch(error=>console.log(error));
  }

  render() {
    const listCourses = this.state.myData;

    const listView = listCourses.map( item=> {
      return <Col lg={6} md={12} sm={12} key={item.id}>
              <Row>
                <Col lg={6} md={12}>
                  <img className="courseImg" src={item.small_img} alt="course-img"/>
                </Col>
                <Col lg={6} md={12}>
                  <h5 className="courseTitle">{item.short_title}</h5>
                  <p className="courseDes">{item.short_des}</p>
                  <Link className="courseBtn" to={`/single-course/${item.id}/${item.short_title}`}>
                    details
                  </Link>
                </Col>
              </Row>
            </Col>
    });

    return (
      <Fragment>
        <Container>
          <h2 className="sectionTitle">our courses</h2>
          <Row>
            { listView }
          </Row>
          
        </Container>
      </Fragment>
    )
  }
}

export default Courses;
