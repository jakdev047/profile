import React, { Component, Fragment } from "react";
import {Navbar,Nav} from 'react-bootstrap';

import whiteLogo from '../../asset/image/navlogo.svg';
import BlueLogo from '../../asset/image/navlogoScroll.svg';

import { NavLink} from "react-router-dom";

class TopNavigation extends Component {
  constructor(props){
    super();

    this.state = {
      navBarTitle: 'navTitle',
      navBarLogo: [whiteLogo],
      navBarBg: 'navBackground',
      navBarItem: 'navItem',
      navVarient: 'dark',
      pageTitle: props.title
    }
  }

  onScroll = () => {
    if(window.scrollY > 100) {
      this.setState({
        navBarTitle: 'navTitleScroll',
        navBarLogo: [BlueLogo],
        navBarBg: 'navBackgroundScroll',
        navBarItem: 'navItemScroll',
        navVarient:  'light'
      })
    }
    else if(window.scrollY < 100) {
      this.setState({
        navBarTitle: 'navTitle',
        navBarLogo: [whiteLogo],
        navBarBg: 'navBackground',
        navBarItem: 'navItem',
        navVarient:  'dark'
      })
    }
  }

  // real-time event
  componentDidMount(){
    window.addEventListener('scroll',this.onScroll);
  }

  // dom render
  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar variant={this.state.navVarient} className={this.state.navBarBg} fixed="top" collapseOnSelect expand="lg" bg="dark">
          <Navbar.Brand>
            <NavLink to="/" className={this.state.navBarTitle}>
              <img src={this.state.navBarLogo} />  Jubayer Alam
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav className="menu">
              <NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/">Home</NavLink>
              <NavLink exact activeStyle={{color:'#0073e6'}}  className={this.state.navBarItem} to="/services">Services</NavLink>
              <NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/courses">Courses</NavLink>
              <NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/project">Project</NavLink>
              <NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/contact">Contact</NavLink>
              <NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/about">About</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
