const Button = (props) => {
  const { variant, children = "Button" } = props;
  return (
    <button
      type="submit"
      className={` ${variant} text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
