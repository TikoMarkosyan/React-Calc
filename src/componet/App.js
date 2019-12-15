import React,{Component,Fragment} from 'react';
import {
  atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt
} from 'mathjs'
import Show from './Show';
import Controller from './Controller'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      expression:false,
      showResult:false,
      res:[],
    }
    this.handleClick = this.handleClick.bind(this);
  }
  result(){
    const res = this.state.res;
    const finalResult = evaluate(res.join(''));
    res.splice(0,this.state.res.length,finalResult);
    try {
        this.setState({
            value: finalResult,
            res: res
        })
    } catch (e) {
        this.setState({
            value: "error"
        })

    }
  }
  addDigitNumber(value){
    this.setState(state => {
      const res = state.res.concat(value);
      return {
        res,
        expression:true,
        showResult:false
      };
    });
  }
  addSimbol(value){
    console.log(this.state.res);
    this.setState(state => {
      const res = state.res.concat(value);
      return {
        res,
        expression:false,
      };
    });
  }
  specialSymbol(v){
      if(v === "="){
        this.result();
        this.setState({
            showResult:true
        })
      }else if(v === "C"){
        this.setState({
          value: 0,
          expression:false,
          showResult:false,
          res:[],
        })
      }
  }
  handleClick(event){
      if(!isNaN(event.target.value)){
            this.addDigitNumber(event.target.value);
      }else{
       const value = event.target.value;
       if(value === "=" || value === "C"){
            this.specialSymbol(value);
      }else{
        this.addSimbol(value)
      }
  }
}

  render(){
    return (
      <Fragment>
      <div>
      { this.state.showResult ?
        <Show data={this.state.value}/> :  <Show data={this.state.res.join('')}/>
      }
      </div>
      <div>
      <Controller click={this.handleClick} disabled={!this.state.expression}/>
      </div>
      </Fragment>
    )
  }
}
export default App;
