/* eslint-disable react/prop-types */
//export const TextAndButton = () => {};

//export const TextAndButton = () => <TagName></TagName>;

/* const TextAndButton = () => {};

export default TextAndButton;
*/

//export function TextAndButton () {}

/*
function TextAndButton () = {};

export default TextAndButton;
 */

const TextAndButton = ({ heading, content, btnText }) => {
  return (
    <section className='section-container'>
      <h4>{heading ? heading : 'No Heading'}</h4>
      <p>{content ? content : 'No Content'}</p>
      <button className='outlined-button'>
        {btnText ? btnText : 'No btnText'}
      </button>
    </section>
  );
};
export default TextAndButton;
