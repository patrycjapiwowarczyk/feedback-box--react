import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './FeedbackStats.module.css'

class FeedbackStats extends Component {
    render () {
        const { good, neutral, bad, totalFeedback, positiveFeedback } = this.props;
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
}

FeedbackStats.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}
export default FeedbackStats;