import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  NavLink,
  HashRouter
} from "react-router-dom";
import classNames from 'classnames';

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
          <i className={ classNames("fas", this.props.pages[i].icon) }></i>
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
            <NavLink className="navlink link" to="/">
              <img className="logo" src="https://i.imgur.com/Zu9tTw9.png" alt="Max Howard logo" />
            </NavLink>
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
