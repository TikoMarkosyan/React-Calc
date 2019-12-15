import React,{Component} from 'react';

class Controller extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return (
      <div>
        <div>
            <button value="7" onClick={this.props.click}>7</button>
            <button value="8" onClick={this.props.click}>8</button>
            <button value="9" onClick={this.props.click}>9</button>
            <button value="-" disabled={this.props.disabled} onClick={this.props.click}>-</button>
        </div>
        <div>
            <button value="4" onClick={this.props.click}>4</button>
            <button value="5" onClick={this.props.click}>5</button>
            <button value="6" onClick={this.props.click}>6</button>
            <button value="+" disabled={this.props.disabled} onClick={this.props.click}>+</button>
        </div>
        <div>
            <button value="1" onClick={this.props.click}>1</button>
            <button value="2" onClick={this.props.click}>2</button>
            <button value="3" onClick={this.props.click}>3</button>
            <button value="=" disabled={this.props.disabled} onClick={this.props.click}>=</button>
        </div>
        <div>
            <button value="C" disabled={this.props.disabled} onClick={this.props.click}>C</button>
            <button value="*" disabled={this.props.disabled} onClick={this.props.click}>*</button>
            <button value="0" onClick={this.props.click}>0</button>
            <button value="/" disabled={this.props.disabled} onClick={this.props.click}>/</button>
            <button value="%" disabled={this.props.disabled} onClick={this.props.click}>%</button>
        </div>
      </div>
    )
  }
}
export default Controller;
