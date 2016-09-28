import React, {Component} from 'react';
import { render } from 'react-dom'
import NameContainer from './app/nameContainer.js'
import QuestionContainer from './app/questionsContainer.js'

class Hello extends Component{
  constructor(props){
    super(props)

    this.state = {
      index:this.props.index || 0,
      displayContent:this.props.content.length?this.props.content[0]:[],
      limit:this.props.limit?this.props.limit-1:this.props.content.length-1
    }
    this.showNext = this.showNext.bind(this);
    this.showPrevious = this.showPrevious.bind(this);
    this.initialContent = this.initialContent.bind(this);
  }

  showNext(){
    const tempIndex = this.state.index<this.state.limit?this.state.index + 1:this.state.limit;
    this.setState({index:tempIndex, displayContent:this.props.content[tempIndex]});
  }
  showPrevious(){
    const tempIndex = this.state.index? this.state.index - 1 : 0;
    this.setState({index:tempIndex, displayContent:this.props.content[tempIndex]});
  }
  initialContent(...args){
    this.setState({displayContent:arguments[0][arguments[1]]});
  }
  skip(...args){
    // this.setState({displayContent:arguments[0][arguments[1]]});
  }
  render(){
    return(
      <div>
        <div className="">
          <div className="header">Header</div>
          <div className="content">
           {
             !this.state.index ? <NameContainer /> : <QuestionContainer>

           }

          </div>
          <div className='action'>
           <button onClick={this.showPrevious}>Previous</button>
           <button onClick={this.showNext}>Next</button>
          </div>
        </div>
       </div>
    )
  }
};

render(<Hello />, document.getElementById('root'));
