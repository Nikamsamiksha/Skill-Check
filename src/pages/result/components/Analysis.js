import Questions from "./Questions";

export function Analysis({ answers }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-primary-40">Question Analysis</h1>
      <Questions answers={answers} />
    </div>
  );
}