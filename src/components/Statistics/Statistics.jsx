import { Component } from "react";

class Statistics extends Component {
    render(){
        return( 
        <div>
            <h1>Statistics</h1>
            <ul>
                <li>Good : {this.props.good}</li>
                <li>Neutral: {this.props.neutral}</li>
                <li>Bad: {this.props.bad}</li>
                <li>Total: {this.props.totalNumber}</li>
                <li>Positive percentage: {this.props.positivePercent} %</li>
            </ul>
        </div>
        )
    }
    

}


export default Statistics 