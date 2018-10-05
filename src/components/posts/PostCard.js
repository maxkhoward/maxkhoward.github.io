import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';

import { Router, Route, Link } from 'react-router-dom';
import history from '../../history';

class PostCard extends Component {
  constructor(props){
    super(props);
    this.getBG = this.getBG.bind(this);
    this.getCardClassnames = this.getCardClassnames.bind(this);
    this.state = {
      showPost: false
    };
  }

  renderPost() {

  }

  componentDidMount() {

  }

  getBG(imageURL) {
    let bgStyle = {
      backgroundImage: "url(" + imageURL + ")"
    };

    return( bgStyle );
  }

  getCardClassnames() {
    let classnames = classNames(
      'post-card',
      {
        'featured-card': this.props.postType === 'featured'
      }
    );

    return( classnames );
  }

  showPost() {
    history.push('/#/posts/' + this.props.postSlug);
    this.setState({ showPost: true });
  }

  render() {
    console.log(this.state.showPost);
    if (this.state.showPost)
      return ( <Redirect to= {'/posts/' + this.props.postSlug } /> );
    else
      return (

          <div className={ this.getCardClassnames() } onClick={ e => this.showPost() }>
            { this.props.postType === 'featured' ?
              <div className="post-card-content" style={ this.getBG(this.props.postImage) }>
                <img className="post-image" src={this.props.postImage} />
                <div className="post-card-info">
                  <h5>{ this.props.postTitle }</h5>
                  <p>{ this.props.postSummary }</p>
                </div>
              </div>
              :
              <div className="post-card-content">
                <div className="post-card-info">
                  <img className="post-mini-image" src={this.props.postImage} />
                    <div className="title-elements">
                      <h5 className="post-title">{ this.props.postTitle }</h5>
                      <p className="small">{ this.props.postAuthor }</p>
                    </div>
                  <div className="post-excerpt" dangerouslySetInnerHTML={{__html: this.props.postExcerpt}} />
                </div>
              </div>
            }
            <div className="post-card-meta">
              <div className="past-card-left">
                { this.props.postFormat }
              </div>
              <div className="past-card-right">
                { this.props.postDate.split("T")[0] }
              </div>
            </div>
          </div>

      );
  }
}

PostCard.propTypes = {
  postID: PropTypes.string,
  postCategories: PropTypes.array,
  postTitle: PropTypes.string,
  postSlug: PropTypes.string,
  postDate: PropTypes.instanceOf(Date),
  postAuthor: PropTypes.string,
  postContent: PropTypes.element,
  postImage: PropTypes.string,
  postSummary: PropTypes.string,
  postExcerpt: PropTypes.element,
  postType: PropTypes.string
};

export default PostCard;
