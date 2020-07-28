import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class ProjectDetails extends Component {

  constructor(props){
    super();
    this.state = {
      myProjectId: props.id,
      img_two: '',
      project_name:'',
      short_description: '',
      project_features: '',
      live_preview: ''
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.ProjectDetails+this.state.myProjectId)
    .then(result=>{
      // json data capture
      this.setState({
        img_two: result[0]['img_two'],
        project_name: result[0]['project_name'],
        short_description: result[0]['short_description'],
        project_features: result[0]['project_features'],
        live_preview: result[0]['live_preview']
      });
    })
    .catch(error=>console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <img src={this.state.img_two} alt="project-img"/>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h2 className="courseTitle">{this.state.project_name}</h2>
              <p className="projectDes">
                {this.state.short_description}
              </p>
              <ul>
                {ReactHtmlParser(this.state.project_features)}
              </ul>
              <Button target="_blank" href={`//${this.state.live_preview}`} variant="primary">Live Preview</Button>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails;