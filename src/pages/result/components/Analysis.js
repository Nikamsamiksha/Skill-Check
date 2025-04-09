import ReactPlayer from "react-player";
import Questions from "./Questions";
import { TextToSpeech } from "../../../components/TextToSpeech";

export function Analysis({ answers, score }) {
  
  let animation;

  const setAnimation = () => {
    switch (score) {
      case 0:
        animation = require("../../../assets/0_score.mp4");
        break;
      case 5:
        animation = require("../../../assets/5_score.mp4");
        break;
      case 10:
        animation = require("../../../assets/10_score.mp4");
        break;
      case 15:
        animation = require("../../../assets/15_score.mp4");
        break;
      case 20:
        animation = require("../../../assets/20_score.mp4");
        break;
      default:
        animation = require("../../../assets/0_score.mp4");
        break;
    }
  };

  return (
    <div className="flex flex-row items-center justify-between overflow-x-hidden">
      <div className="basis-2/3">
        <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-primary-40">Question Analysis</h1>
        <TextToSpeech text={"Given below are question analysis. The correct option are green in colour and the option you chose are ticked!"} />
        </div>
        <Questions answers={answers} />
      </div>

      <div className="basis-1/3 w-[460px]">
      {setAnimation()}
        <ReactPlayer
          className=""
          url={animation}
          playing={true}
          loop={true}
          controls={false}
          muted={true}
        />
      </div>

    </div>
  );
}