import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

class Reviews extends Component {
  constructor(){
    super();
    this.state = {
      myData: []
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.ClientReview).then(result=>{
      // json data capture
      this.setState({
        myData: result
      });
    }).catch(error=>console.log(error));
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      autoplay:true,
      autoplaySpeed:3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const listReview = this.state.myData;

    const listView = listReview.map( item=> {
      return <div key={item.id}>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img className="circleImg mb-3" src={item.client_img} alt="client-img" />
                  <h2 className="cardTitle text-center">{item.client_title}</h2>
                  <p className="cardSubTitle text-center">
                    {item.client_description}
                  </p>
                </Col>
              </Row>
            </div>
    });
    return (
      <Fragment>
        <Container>
          <h2 className="sectionTitle">client says</h2>
          <Slider {...settings}>
            {listView}
          </Slider>
        </Container>
      </Fragment>
    )
  }
}

export default Reviews;
