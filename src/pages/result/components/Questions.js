import Answers from "./Answers";

export default function Question({ answers = [] }) {
  let i = 1;

  return answers.map((answer, index) => (
    <div key={index} className="my-5">
      <div className="text-xl">
        Q{i++}. {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}