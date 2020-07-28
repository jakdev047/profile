import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class AllCourses extends Component {

  constructor(){
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.CourseAll).then(result=>{
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
                <Col lg={6} md={12} className="mb-3">
                  <img className="courseImg" src={item.small_img} alt="course-img"/>
                </Col>
                <Col lg={6} md={12} className="mb-3">
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
        <Container className="my-5">
          <Row>{listView}</Row>
        </Container>
      </Fragment>
    )
  }
}

export default AllCourses;