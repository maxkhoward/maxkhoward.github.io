import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames'

class About extends Component {

  constructor(props) {
    super(props);

    this.skills = [
     {
       icon: "fab fa-html5",
       name: "HTML 5",
       description: "I guess this is a no-brainer for front-end development. But beyond typical HTML development, I'm familiar with the various rich content offered by HTML5 such as video elements, new structural elements such as <section> and <article> and I'm also familiar with best practices surrounding SEO."
     },
     {
       icon: "fab fa-css3-alt",
       name: "CSS3",
       description: "I've had extensive experience with CSS3. I'm comfortable with flex-box, grid elements and familiar with the various nuances between different browsers and rendering engines"
     },
     {
       icon: "fab fa-js-square",
       name: "JS",
       description: "Before 2016 I used ES5 and Jquery to add front-end functionality to websites. Since 2016 I have also familiarised myself with ES6 (and some ES7), using the new tools available for React based app development"
     },
     {
       icon: "fab fa-react",
       name: "React",
       description: "While working at Attendease I used React (with JSX Redux and Webpack) to create various components for the Attendease platform. This site actually uses React. In fact, you just clicked on a React component!"
     },
     {
       icon: "fab fa-app-store-ios",
       name: "iOS App Development",
       description: "At Attendease I was tasked with creating mobile apps for deployment on iOS devices. They were built with Cordova and deployed via Xcode to the app store and so I am familiar with the full lifecycle of iOS app development using cordova."
     },
     {
       icon: "fab fa-google-play",
       name: "Android App Development",
       description: "The apps I created at Attendease for the iOS app store were also deployed to the Google Play store. I created a new workflow for the company which involved generating an Android Studio project built from the cordova app and using Android Studio to create the signed binaries."
     },
     {
       icon: "far fa-gem",
       name: "Ruby/ Ruby Rails",
       description: "In order to work with the Attendease Platform I had to familiarise myself with Ruby and Ruby on Rails. While I would not call myself a Ruby on Rails developer I am comfortable generating Rails Apps and using the Rails console to interact with Rails apps. Additionally I used Ruby to create custom rake tasks in Jekyll projects that would perform various functions including pulling data from third-party vendors and generating data for use in static site generation."
     },
     {
       icon: "fab fa-npm",
       name: "NPM",
       description: "All of the projects I have worked on in the past few years have used npm (and yarn). I'm comfortable adding packages to projects, managing them via npm and dealing with inevitable conflicts."
     },
     {
       icon: "fab fa-gulp",
       name: "Gulp",
       description: "Gulp is my preferred front-end task runner. In the past I have used gulp to to compile JS and SCSS in various projects including the Jekyll built Adobe MAX and Adobe Summit custom sites."
     },
     {
       icon: "fab fa-github-square",
       name: "Github",
       description: "I've been using for Git several years and I am happy to work via the command line or via a GUI such as Source Tree. At Attendease I worked in a strict Git-Flow environment which included using interactive rebases to keep a clean and coherent Git history."
     },
     {
       icon: "fas fa-atom",
       name: "Atom",
       description: "Less a skill and more of a preference. Atom is (currently) my text editor of choice but I'm not picky. In the past I have also used Sublime Text and Brackets."
     },
     {
       icon: "fas fa-images",
       name: "UX and Design",
       description: "I have done UX and design work in the past and while I don't consider it my main vocation, I'm still passionate about good design and UX practices and enjoy using Photoshop, XD and invision to generate graphics and mockups."
     },
     {
       icon: "fas fa-box-open",
       name: "The rest of it",
       description: "The core programming language used at Maastricht University was Java. As such this is the language that I learnt the fundamentals of OOP. We also used python as a scripting language for AI and robotics based projects and MatLab for various data tasks. I've also got some limited experience with C# and C++ in my personal use of Unity and Arduino respectively."
     }];
  }

  render() {
    return (
      <div className="page-content about reg-page">
        <div className="page-title">
          <img src="https://i.imgur.com/bDt72DE.jpg" className="profile-image" alt="Max Howard profile" />
          <h1>Max Howard</h1>
          <p className="subtitle">A British developer in Canada</p>
        </div>

        <h2 className="sub-section-title title-skills">Skills</h2>

        <div className="skills">
          <SkillList skills={ this.skills } />
        </div>

        <h2 className="sub-section-title">Bio</h2>

        <div className="bio">
          <p>
            {"Hi! I'm a front-end developer living in Vancouver, Canada. I'm from Britain originally and studied at Maastricht University in the Netherlands."}
          </p>
          <p>
            {"I've worked in various different roles for different sized companies. In the Netherlands while studying Knowledge Engineering (a mixture of Machine Learning, Data Science and Mathematics) I worked as a front-end developer at CX Company, a medium sized coroporation speacialising in web chatbots."}
          </p>
          <p>
            {"In London I worked as a Web Producer at YOOX Net-A-Porter, one of the world's largest High-end online fashion retailers. I was responsible for leading the web production team on the production of the online magazine The Edit and worked with my colleagues in developing the MagTool, a tool that allowed designers and editors to assist in magazine production."}
          </p>
          <p>
            {"After finishing my Contract at Yoox Net-A-Porter I moved to Vancouver and spent two years working at Attendease, a startup that provides enterprise level event management solutions. As is the case with many startups I took on many roles during my time at Attendease including leading development on custom sites for Adobe, mobile app development for various clients and front-end React development for the Attendease event management platform."}
          </p>
          <p>
            {"I also have various development interests outside of front-end web development. I enjoy making video games in my spare time, including art and music creation. I also enjoying programming Arduino boards."}
          </p>
          <p>
            {"In the furutre I plan on gaining more back-end experience too and would love to incorporate my interest in data-analysis into my career"}
          </p>
        </div>
      </div>
    );
  }
}

class SkillList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedElement: null
    }
    this.renderSkills = this.renderSkills.bind(this);
    this.reveal = this.reveal.bind(this);
    this.hide = this.hide.bind(this);
  }

  reveal(i) {
    if (i === this.state.selectedElement)
      this.setState({ selectedElement: null });
    else
      this.setState({ selectedElement: i });
  }

  hide() {
    this.setState({ selectedElement: null });
  }

  renderSkills() {
    const skills = []
    this.props.skills.forEach((skill, i) => {
      skills.push(
        //<Skill show={ false } icon={ skill.icon } skillName={ skill.name } skillDescription={ skill.description } />
        <div key={ i } className={ classNames("skill", { "show": this.state.selectedElement === i }) } onClick={ () => this.reveal(i) }>
          <i className={ classNames( skill.icon, "skill-icon") }></i>
          <div className={ classNames("reveal", { "show": this.state.selectedElement === i }) }>
            <i className="close fas fa-times"></i>
            <h4 className="reveal-title">{ skill.name }</h4>
            <p className="reveal-description">{ skill.description }</p>
          </div>
        </div>
      )
    })
    return skills
  }

  render() {
    return (
      <div className="skills">
        <img className="skills-note" src="https://i.imgur.com/CIq6rlr.png" alt="click for more info" />
        { this.renderSkills() }
      </div>
    )
  }
}

SkillList.propTypes = {
  skills: PropTypes.array.isRequired
};
 
export default About;
