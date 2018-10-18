import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import history from '../../history';

class Post extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  renderPost() {

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  getBannerImage() {
    if (this.props.postBannerImage )
      return ( this.props.postBannerImage )
    else
      return ( this.props.postImage )
  }

  goBack() {
    return function(){
      history.goBack();
    }
  }

  render() {
    return (
      <div className="page-content full-post">
        <div className="post">
          <div className="banner-image" style={ {'backgroundImage': 'url(' + this.getBannerImage() + ')'} }>
            <div className="post-title-elements">
              <svg onClick={this.goBack()} aria-hidden="true" data-prefix="fal" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="back svg-inline--fa fa-arrow-left fa-w-14 fa-2x"><path fill="currentColor" d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
              <h1 className="post-title">{ this.props.postTitle }</h1>
              <div className="post-date">{ this.props.postDate.split("T")[0] }</div>
              <div className="post-author">{ this.props.postAuthor }</div>
            </div>
          </div>
          <div className="post-content" dangerouslySetInnerHTML={{__html: this.props.postContent}} />
          <div className="post-card-meta">
            <div className="past-card-left">
              { this.props.postFormat }
            </div>
            <div className="past-card-right">
              { this.props.postDate.split("T")[0] }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  postID: PropTypes.string,
  postCategories: PropTypes.array,
  postTitle: PropTypes.string,
  postSlug: PropTypes.string,
  postDate: PropTypes.instanceOf(Date),
  postAuthor: PropTypes.string,
  postContent: PropTypes.element,
  postImage: PropTypes.string,
  postBannerImage: PropTypes.string,
  postSummary: PropTypes.string,
  postTags: PropTypes.array
};

export default Post;
