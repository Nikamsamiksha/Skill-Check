import Checkbox from "./Checkbox";
import { Fragment } from "react";

export default function Answers({ options = [], handleChange, input }) {

  return (
    <div className="flex flex-row">
      {options.map((option, index) => (
        <Fragment key={index}>
        {input ? (
          <Checkbox
            key={index}
            text={option.title}
            value={index}
            checked={option.checked}
            onChange={(e) => handleChange(e, index)}
          />
        ) : (
          option.correct ?
          <Checkbox
            className = {"text-green-600"}
            key={index}
            text={option.title}
            defaultChecked={option.checked}
            disabled
          />
          :
          <Checkbox
            className={"text-black"}
            key={index}
            text={option.title}
            defaultChecked={option.checked}
            disabled
          />
        )}
      </Fragment>
      ))}
    </div>
  );
}