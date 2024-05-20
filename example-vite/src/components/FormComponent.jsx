/* eslint-disable react/prop-types */
import InputWithLabel from './InputWithLabel';
const FormComponent = ({ name, setName, children }) => {
  return (
    <form>
      <InputWithLabel name={name} setName={setName} />
      {children}
    </form>
  );
};

export default FormComponent;
