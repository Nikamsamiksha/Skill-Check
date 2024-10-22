import _ from "lodash";
import { useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Summary } from './components/Summary';
import { Analysis } from "./components/Analysis";

export function Score () {
  const { id, subject } = useParams();

  const { qna } = useSelector(state => state.qna);

  const { loading: nowLoading, error: error1, answers } = useAnswers(id, subject);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      qna && question && question.options &&
        question.options.forEach((option, index2) => {
          if (option.correct) correctIndexes.push(index2);
          if (qna[index1].options[index2].checked) {
            checkedIndexes.push(index2);
            option.checked = true;
          }
        });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <main className="p-10">
      {nowLoading && <div>Loading...</div>}
      {error1 && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
          
          <Link to={`/`}>
            <button
              className="bg-primary-100 px-3 py-2.5 rounded-lg"
            >
              Back To Home
            </button>
          </Link>
        </>
      )}
    </main>
  );
}
