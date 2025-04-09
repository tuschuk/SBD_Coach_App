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
    },

    "deadlift": {
      "name": "deadlift",
      "guide": "this is a step by step on how to preform a deadlift",
      "image": "/Deadlift.jpg",
      "steps": {
        1: "step 1",
        2: "step 2",
        3: "step 3",
      }

    },

    "bench": {
      "name": "bench",
      "guide": "this is a step by step on how to preform a benchpress",
      "image": "/Bench.jpg",
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

  function displayExercises() {
    const keys = Object.keys(data);

    return keys.map((item, index) => {
      return (
        <section key={index}>
        <h1>
          {data[item].name}
        </h1>
        {/* <p>
          {data.squat.guide}
        </p> */}
        <img src={data[item].image} className="image">
        
        </img>
        {/* <p>STEPS</p>
        {
          displaySteps()
        } */}
        {/* <p>{data.squat.steps[1]}</p>
        <p>{data.squat.steps[2]}</p>
        <p>{data.squat.steps[3]}</p> */}
      </section>
      )
    })
  }

  return (
    <div className="exercises">
      

      {displayExercises()}






    </div>
  );
}






export default App;
