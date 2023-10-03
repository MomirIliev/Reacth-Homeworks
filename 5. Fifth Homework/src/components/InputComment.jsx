import PropTypes from "prop-types";

export function InputComment({
  name,
  value,
  placeholder,
  onChange,
  changeInput,
}) {
  return (
    <p className="input-component">
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="comment-button-input"
        onClick={changeInput}
      >
        <i className={"fa-solid fa-up-right-and-down-left-from-center"}></i>
      </button>
    </p>
  );
}

InputComment.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};
