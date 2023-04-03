import React, { Component } from 'react';
import FeedbackSection from './FeedbackSection/FeedbackSection';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import FeedbackStats from './FeedbackStats/FeedbackStats';
import Notification from './Notification/Notification';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  handleTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  handlePositiveFeedback = () => {
    const totalFeedback = this.handleTotalFeedback();
    const { good } = this.state;
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.handleTotalFeedback();
    const positiveFeedback = this.handlePositiveFeedback();

    return (
      <div className={css['section__container']}>
        <FeedbackSection title="Give feedback">
          <FeedbackOptions
            options={{ good, neutral, bad }}
            onLeaveFeedback={this.handleFeedback}
          />
        </FeedbackSection>
        <FeedbackSection title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback yet." />
          ) : (
            <FeedbackStats
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totalFeedback}
              positiveFeedback={positiveFeedback}
            />
          )}
        </FeedbackSection>
      </div>
    );
  }
}

export default App;
