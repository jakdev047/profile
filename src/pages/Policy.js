import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Policy from '../components/PrivacyPolicy/PrivacyPolicy'
import Footer from '../components/Footer/Footer'

class PolicyPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Policy"/>
        <PageTop pageTitle="Privacy Policy"/>
        <Policy/>
        <Footer/>
      </Fragment>
    )
  }
}

export default PolicyPage;