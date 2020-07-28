import React, { Component, Fragment } from 'react';

import TopNavigation from '../components/TopNavigation/TopNavigation';
import TopBanner from '../components/TopBanner/TopBanner';
import Services from '../components/Services/Services';
import Analysis from '../components/Analysis/Analysis';
import Summary from '../components/Summary/Summary';
import RecentProjects from '../components/RecentProjects/RecentProjects';
import Courses from '../components/Courses/Courses';
import Vedieo from '../components/Vedieo/Vedieo';
import Reviews from '../components/Reviews/Reviews';
import Footer from '../components/Footer/Footer';

class Home extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>

        <TopNavigation title="Home"/>
        <TopBanner/>
        <Services/>
        <Analysis/>
        <Summary/>
        <RecentProjects/>
        <Courses/>
        <Vedieo/>
        <Reviews/>
        <Footer/>

      </Fragment>
    )
  }
}
export default Home;