export default function Checkbox({ className, text, image, image_class, ...rest }) {

  return (
    <label className={`mx-3 ${className} ${image && image_class} text-xl font-medium`} >
      <input type="checkbox" {...rest} className="text-xl" style={{ color: "#00FF00" }} /> {text && <span>{text}</span> }
      {image  && <span><img src={image} className={`w-10 h-10 `}/></span> }
    </label>
  );
}