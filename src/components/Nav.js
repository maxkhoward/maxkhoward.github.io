import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  NavLink,
  HashRouter
} from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.renderNavLinks = this.renderNavLinks.bind(this);
  }

  renderNavLinks() {
    const navLinks = [];
    for (var i=0; i < this.props.pages.length; i++) {
      navLinks.push(
        <NavLink
          className='navlink link'
          key={ i }
          to={ this.props.pages[i].slug } >
          { this.props.pages[i].text }
        </NavLink>
      );
    }
    return (navLinks);
  }

  render() {
    return(
      <HashRouter>
        <nav className="navigation">
          <div className="nav-left">
            <NavLink className="navlink" to="/">Home</NavLink>
          </div>
          <div className="nav-right">
            { this.renderNavLinks() }
          </div>
        </nav>
      </HashRouter>
    );
  }

}

Nav.propTypes = {
  pages: PropTypes.array,
};

export default Nav;
