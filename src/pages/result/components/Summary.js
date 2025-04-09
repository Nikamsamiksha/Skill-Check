import image_20 from '../../../assets/score-20-emoji.webp';
import image_15 from '../../../assets/score-15-emoji.png';
import image_10 from '../../../assets/score-10-emoji.jpg';
import image_5 from '../../../assets/score-5-emoji.jpeg';
import image_0 from '../../../assets/score-0-emoji.jpg';
import { TextToSpeech } from '../../../components/TextToSpeech';

export function Summary({ score, noq }) {
  let message = "";

  const setSummary = () => {
    switch (score) {
      case 0:
        message =
          "Review Mistakes Carefully: Take the time to understand why you got the question wrong. Was it a misunderstanding of the concept, a calculation error, or a simple oversight? Understanding your mistakes is crucial for learning.Remember, learning from mistakes is a valuable part of the learning process. Embrace them as opportunities for growth and keep pushing yourself to improve!";
        break;
      case 5:
        message =
          "If there's a concept you're still unsure about, don't hesitate to ask your teacher, a tutor, or a parent for clarification. Getting a clear explanation can help solidify your understanding.Look for similar questions in your textbook, online resources, or practice exams. Practice makes perfect, and tackling similar problems can help reinforce your understanding and improve your skills.";
        break;
      case 10:
        message =
          "Write down the key concepts or formulas related to the question you got wrong on flashcards. Reviewing these regularly can help commit them to memory. Revisit the questions which you feel are difficulty";
        break;
      case 15:
        message =
          "Explaining the concept to someone else, like a friend or family member, can be an effective way to reinforce your understanding. Teaching forces you to organize your thoughts and can highlight areas where you need further clarification.";
        break;
      case 20:
        message =
          "Your test scores show your strengths and areas for growth. Celebrate your successes and use them as motivation to keep improving. Don't be discouraged by any challenges you face; they're opportunities to learn and grow stronger. Keep working hard, believe in yourself, and you'll reach your goals!";
        break;
      default:
        message = "Need To Practice";
        break;
    }
  };

  const percentage = (score / (noq*5)) * 100;
  
  return (
    <>
      {setSummary()}
      <div className="flex items-center justify-between my-5">
        <div>
          <p className='font-bold text-6xl text-primary-40 flex items-center'>
            Your score is : {score} out of {noq * 5}
            <TextToSpeech text={`Your score is : ${score} out of ${noq * 5}`} />
          </p>
          <div class="w-full rounded-full h-2.5 my-5 border border-primary-40">
            <div class="bg-primary-40 h-2.5 rounded-full" style={{"width": `${percentage}%`}}></div>
          </div>
        </div>

        <div>
          {
            score === 0 &&
            <img src={image_0} alt="Success" className='w-40 h-40' />
          }
          {
            score === 5 &&
            <img src={image_5} alt="Success" className='w-40 h-40' />
          }
          {
            score === 10 &&
            <img src={image_10} alt="Success" className='w-40 h-40' />
          }
          {
            score === 15 &&
            <img src={image_15} alt="Success" className='w-40 h-40' />
          }
          {
            score === 20 &&
            <img src={image_20} alt="Success" className='w-40 h-40' />
          }
        </div>

      </div>
      <div className='my-5'>
        <div className='flex items-center'>
        <h2 className='font-bold text-3xl text-primary-30'>Suggestion</h2>
        <TextToSpeech text={message} />
        </div>
        <p className='text-xl my-2'>{message}</p>
      </div>
    </>
  );
}
