import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          alt="loading..."
          width="100"
          height="100"
          src="https://miro.medium.com/max/551/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
        />
      </div>
    );
  }
}
