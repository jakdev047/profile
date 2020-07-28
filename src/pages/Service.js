import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import ContactSection from '../components/ContactSection/ContactSection'

class ServicePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Services"/>
        <PageTop pageTitle="get my services"/>
        <Services/>
        <ContactSection />
        <Footer/>
      </Fragment>
    )
  }
}

export default ServicePage;