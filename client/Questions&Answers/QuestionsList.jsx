import React from 'react';
import PropTypes from 'prop-types';

import AnswersList from './AnswersList.jsx';

function QuestionsList({ view }) {
  return (
    <>
      <div
        className="question"
        role="button"
      >
        <span>
          <h3>
            Q:
            Some kind of question?
          </h3>
        </span>
      </div>
      <div className={`view-${view}`}>
        <AnswersList />
      </div>
    </>
  );
}

QuestionsList.propTypes = {
  view: PropTypes.boolean.isRequired
}

export default QuestionsList;