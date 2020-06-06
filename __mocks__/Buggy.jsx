import React from 'react';

export default class Buggy extends React.Component {
  componentDidMount() {
    throw new Error('An error has occured in Buggy component!');
  }

  render() {
    return <h2>Error Component</h2>;
  }
}
