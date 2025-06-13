import logo from '../logo.svg';
import squatImage from '../Images/Squat.jpg'
import benchImage from '../Images/Bench.jpg'
import deadliftImage from '../Images/Deadlift.jpg'
import DeadliftStep1 from '../Images/Deadlift/DeadliftStep1.png'
import '../App.css';
import React, {useState} from "react";

function Exercises() {
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
      <div className="squatPage">
        <button onClick={ () => setPage("welcome")} className="backButton">back </button>
        <h1 className="pageTitle">Squat</h1>
        <section>
          <article className="step">
            <p className="stepTitle">1. Set the Bar </p>
            <p>
            Position the bar securely across your upper back, just below the traps or on the rear delts, depending on your squat style.
            </p>
            <p className="stepTitle">2. Unrack the Bar </p>
            <p>
            Stand tall, lift the bar off the rack with control, and take a few deliberate steps back. 
            </p>
            <p className="stepTitle">3. Set Your Stance </p>
            <p>
            Place your feet shoulder-width apart (or slightly wider), with toes pointed slightly outward.
            </p>
            <p className="stepTitle">4. Initiate the Movement </p>
            <p>
            Push your hips slightly back as if reaching for a chair behind you.
            </p>
            <p className="stepTitle">5. Brace Your Core </p>
            <p>
            Engage your core muscles to stabilize your spine throughout the lift.
            </p>
            <p className="stepTitle">6. Controlled Descent </p>
            <p>
            Lower yourself by bending at the hips and knees, maintaining balance and control.
            </p>
            <p className="stepTitle">7. Maintain a Neutral Spine </p>
            <p>
            Keep your chest up and gaze forward or slightly upward to help maintain proper posture 
            </p>
            <p className="stepTitle">8. Depth </p>
            <p>
            Descend until your thighs are just below parallel to the ground (or to your mobility's safe limit). 
            </p>
            <p className="stepTitle">9. Drive Up </p>
            <p>
            Push through your heels, keeping the knees tracking outward, and return to a standing position.
            </p>
          </article>
        </section>
    </div>)
  if(page === "deadlift")
    return (
      <div className="deadliftPage">
        <button onClick={ () => setPage("welcome")} className="backButton">back </button>
        <h1 className="pageTitle">Deadlift</h1>
        <section>
          <article className="step">
           <p className="stepTitle">1. Set Your Stance </p>
           <p>
            Position the bar directly over the midfoot, about an inch from your shins. Your feet should be hip-width apart with toes slightly pointed out. The bar should lightly graze your shins when you reach down.
           </p>
           <img src={DeadliftStep1} width="300px" height="300px" className ="stepImage"></img>
          <p className="stepTitle">2. Create Foot Tension </p>
           <p>
            Distribute your weight through three key contact points: the heel, the ball of the big toe, and the ball of the pinky toe. Actively "spread the floor" with your feet to generate full-body tension and create a stable base.
           </p>
           <p className="stepTitle">3. Brace Your Core </p>
           <p>
            Inhale deeply into your belly and engage your core as if bracing for impact. This helps protect your spine and supports the lift from the ground up.
           </p>
           <p className="stepTitle">4. Hinge at the Hips </p>
           <p>
            Push your hips as far back as possible while keeping them relatively high. Avoid turning the movement into a squat—this common error shifts tension away from the posterior chain and can lead to lower back discomfort.
           </p>
           <p className="stepTitle">5. Grip the Bar </p>
           <p>
            Reach straight down to grasp the bar just outside your knees, using either a double overhand or mixed grip. Your arms should remain straight and vertical.
           </p>
           <p className="stepTitle">6. Pull the Slack Out of the Bar </p>
           <p>
            With your grip set, lift your chest, engage your lats by pulling the shoulder blades down and back, and create full-body tension. You should feel tightness from your feet to your shoulders before initiating the lift.
           </p>
           <p className="stepTitle">7. Drive Up </p>
           <p>
            Push through the floor using your legs and hips together, keeping the bar close to your body. Stand tall at the top with a neutral spine and locked-out hips, avoiding excessive leaning back.
           </p>
           <p className="stepTitle">8. Control the Descent </p>
           <p>
            Reverse the movement by hinging at the hips first, then bending the knees once the bar passes them. Lower the bar with control until it returns to the floor.
           </p>
          </article>
          {/* <ul>
            <li><strong>Step 1:</strong> Set up a base with your feet. After loading the desired amount of weight, approach the barbell. Set up your feet so your midfoot is directly underneath the bar as shown in figure 1. Position your feet so they are shoulder width apart. </li>
            <img src={DeadliftStep1} alt="" width="500" height="600" />
            <li><strong>Step 2:</strong> Hinge the hips back all the way and grab the barbell. Push the hips as far back as possible while keeping them high in the air. This will aid in keeping the lower back straight, and stretching the hamstrings. Ensure the hips are hinged back (figure 2) as opposed to having the lower back rounded (figure 3) to avoid injury. Once the hips are hinged back all the way, grasp the bar with both hands as shown in figure 4. Secure the bar with both hands facing the same direction to avoid any asymmetries.  </li>
            <li><strong>Step 3:</strong> Bring the chest up and shoulders back. Slowly raise the chest so the shoulders are now directly over the barbell (figure 7). Simultaneously roll the shoulder blades back to engage the lat muscles. This will create tension against the bar making it easier to lift. </li>
            <li><strong>Step 4:</strong> Extend the hips forward and push through your feet. While pushing the ground away with the feet, thrust the hips forward. Lockout your knees and hips when at the very top. Make sure the back is not over extending at the top, and remains in a neutral position. </li>
            <li><strong>Step 5:</strong> Control the weight back down towards the ground. Allow gravity to handle most of the work bringing the barbell back down while maintaining some control over the barbell. Hinge the hips back until the barbell touches the ground. Repeat steps 1-5 until the determined number of reps have been achieved. </li>
          </ul> */}
        </section>

    </div>
  )
  if(page === "bench")
    return (
      <div className="benchPage">
        <button onClick={ () => setPage("welcome")} className="backButton">back </button>
        <h1 className="pageTitle">Bench</h1>
        <section>
          <article className="step">
            <p className="stepTitle">1. Grip the Bar</p>
            <p>
            Position your hands so your forearms remain vertical throughout the lift. A narrower grip shifts more emphasis to the triceps, while a wider grip targets the chest more. Choose a grip width that aligns with your goals and maintains efficient mechanics.
            </p>
             <p className="stepTitle">2. Set Your Feet</p>
            <p>
            Place your feet shoulder-width apart with a slight outward rotation. Once positioned, keep them firmly planted and unmoving throughout the setup and lift. Stable foot placement is key to full-body tension and leg drive.
            </p>
             <p className="stepTitle">3. Create Full-Body Positioning</p>
            <p>
            Keeping your feet locked in place, push your upper body forward so that your head and shoulders come off the bench. Then, slide your body back toward your feet. This movement creates a natural arch in your lower back and positions your ankles behind your knees—ideal for generating leg drive.
            </p>
             <p className="stepTitle">4. Position Your Head Under the Bar</p>
            <p>
            Without shifting your feet, move your head (or entire body if necessary) downward until your eyes are directly under the bar. This ensures an efficient bar path when unracking.
            </p>
             <p className="stepTitle">5. Grip and Brace</p>
            <p>
            Squeeze the bar as hard as you can to activate the upper body and reinforce tension. Simultaneously, brace your core to protect your spine and enhance stability.
            </p>
            <p className="stepTitle">6. Unrack the Bar</p>
            <p>
            Retract your shoulder blades and press them firmly into the bench. Drive your hips upward (off the bench) to assist with a strong unrack. Once the bar is directly over your chest, bring your hips back down while pushing your feet into the floor and spreading your knees outward for leg drive.
            </p>
            <p className="stepTitle">7. Control the Descent</p>
            <p>
            Lower the bar with control to the mamillary line (roughly nipple level), keeping elbows at an appropriate angle—typically 45–75 degrees from the torso depending on grip and build. 
            </p>
             <p className="stepTitle">8. Drive the Bar Up</p>
            <p>
            Press the bar explosively back up and slightly back toward the upper chest or shoulders, maintaining a smooth and efficient bar path.
            </p>
          </article>
        </section>
    </div>
  )

  return (
    <div className="exercises">
      {displayExercises()}
    </div>
  );
}

export default Exercises;
