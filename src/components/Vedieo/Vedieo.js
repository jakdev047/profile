import React, { Component, Fragment } from 'react';
import {Container,Row,Col,Modal,Button} from 'react-bootstrap';
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome';
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons';
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';
import courseImg from '../../asset/image/courses01.png';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class Vedieo extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
      video_description: '',
      video_url: ''
    }
  }

  componentDidMount(){
    RestClient.getRequest(AppUrl.VideoHome).then(result=>{
      // json data capture
      this.setState({
        video_description: result[0]['video_description'],
        video_url: result[0]['video_url'],
      });
    }).catch(error=>console.log(error));
  }

  modalClose = () => this.setState({show:false});
  modalOpen = () => this.setState({show:true});

  // dom render
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="vedieoCard text-center">
              <p className="vedioTitle">how i do</p>
              <p className="vedioDes">
                {this.state.video_description}
              </p>
              <p><FontAwesomeIcon onClick={this.modalOpen} icon={faPlayCircle} className="playBtn" /></p>
            </Col>
          </Row>
        </Container>

        {/* Modal Component */}
        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
          <Modal.Body>
            <Player poster={courseImg} playsInline>
              <source  src={this.state.video_url} />
              <BigPlayButton position="center"/>
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}
export default Vedieo;