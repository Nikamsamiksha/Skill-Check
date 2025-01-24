import Answers from "./Answers";

export default function Question({ answers = [] }) {
  let i = 1;

  return answers.map((answer, index) => (
    <div key={index} className="my-5">
      <div className="text-xl flex flex-col gap-3">
        Q{i++}. {answer.title}
      
      <Answers input={false} options={answer.options} />
      </div>
    </div>
  ));
}