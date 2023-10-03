import PropTypes from "prop-types";

export function TextArea({ name, placeholder, value, onChange, changeInput }) {
  return (
    <div>
      <textarea
        name={name}
        id="long_comment"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        cols="25"
        rows="10"
      ></textarea>
      <button
        type="button"
        className="comment-button-textarea"
        onClick={changeInput}
      >
        <i className={"fa-solid fa-down-left-and-up-right-to-center"}></i>
      </button>
    </div>
  );
}

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};
