import { Component } from "react";

class FeedbackOptions extends Component {
    render () {
console.log(this.props);  
        return (
            <div>
                <h1>Please leave Feedback</h1>
                <div>
                    <button  id="good" onClick={this.props.click}>Good</button>
                    <button  id="neutral" onClick={this.props.click}>Neutral</button>
                    <button  id="bad" onClick={this.props.click} >Bad</button>
                </div>
            </div>
        )
    }
}

export default FeedbackOptions