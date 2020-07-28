import React, { Component, Fragment } from 'react'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import PageTop from '../components/PageTop/PageTop'
import ProjectDetails from '../components/ProjectDetails/ProjectDetails'
import Footer from '../components/Footer/Footer'

class SingleProject extends Component {
  constructor({match}){
    super();
    this.state = {
      projectPassedId: match.params.projectID,
      projectPassedName: match.params.projectName
    }
  }
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNavigation title="ProjectDetails"/>
        <PageTop pageTitle={this.state.projectPassedName}/>
        <ProjectDetails id={this.state.projectPassedId} />
        <Footer/>
      </Fragment>
    )
  }
}

export default SingleProject;