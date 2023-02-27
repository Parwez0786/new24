import React, { Component } from 'react';

import load from './load.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-1000' src={load} alt="load" />
      </div>
    )
  }
}
