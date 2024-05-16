/* eslint-disable react/prop-types */

const BtnOutlined = ({ btnText, btnFkt }) => {
  const btnStyle = {
    backgroundColor: 'transparent',
    color: 'blue',
    border: ' 2px solid blue',
  };
  return (
    <button style={btnStyle} onClick={btnFkt}>
      {btnText}
    </button>
  );
};

export default BtnOutlined;
