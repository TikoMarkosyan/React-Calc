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
      eexsprethion:false,
      showres:false,
      res:[],
    }
    this.handeclick = this.handeclick.bind(this);
  }
  result(){
    const res = this.state.res;
    const l = evaluate(res.join(''));
    res.splice(0,this.state.res.length,l);
    try {
        this.setState({
            value: l,
            res: res
        })
    } catch (e) {
        this.setState({
            value: "error"
        })

    }
  }
  adddigitnumber(value){
    this.setState(state => {
      const res = state.res.concat(value);
      return {
        res,
        eexsprethion:true,
        showres:false
      };
    });
  }
  addsimvol(value){
    console.log(this.state.res);
    this.setState(state => {
      const res = state.res.concat(value);
      return {
        res,
        eexsprethion:false,
      };
    });
  }
  specialSymbol(v){
      if(v === "="){
        this.result();
        this.setState({
            showres:true
        })
      }else if(v === "C"){
        this.setState({
          value: 0,
          eexsprethion:false,
          showres:false,
          res:[],
        })
      }
  }
  handeclick(event){
      if(!isNaN(event.target.value)){
            this.adddigitnumber(event.target.value);
      }else{
       const value = event.target.value;
       if(value === "=" || value === "C"){
            this.specialSymbol(value);
      }else{
        this.addsimvol(value)
      }
  }
}

  render(){
    return (
      <Fragment>
      <div>
      { this.state.showres ?
        <Show data={this.state.value}/> :  <Show data={this.state.res.join('')}/>
      }
      </div>
      <div>
      <Controller click={this.handeclick} disabled={!this.state.eexsprethion}/>
      </div>
      </Fragment>
    )
  }
}
export default App;
