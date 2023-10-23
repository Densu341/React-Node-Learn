const Button = (props) => {
  const {
    variant,
    children = "Button",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      type={type}
      className={` ${variant} text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
