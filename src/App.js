import logo from './logo.svg';
import './App.css';

function App() {
  const data = {
    "squat": {
      "name": "squat",
      "guide": "this is a step by step on how to preform a squat",
      "image": "/Squat.jpg",
      "steps": {
        1: "step 1",
        2: "step 2",
        3: "step 3",
      }

    }
  }
  
  function displaySteps() {
    const keys = Object.keys(data.squat.steps)

    return keys.map(step => {
      return <p>{data.squat.steps[step]}</p>
    });
  
  } 

  console.log(data.squat);
  console.log(data.squat.guide);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          { data.squat.guide }
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          SBD Coaching Companion
        </a>
      </header> */}
      <section>
        <h1>
          {data.squat.name}
        </h1>
        <p>
          {data.squat.guide}
        </p>
        <img src={data.squat.image} className="image">
        
        </img>
        <p>STEPS</p>
        {
          displaySteps()
        }
        {/* <p>{data.squat.steps[1]}</p>
        <p>{data.squat.steps[2]}</p>
        <p>{data.squat.steps[3]}</p> */}
      </section>





    </div>
  );
}






export default App;
