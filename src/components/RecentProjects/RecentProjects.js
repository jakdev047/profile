import React, { Component, Fragment } from 'react';
import {Link} from "react-router-dom";
import {Container,Row,Col,Card} from 'react-bootstrap';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class RecentProjects extends Component {
  constructor(){
    super();
    this.state = {
      myData: []
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.Project3).then(result=>{
      // json data capture
      this.setState({
        myData: result
      });
    }).catch(error=>console.log(error));
  }

  render() {
    const listProject = this.state.myData;

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
          <h2 className="sectionTitle">recent projects</h2>
          <Row>
             { listView }
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default RecentProjects;
