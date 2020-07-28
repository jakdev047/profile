import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import AllCourses from '../components/AllCourses/AllCourses';


class CoursesPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Courses"/>
        <PageTop pageTitle="all courses"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}
export default CoursesPage;