import React, { Component } from "react";
import PropTypes from 'prop-types';
import css from './FeedbackSection.module.css'

class FeedbackSection extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className={css['section']}>
                <h2 className={css['section__title']}>{title}</h2>
                { children }
            </div>
        )
    }
}

FeedbackSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default FeedbackSection;