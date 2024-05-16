/* eslint-disable react/prop-types */
const InputWithLabel = ({ name, setName }) => {
  return (
    <input
      value={name}
      onChange={(e) => {
        setName(e.target.value);
      }}
    />
  );
};
export default InputWithLabel;
