import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import Terms from '../components/TermsCondition/TermsCondition'
import Footer from '../components/Footer/Footer'

class TermsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="Terms"/>
        <PageTop pageTitle="Terms of Use"/>
        <Terms/>
        <Footer/>
      </Fragment>
    )
  }
}

export default TermsPage;