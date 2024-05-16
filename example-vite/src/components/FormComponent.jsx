/* eslint-disable react/prop-types */
import InputWithLabel from './InputWithLabel';
const FormComponent = ({ name, setName }) => {
  return (
    <form>
      <InputWithLabel name={name} setName={setName} />
    </form>
  );
};

export default FormComponent;
