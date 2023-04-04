import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './FeedbackStats.module.css'

const FeedbackStats = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
    return (
        <ul className={css['stats']}>
            <li><b>Good:</b> {good}</li>
            <li><b>Neutral:</b> {neutral}</li>
            <li><b>Bad:</b> {bad}</li>
            <li><b>Total:</b> {totalFeedback}</li>
            <li className={css['stats__positive']}><b>Positive feedback:</b> {positiveFeedback} %</li>
        </ul>
    )
    }


FeedbackStats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}
export default FeedbackStats;