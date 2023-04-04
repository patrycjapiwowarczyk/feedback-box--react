import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = feedbackOptionsData => {
  const { options, onLeaveFeedback } = feedbackOptionsData;
  return (
    <div className={css['section__box']}>
      {Object.keys(options).map(option => (
        <button
          className={css[`section__button-${option}`]}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          <b>{option}</b>
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
