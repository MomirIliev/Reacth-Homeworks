import PropTypes from "prop-types";

export function Select({ value, options, onChange }) {
  return (
    <div id="select-dropdown">
      <label htmlFor="social_network">Select one of the Social networks</label>
      <br />
      <select
        onChange={onChange}
        value={value}
        name="social_network"
        id="social_network"
      >
        {options.map((single_option, index) => {
          return (
            <option key={index} value={single_option.value}>
              {single_option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
