import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Feedback from './UserFeedback.jsx';
import AnswersList from './AnswersList.jsx';
import { sortAnswers } from './utility.jsx'

function QuestionsList(props) {

  const { questions, questionsView, answersView, toggleView } = props;

  const [panel, setPanel] = useState(false);

  const togglePanel = (i) => {
    if (panel === i) {
      return setPanel(null);
    }
    return setPanel(i);
  };

  const view = (questionsView === true ? "showAll-questions" : "showDefault-questions");

  return (
    <>
      <div className={view}>
        {questions.map((question, i) => (
          <div
            className="view-question"
            key={question.question_id}
          >
            <div
              className="questionText"
              onClick={() => togglePanel(i)}
              role="button"
              tabIndex={0}
              onKeyPress={() => togglePanel(i)}
            >
              <strong>Q:  </strong>
              {question.question_body}
            </div>
            <div className="questionFeedback">
              <Feedback option={2} helpfulness={question.question_helpfulness} handler={() => console.log('question feedback clicked')} />
            </div>
            {panel === i && <AnswersList answers={sortAnswers(questions[i].answers)} answersView={answersView} toggleView={toggleView} />}
          </div>
        ))}
      </div>
    </>
  );
}

QuestionsList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
  questionsView: PropTypes.bool.isRequired,
  answersView: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
  // handleFeedback: PropTypes.func.isRequired
}

export default QuestionsList;