import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import AboutDescription from '../components/AboutDescrion/AboutDescription';

class About extends Component {

  componentDidMount(){
    window.scroll(0,0)
  }

  render() {
    return (
      <Fragment>
        <TopNavigation title="About"/>
        <PageTop pageTitle="about me"/>
        <AboutDescription/>
        <Footer/>
      </Fragment>
    )
  }
}
export default About;