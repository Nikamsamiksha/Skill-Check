export default function Checkbox({ className, text, ...rest }) {
    return (
      <label>
        <input type="checkbox" {...rest} className="text-xl"/> <span>{text}</span>
      </label>
    );
  }