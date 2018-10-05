import React, { Component } from "react";
import {
  Route,
  HashRouter,
  Switch
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Posts from "./components/posts/Posts";

class Main extends Component {
  constructor(props) {
    super(props);
    this.navLinks = [
      {
        "slug": "/",
        "text": "Home",
        "component": Home
    	},
      {
        "slug": "/stuff",
        "text": "Stuff",
        "component": Stuff
      },
      {
        "slug": "/contact",
        "text": "Contact",
        "component": Contact
      },
      {
        "slug": "/posts",
        "text": "Posts",
        "component": Posts
      }
    ];
  }

  renderPageRoutes() {
    const routes = [];
    for (var i=0; i < this.navLinks.length; i++) {
      if (this.navLinks[i].component){
        routes.push(
          <Route
            key={ i }
            exact={ (this.navLinks[i].slug === "/") }
            path={ this.navLinks[i].slug }
            component={ this.navLinks[i].component }
            name={ this.navLinks[i].slug }
          />
        );
      }
    }
    return (routes);
  }

  render() {
    return (
			<div>
				<HashRouter>

  					<div>
  						<Nav pages={ this.navLinks } />
              <div className="content">
                  { this.renderPageRoutes() }
              </div>
            </div>

				</HashRouter>
			</div>
    );
  }
}
 
export default Main;
