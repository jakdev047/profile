import React, { Component, Fragment } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {BarChart,Bar,ResponsiveContainer,XAxis,Tooltip} from 'recharts';

import AppUrl from '../../restApi/appUrl';
import RestClient from '../../restApi/restClient';

import ReactHtmlParser from 'react-html-parser';

class Analysis extends Component {
  constructor() {
    super();
    this.state= {
      data: [],
      desc: '...'
    }
  }
  componentDidMount(){
    RestClient.getRequest(AppUrl.ChartData).then(result=>{
      // json data capture
      this.setState({
        data: result
      });
    }).catch(error=>console.log(error));

    RestClient.getRequest(AppUrl.TechDesc).then(result=>{
      // json data capture
      this.setState({
        desc: result[0]['tech_description']
      });
    }).catch(error=>console.log(error));
  }
  // dom render
  render() {
    var blue = "rgba(0,115,230,.8)";
    return (
      <Fragment>
        <Container>
          <h2 className="sectionTitle">Technology Used</h2>
          <Row>
            <Col style={{width:'100%',height:'300px'}} lg={6}>
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="technology"/>
                  <Tooltip/>
                  <Bar dataKey="projects" fill={blue} />
                </BarChart>
              </ResponsiveContainer>
            </Col>
            <Col lg={6}>
              <div className="des text-justify">
                { ReactHtmlParser( this.state.desc )}
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Analysis;