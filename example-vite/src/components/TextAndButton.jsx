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

import { useState } from 'react';
import BtnOutlined from './BtnOutlined';
import './TextAndButton.css';

const TextAndButton = ({ heading, content, btnText }) => {
  const style = {
    fontSize: '28pt',
  };
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <section>
      <h4 style={style}>{heading ? heading : 'No Heading'}</h4>
      <p>{content ? content : 'No Content'}</p>
      <BtnOutlined
        btnText={btnClicked ? btnText : 'button clicked'}
        btnFkt={() => {
          setBtnClicked((state) => !state);
        }}
      />
    </section>
  );
};
export default TextAndButton;
