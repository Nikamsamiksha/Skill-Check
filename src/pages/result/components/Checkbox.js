export default function Checkbox({ className, text, ...rest }) {

  return (
    <label className={`mx-3 ${className} text-xl font-medium`} >
      <input type="checkbox" {...rest} className="text-xl" style={{ color: "#00FF00" }} /> <span>{text}</span>
    </label>
  );
}