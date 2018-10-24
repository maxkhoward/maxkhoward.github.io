import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import classNames from 'classnames';
import history from '../../history';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.renderNavLinks = this.renderNavLinks.bind(this);
    this.setPath = this.setPath.bind(this);
  }

  renderNavLinks() {
    const navLinks = [];
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
        to={ '/posts/' }
      >
        { "All" }
      </NavLink>
    )
    return (navLinks);
  }

  setPath(subPath) {
    return function () {
      history.push('/#/posts/' + subPath);
    }
  }

  render() {
    return(
      <HashRouter>
        <nav className={ classNames('posts-navigation', { 'nav-hidden': this.props.hidden }, { 'nav-show': !this.props.hidden }) }>
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
