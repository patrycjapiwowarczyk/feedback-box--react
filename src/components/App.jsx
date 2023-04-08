import React, { useState } from 'react';
import FeedbackSection from './FeedbackSection/FeedbackSection';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import FeedbackStats from './FeedbackStats/FeedbackStats';
import Notification from './Notification/Notification';
import css from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  const handleTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const handlePositiveFeedback = () => {
    const totalFeedback = handleTotalFeedback();
    const { good } = feedback;
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  const totalFeedback = handleTotalFeedback();
  const positiveFeedback = handlePositiveFeedback();

  return (
    <div className={css['section__container']}>
      <FeedbackSection title="Give feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={handleFeedback} />
      </FeedbackSection>
      <FeedbackSection title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback yet." />
        ) : (
          <FeedbackStats
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}
      </FeedbackSection>
    </div>
  );
};

export default App;
