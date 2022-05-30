export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input onChange={(e) => {
        onChange(e.target.value)
      }} className={`input ${size || "md"} ${variant}`} type={type || "text"} />
      <img onClick={rightLogoOnClick} src={rightLogo} alt="rightLogo" style={{ "height": "20px", "width": "20px" }} />

    </div>
  );
};