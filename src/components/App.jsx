import { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification"
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
    document.getElementById(`stats`).style.visibility="visible"
    document.getElementById(`notification`).style.visibility="hidden"

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
        <FeedbackOptions click={this.handleFeedback}/>
        <Notification message={"There is no Feedback"}/>
        <Statistics good={good} neutral={neutral} bad={bad} totalNumber={this.countTotalFeedback()||0} positivePercent={this.countPositivePercentage()||0}/>
        
        
      </div>
       )
  }
}

export default App