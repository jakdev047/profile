import React, { Component, Fragment } from 'react';
import TopNavigation from '../components/TopNavigation/TopNavigation';
import CourseDetails from '../components/CourseDetails/CourseDetails';
import Footer from '../components/Footer/Footer';

import RestClient from '../restApi/restClient';
import AppUrl from '../restApi/appUrl';

class SingleCourse extends Component {
  constructor({match}){
    super();
    this.state = {
      coursePassedId: match.params.courseID,
      courseData: []
    }
  }
  componentDidMount(){
    window.scroll(0,0);

    RestClient.getRequest(AppUrl.CourseDetails+this.state.coursePassedId)
    .then(result=>{
      // json data capture
      this.setState({
        courseData: result
      });
    })
    .catch(error=>console.log(error));

  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Course Details"/>
        <CourseDetails courseData={this.state.courseData}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default SingleCourse;