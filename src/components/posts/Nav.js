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
    console.log("Categories Length");
    console.log(this.props.categories.length);
    for (var i=0; i < this.props.categories.length; i++) {
      navLinks.push(
        <NavLink
          className='navlink link'
          key={ i + 1 }
          to={ '/posts/' + this.props.categories[i].slug }
        >
          { this.props.categories[i].name }
        </NavLink>
      );
    }
    navLinks.push(
      <NavLink
        className='navlink link'
        key={ 0 }
        to={ '/posts' }
      >
        { "All" }
      </NavLink>
    )
    return (navLinks);
  }

  render() {
    return(
      <HashRouter>
        <nav className="posts-navigation">
          { this.renderNavLinks() }
        </nav>
      </HashRouter>
    );
  }

}

Nav.propTypes = {
  categories: PropTypes.array,
};

export default Nav;
