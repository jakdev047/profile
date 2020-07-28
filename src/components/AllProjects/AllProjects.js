import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {Container,Row,Col,Card} from 'react-bootstrap';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';


class AllProjects extends Component {
  constructor(){
    super();
    this.state = {
      allProjectList: []
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.ProjectAll).then(result=>{
      // json data capture
      this.setState({
        allProjectList: result
      });
    }).catch(error=>console.log(error));
  }

  render() {
    const listProject = this.state.allProjectList;

    const listView = listProject.map( item=> {
      return <Col lg={4} md={6} sm={12} key={item.id}>
              <Card className="text-center singleProjectCard">
                <Card.Img variant="top" src={item.img_one} />
                <Card.Body>
                  <Card.Title className="projectTitle">{item.project_name}</Card.Title>
                  <Card.Text className="projectDes">{item.short_description}</Card.Text>

                  <Link to={`/single-project/${item.id}/${item.project_name}`} className="courseBtn">
                    Details
                  </Link>

                </Card.Body>
              </Card>
            </Col>
    });
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            {listView}
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default AllProjects;