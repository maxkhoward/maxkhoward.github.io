import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  Route,
  HashRouter,
  Switch,
  withRouter
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Posts from "./components/posts/Posts";

let i = 0;

function keyGen() {
  i++
  return (i);
}

function renderPageRoutes() {
  let navLinks = [
    {
      "slug": "/",
      "text": "Home",
      "component": Home,
      "icon": "fa-info"
    },
    {
      "slug": "/stuff",
      "text": "Stuff",
      "component": Stuff,
      "icon": "fa-info"
    },
    {
      "slug": "/contact",
      "text": "Contact",
      "component": Contact,
      "icon": "fa-info"
    },
    {
      "slug": "/posts",
      "text": "Posts",
      "component": Posts,
      "icon": "fa-info"
    }
  ];

  const routes = [];
  for (var i=0; i < navLinks.length; i++) {
    if (navLinks[i].component){
      routes.push(
        <Route
          key={ i }
          exact={ (navLinks[i].slug === "/") }
          path={ navLinks[i].slug }
          component={ navLinks[i].component }
          name={ navLinks[i].slug }
        />
      );
    }
  }
  return (routes);
}

const SomeComponent = withRouter(({ location }) => (

    <div>
      <TransitionGroup>

        <CSSTransition
          key={ keyGen() }
          classNames='slide'
          timeout={600}
          //onEntered={  }
        >
          <Switch location={location}>
            { renderPageRoutes() }
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>

))

class Main extends Component {
  constructor(props) {
    super(props);
    this.navLinks = [
      {
        "slug": "/stuff",
        "text": "Stuff",
        "component": Stuff,
        "icon": "fa-info"
      },
      {
        "slug": "/contact",
        "text": "Contact",
        "component": Contact,
        "icon": "fa-envelope"
      }
    ];
  }



  render() {


    return (
			<div>
				<HashRouter>
					<div>
						<Nav pages={ this.navLinks } />
            <div className="content">
              <SomeComponent />
            </div>
          </div>
				</HashRouter>
			</div>
    );
  }
}
 
export default Main;
