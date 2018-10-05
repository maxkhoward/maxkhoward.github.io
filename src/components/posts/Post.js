import React, { Component } from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Post extends Component {
  constructor(props){
    super(props);
  }

  renderPost() {

  }

  componentDidMount() {

  }

  getBannerImage() {
    if (this.props.postBannerImage )
      return ( this.props.postBannerImage )
    else
      return ( this.props.postImage )
  }

  render() {
    return (
      <div className="page-content full-post">
        <div className="post">
          <div className="banner-image" style={ {'backgroundImage': 'url(' + this.getBannerImage() + ')'} }>
            <div className="post-title-elements">
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
