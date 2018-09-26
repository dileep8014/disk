// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <Home
        width={200}
        height={200}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      />
    );
  }
}
