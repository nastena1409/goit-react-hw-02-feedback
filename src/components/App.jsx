import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;

      return total;
  }

  countPositiveFeedbackPercentage() {
    const positive = Math.round(this.state.good / this.countTotalFeedback() * 100);
    console.log(positive);

    return positive;
  }
  
  render() {

    const { good, neutral, bad } = this.state;

     return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
         <h2>Please leave feedback</h2>
         <button onClick={()  => this.setState({good: this.state.good += 1})}>Good</button>
         <button>Neutral</button>
         <button>Bad</button>
         
         <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>   
    </div>
  );
  }

  
};
