import TextAndButton from './components/TextAndButton';
import './App.css';

function App() {
  return (
    <>
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
          <TextAndButton
            heading='Headline 1'
            content='Content 1'
            btnText='Button 1'
          />
          <TextAndButton
            heading='Headline 2'
            content='Content 2'
            btnText='Button 2'
          />
          <TextAndButton
            heading='Headline 3'
            content='Content 3'
            btnText='Button 3'
          />
          <TextAndButton
            heading='Headline 4'
            content='Content 4'
            btnText='Button 4'
          />
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
export default App;
