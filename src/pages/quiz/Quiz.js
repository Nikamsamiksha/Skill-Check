import _ from "lodash";
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
// import { useDispatch} from "react-redux";
import { updateQnaList } from "../../store/qnaSlice";
import { QuestionPills } from "./components/QuestionPills";
import children from '../../assets/children.png';
import { Question } from "./components/Question";

// import { TextToSpeech } from "../TextToSpeech";

const initialState = null;

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
    default:
      return state;
  }
};

export function Quiz() {
  const { id, subject } = useParams();
  const { questions } = useQuestions(id, subject);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const qnaSetter = useDispatch();

  const [qna, dispatch] = useReducer(reducer, initialState);
  // const { currentUser } = useAuth();
  // const history = useNavigate();

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
    console.log(questions)
  }, [questions]);

  // function handleAnswerChange(e, index) {
  //   dispatch({
  //     type: "answer",
  //     questionID: currentQuestion,
  //     optionIndex: index,
  //     value: e.target.checked,
  //   });
  // }

  // handle when user clicks the next button to get the next question
  function nextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent + 1);
    }
  }

  // handle when user clicks the prev button to get back to the previous question
  function prevQuestion() {
    if (currentQuestion >= 1 && currentQuestion <= questions.length) {
      setCurrentQuestion((prevCurrent) => prevCurrent - 1);
    }
  }
  // const handleNavigate = () => {
  //   history("/login");
  // };

  // // submit quiz
  // async function submit() {
  //   // const { uid } = currentUser;

  //   const db = getDatabase();
  //   // const resultRef = ref(db, `result/${uid}`);

  //   // await set(resultRef, {
  //   //   [id]: qna,
  //   // });
  //   qnaSetter(updateQnaList({ qna }));
  //   history(`/result/${id}`);
  // }

  // calculate percentage of progress
  // const percentage =
    // questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;



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
          <QuestionPills />
        }
      </div>
      <div className="flex flex-row justify-center lg:justify-around mx-5 lg:mx-0 py-2 lg:py-10 my-2 lg:my-5 items-center">
          {
              <Question question={questions[currentQuestion]} />
          }
        <div className="image hidden lg:block">
          <img src={children} alt="Children Image" />
        </div>
      </div>
      <div className="flex flex-row justify-between mx-5 lg:mx-0">
        <button 
        className="bg-primary-600 px-3 py-1 lg:px-5 lg:py-3 text-md lg:text-xl text-center rounded-lg"
        onClick={() => prevQuestion()}
        >
          Prev
        </button>
        <button 
        className="bg-primary-600 px-3 py-1 lg:px-5 lg:py-3 text-md lg:text-xl text-center rounded-lg"
        onClick={() => nextQuestion()}
        >
          Next
        </button>
      </div>
    </main>
  );
}
