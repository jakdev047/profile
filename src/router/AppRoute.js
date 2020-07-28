import React, { Component,Fragment } from 'react';
import { Switch,Route} from "react-router-dom";

import Home from '../pages/Home';
import Service from '../pages/Service';
import Courses from '../pages/Courses';
import SingleCourse from '../pages/SingleCourse';
import Projects from '../pages/Projects';
import SingleProject from '../pages/SingleProject';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Refund from '../pages/Refund';
import Terms from '../pages/Terms';
import Policy from '../pages/Policy';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>

        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/services' component={Service}/>
          <Route exact path='/courses' component={Courses}/>
          <Route exact path='/single-course/:courseID/:courseName' component={SingleCourse}/>
          <Route exact path='/project' component={Projects}/>
          <Route exact path='/single-project/:projectID/:projectName' component={SingleProject}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/refund' component={Refund}/>
          <Route exact path='/terms' component={Terms}/>
          <Route exact path='/policy' component={Policy}/>

        </Switch>

      </Fragment>
    )
  }
}

export default  AppRoute;