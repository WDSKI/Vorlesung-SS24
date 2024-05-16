import TextAndButton from './components/TextAndButton';
import './App.css';
import { useState } from 'react';
import FormComponent from './components/FormComponent';

function App() {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const content = [
    { heading: 'Heading1', content: 'content1', btnText: 'Button 1' },
    { heading: 'Heading2', content: 'content1', btnText: 'Button 1' },
    { heading: 'Heading3', content: 'content1', btnText: 'Button 1' },
    { heading: 'Heading4', content: 'content1', btnText: 'Button 1' },
  ];
  let component;
  if (loading) {
    component = <div>Loading</div>;
  } else {
    component = (
      <>
        <FormComponent name={name} setName={setName} />
        {name !== '' ? <div>{name}</div> : <div>Please enter a Name</div>}
        <section>
          <img src='https://www.dhbw.de/fileadmin/user_upload/Bilder_Grafiken/Kacheln/Bettina_Graefin_Bernadotte_DSC0515.jpg' />
          <div>
            <button id='playbutton'>Play</button>
            <h1>Heading</h1>
            <button>Second Button</button>
          </div>
        </section>
        <section>
          <h2 id='heading'>Heading 2</h2>
          <div className='flexbox'>
            {content.map((element, index) => (
              <TextAndButton
                key={index}
                heading={element.heading}
                content={element.content}
                btnText={element.btnText}
              />
            ))}
          </div>
        </section>
        <section>
          <img
            src={
              'https://www.dhbw.de/fileadmin/user_upload/Bilder_Grafiken/Kacheln/Bettina_Graefin_Bernadotte_DSC0515.jpg'
            }
          />
          <h4>heading</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
            laudantium qui numquam facere beatae molestiae placeat consectetur
            incidunt libero, non illum temporibus repellat excepturi aliquid
            dolore ducimus commodi, facilis officiis?
          </p>
          <input id='name' />
        </section>
      </>
    );
  }
  return (
    <>
      <div>Test</div>
      {component}
    </>
  );
}
export default App;
