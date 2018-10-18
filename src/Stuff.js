import React, { Component } from "react";

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class Stuff extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }));
  }

  render() {
    const { hits, isLoading } = this.state;
    if (isLoading)
      return (
        <div className="page-content stuff">
          <h2>Is Loading</h2>
        </div>
      );
    else
      return (
        <div className="page-content stuff">
          <p>things</p>
          <p>things</p>
          <p>things</p>
          <p>things</p>
          <p>things</p>
          <p>things</p>
          <ul>
            {hits.map(hit =>
              <li key={hit.objectID}>
                <a href={hit.url}>{hit.title}</a>
              </li>
            )}
          </ul>
        </div>
      );
  }
}
 
export default Stuff;
