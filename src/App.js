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
      <div className="exercises deadliftPage">
        <button back onClick={ () => setPage("welcome")}>back </button>
        <h1>deadlift</h1>
        <section>
          <ul>
            <li><strong>Step 1:</strong> Set up a base with your feet. After loading the desired amount of weight, approach the barbell. Set up your feet so your midfoot is directly underneath the bar as shown in figure 1. Position your feet so they are shoulder width apart. </li>
            <img src='/Deadlift/DeadliftStep1.png' alt="" width="500" height="600" />
            <li><strong>Step 2:</strong> Hinge the hips back all the way and grab the barbell. Push the hips as far back as possible while keeping them high in the air. This will aid in keeping the lower back straight, and stretching the hamstrings. Ensure the hips are hinged back (figure 2) as opposed to having the lower back rounded (figure 3) to avoid injury. Once the hips are hinged back all the way, grasp the bar with both hands as shown in figure 4. Secure the bar with both hands facing the same direction to avoid any asymmetries.  </li>
            <li><strong>Step 3:</strong> Bring the chest up and shoulders back. Slowly raise the chest so the shoulders are now directly over the barbell (figure 7). Simultaneously roll the shoulder blades back to engage the lat muscles. This will create tension against the bar making it easier to lift. </li>
            <li><strong>Step 4:</strong> Extend the hips forward and push through your feet. While pushing the ground away with the feet, thrust the hips forward. Lockout your knees and hips when at the very top. Make sure the back is not over extending at the top, and remains in a neutral position. </li>
            <li><strong>Step 5:</strong> Control the weight back down towards the ground. Allow gravity to handle most of the work bringing the barbell back down while maintaining some control over the barbell. Hinge the hips back until the barbell touches the ground. Repeat steps 1-5 until the determined number of reps have been achieved. </li>
          </ul>
        </section>
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
