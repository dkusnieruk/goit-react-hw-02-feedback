import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";

class App extends Component{
  state ={
    good:0,
    neutral:0,
    bad:0,

  }


  handleFeedback=(event) =>{
    const {id} = event.target
    console.log(id);
    this.setState((state)=>({
      [id]: state[id] +1
    }))

   }
  countTotalFeedback =() =>{
    const totalNumber = this.state.good +this.state.neutral + this.state.bad
   
    return totalNumber ;
}
countPositivePercentage=() => {
    const good = this.state.good
    const totalNumber = this.state.good + this.state.neutral + this.state.bad
    const positivePercent = Math.round((good/totalNumber*100))
    
    return positivePercent ;
    };

  render() {
    
    
    const {good, neutral, bad} = this.state 
    return (
      <div>
        <span> App JSX connect</span>
        <Statistics good={good} neutral={neutral} bad={bad} totalNumber={this.countTotalFeedback()||0} positivePercent={this.countPositivePercentage()||0}/>
        <FeedbackOptions click={this.handleFeedback}/>
      </div>
       )
  }
}

export default App