import logo from './logo.svg';
import squatImage from './Images/Squat.jpg'
import benchImage from './Images/Bench.jpg'
import deadliftImage from './Images/Deadlift.jpg'
import './App.css';
import React, {useState} from "react";

function App() {
  const [page, setPage] = useState("welcome");

  console.log(page);

  const data = {
    "squat": {
      "name": "squat",
      "guide": "this is a step by step on how to preform a squat",
      "image": squatImage,
      "steps": {
        1: "step 1",
        2: "step 2",
        3: "step 3",
      }
    },

    "deadlift": {
      "name": "deadlift",
      "guide": "this is a step by step on how to preform a deadlift",
      "image": deadliftImage,
      "steps": {
        1: "step 1",
        2: "step 2",
        3: "step 3",
      }

    },

    "bench": {
      "name": "bench",
      "guide": "this is a step by step on how to preform a benchpress",
      "image": benchImage,
      "steps": {
        1: "step 1",
        2: "step 2",
        3: "step 3",
      }

    }
  }
  
  function displaySteps(page) {
    const keys = Object.keys(data[page].steps)

      return keys.map(step => {
        return <p>{data[page].steps[step]}</p>
      });  
  } 

  function displayExercises() {
    const keys = Object.keys(data);

    return keys.map((item, index) => {
      return (
        <section className="card" key={index}>
          <button onClick={() => setPage(item)} className="title">
            {data[item].name}
          </button>
          <img src={data[item].image} className="image"/>
      </section>
      )
    })
  }

  function handleClick() {
    console.log("clicked")
  }

  function displayPage (page) {
    return (
      <div className="exercises">
        <button back onClick={ () => setPage("welcome")}>back </button>
        <h1>{data[page].name}</h1>
        {displaySteps (page)}
    </div>
    )
  }

  if(page === "squat")
    return (
     <>
      {displayPage(page)}
     </>
  )
  if(page === "deadlift")
    return (
      <div className="exercises">
        <h1>deadlift</h1>
    </div>
  )
  if(page === "bench")
    return (
      <div className="exercises">
        <h1>bench</h1>
    </div>
  )

  return (
    <div className="exercises">
      {displayExercises()}
    </div>
  );
}

export default App;
