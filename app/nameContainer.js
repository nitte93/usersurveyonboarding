import React, {Component} from 'react';
import { render } from 'react-dom'

export default class NameContainer extends Component{
  componentDidMount(){
  }
  render(){
    return(
      <div>
        Please enter your name
        <input />
        <button>next</button>
      </div>
    )
  }
};
