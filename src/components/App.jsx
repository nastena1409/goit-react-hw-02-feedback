import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = option => {
    this.setState({ [option]: this.state[option] += 1 })
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
        margin: 40,
        fontSize: 30,
        color: '#010101'
      }}
    >
         <Section title="Please leave feedback">
           <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}/>
         </Section>
         
         {this.countTotalFeedback() > 0 ? <Section title="Statistics">
           <Statistics good={good}
             neutral={neutral}
             bad={bad}
             total={this.countTotalFeedback()}
             positivePercentage={this.countPositiveFeedbackPercentage()} />
         </Section> : <Notification message={"There is no feedback"} />}
            
    </div>
  );
  }

  
};
