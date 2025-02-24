import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import { updateQnaList } from "../../store/qnaSlice";
import { QuestionPills } from "./components/QuestionPills";
import children from '../../assets/children.png';
import { Question } from "./components/Question";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";
import { getDatabase, ref, set } from "firebase/database";

// import { TextToSpeech } from "../TextToSpeech";

const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case "answer":
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;

      return questions;
    case null:
      return state;
    default:
      return state;
  }
};

export function Quiz() {
  const { id, subject } = useParams();
  const { questions } = useQuestions(id, subject);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const qnaSetter = useDispatch();
  const [submitBtn, setSubmitBtn] = useState(false);

  const [qna, dispatch] = useReducer(reducer, null);
  const { currentUser } = useAuth();
  const history = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "answer",
      questionID: currentQuestion,
      optionIndex: index,
      value: true,
    });
  }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
    if (currentQuestion === questions.length - 2) {
      setSubmitBtn(true);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
    setSubmitBtn(false);
  }

  // submit quiz
  async function submit() {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);

    await set(resultRef, {
      [id]: qna,
    });
    qnaSetter(updateQnaList({ qna }));
    history(`/result/${subject}/${id}`);
  }

  // calculate percentage of progress
  const percentage = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  return (
    // <>
    //   {loading && <div>Loading ...</div>}
    //   {error && (
    //     <div>
    //       <img src="" alt="" />
    //       <button onClick={handleNavigate}>
    //         Please Login
    //       </button>
    //     </div>
    //   )}
    //   {!loading && !error && qna && qna.length > 0 && (
    //     <>
    //       <div style={{display: "flex"}}>
    //         <div>
    //           <h1>{qna[currentQuestion].title}</h1>
    //           <h4>Question can have multiple answers</h4>
    //           {/* <TextToSpeech text={qna[currentQuestion].title} /> */}
    //         </div>
    //         <img src="" alt="" />
    //       </div>

    //       {/* <Answers
    //         input
    //         options={qna[currentQuestion].options}
    //         handleChange={handleAnswerChange}
    //       />
    //       <ProgressBar
    //         next={nextQuestion}
    //         prev={prevQuestion}
    //         submit={submit}
    //         progress={percentage}
    //       /> */}
    //       {/* <MiniPlayer id={id} title={qna[currentQuestion].title} /> */}
    //     </>
    //   )}
    // </>
    <main>
      <div className="pt-2 lg:pt-5">
        {
          <QuestionPills currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        }
      </div>
      <div className="flex flex-row justify-center lg:justify-around mx-5 lg:mx-0 py-2 lg:py-5 my-2 lg:my-3 items-center">
        {
          <Question question={questions[currentQuestion]} handleAnswerChange={handleAnswerChange} />
        }
        <div className="image hidden lg:block">
          <img src={children} alt="Children Image" />
        </div>
      </div>
      <div className="flex flex-row justify-between mx-5 lg:mx-0">
        <button
          className="bg-primary-600 px-3 py-1 lg:px-5 lg:py-3 text-md lg:text-xl text-center rounded-lg hover:shadow-lg"
          onClick={() => prevQuestion()}
        >
          Prev
        </button>
        {
          submitBtn ?
            <button
              className="bg-primary-600 px-3 py-1 lg:px-5 lg:py-3 text-md lg:text-xl text-center rounded-lg hover:shadow-lg"
              onClick={() => submit()}
            >
              Submit
            </button>
            :
            <button
              className="bg-primary-600 px-3 py-1 lg:px-5 lg:py-3 text-md lg:text-xl text-center rounded-lg hover:shadow-lg"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
        }
      </div>
    </main>
  );
}
