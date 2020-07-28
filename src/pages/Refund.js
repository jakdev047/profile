import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Refund from '../components/Refund/RefundSection'
import Footer from '../components/Footer/Footer'
import ContactSection from '../components/ContactSection/ContactSection'

class RefundPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Refund"/>
        <PageTop pageTitle="Refund Policy"/>
        <Refund/>
        <Footer/>
      </Fragment>
    )
  }
}

export default RefundPage;