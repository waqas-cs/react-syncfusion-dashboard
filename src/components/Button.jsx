const Button = ({ color, bgcolor, text, size, borderRadius }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgcolor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
