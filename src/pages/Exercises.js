import logo from '../logo.svg';
import squatImage from '../Images/Squat.jpg'
import benchImage from '../Images/Bench.jpg'
import deadliftImage from '../Images/Deadlift.jpg'
import DeadliftStep1 from '../Images/Deadlift/DeadliftStep1.png'
import '../App.css';
import React, {useState} from "react";

function Exercises() {
  const [page, setPage] = useState("exercises");

  console.log(page);

  const data = {
    "squat": {
      "name": "Squat",
      "guide": "this is a step by step on how to preform a squat",
      "image": squatImage,
      "steps": [
        {
          title: "1. Set the Bar",
          description: "Position the bar securely across your upper back, just below the traps or on the rear delts, depending on your squat style."
        },
        {
          title: "2. Unrack the Bar",
          description: "Stand tall, lift the bar off the rack with control, and take a few deliberate steps back."
        },
        {
          title: "3. Set Your Stance",
          description: "Place your feet shoulder-width apart (or slightly wider), with toes pointed slightly outward."
        },
        {
          title: "4. Initiate the Movement",
          description: "Push your hips slightly back as if reaching for a chair behind you."
        },
        {
          title: "5. Brace Your Core",
          description: "Engage your core muscles to stabilize your spine throughout the lift."
        },
        {
          title: "6. Controlled Descent",
          description: "Lower yourself by bending at the hips and knees, maintaining balance and control."
        },
        {
          title: "7. Maintain a Neutral Spine",
          description: "Keep your chest up and gaze forward or slightly upward to help maintain proper posture"
        },
        {
          title: "8. Depth",
          description: "Descend until your thighs are just below parallel to the ground (or to your mobility's safe limit)."
        },
        {
          title: "9. Drive Up",
          description: "Push through your heels, keeping the knees tracking outward, and return to a standing position."
        }
      ]
    },

    "deadlift": {
      "name": "Deadlift",
      "guide": "this is a step by step on how to preform a deadlift",
      "image": deadliftImage,
      "steps": [
        {
          title: "1. Set Your Stance",
          description: "Position the bar directly over the midfoot, about an inch from your shins. Your feet should be hip-width apart with toes slightly pointed out. The bar should lightly graze your shins when you reach down.",
          image: DeadliftStep1
        },
        {
          title: "2. Create Foot Tension",
          description: "Distribute your weight through three key contact points: the heel, the ball of the big toe, and the ball of the pinky toe. Actively \"spread the floor\" with your feet to generate full-body tension and create a stable base."
        },
        {
          title: "3. Brace Your Core",
          description: "Inhale deeply into your belly and engage your core as if bracing for impact. This helps protect your spine and supports the lift from the ground up."
        },
        {
          title: "4. Hinge at the Hips",
          description: "Push your hips as far back as possible while keeping them relatively high. Avoid turning the movement into a squat—this common error shifts tension away from the posterior chain and can lead to lower back discomfort."
        },
        {
          title: "5. Grip the Bar",
          description: "Reach straight down to grasp the bar just outside your knees, using either a double overhand or mixed grip. Your arms should remain straight and vertical."
        },
        {
          title: "6. Pull the Slack Out of the Bar",
          description: "With your grip set, lift your chest, engage your lats by pulling the shoulder blades down and back, and create full-body tension. You should feel tightness from your feet to your shoulders before initiating the lift."
        },
        {
          title: "7. Drive Up",
          description: "Push through the floor using your legs and hips together, keeping the bar close to your body. Stand tall at the top with a neutral spine and locked-out hips, avoiding excessive leaning back."
        },
        {
          title: "8. Control the Descent",
          description: "Reverse the movement by hinging at the hips first, then bending the knees once the bar passes them. Lower the bar with control until it returns to the floor."
        }
      ]
    },

    "bench": {
      "name": "Bench",
      "guide": "this is a step by step on how to preform a benchpress",
      "image": benchImage,
      "steps": [
        {
          title: "1. Grip the Bar",
          description: "Position your hands so your forearms remain vertical throughout the lift. A narrower grip shifts more emphasis to the triceps, while a wider grip targets the chest more. Choose a grip width that aligns with your goals and maintains efficient mechanics."
        },
        {
          title: "2. Set Your Feet",
          description: "Place your feet shoulder-width apart with a slight outward rotation. Once positioned, keep them firmly planted and unmoving throughout the setup and lift. Stable foot placement is key to full-body tension and leg drive."
        },
        {
          title: "3. Create Full-Body Positioning",
          description: "Keeping your feet locked in place, push your upper body forward so that your head and shoulders come off the bench. Then, slide your body back toward your feet. This movement creates a natural arch in your lower back and positions your ankles behind your knees—ideal for generating leg drive."
        },
        {
          title: "4. Position Your Head Under the Bar",
          description: "Without shifting your feet, move your head (or entire body if necessary) downward until your eyes are directly under the bar. This ensures an efficient bar path when unracking."
        },
        {
          title: "5. Grip and Brace",
          description: "Squeeze the bar as hard as you can to activate the upper body and reinforce tension. Simultaneously, brace your core to protect your spine and enhance stability."
        },
        {
          title: "6. Unrack the Bar",
          description: "Retract your shoulder blades and press them firmly into the bench. Drive your hips upward (off the bench) to assist with a strong unrack. Once the bar is directly over your chest, bring your hips back down while pushing your feet into the floor and spreading your knees outward for leg drive."
        },
        {
          title: "7. Control the Descent",
          description: "Lower the bar with control to the mamillary line (roughly nipple level), keeping elbows at an appropriate angle—typically 45–75 degrees from the torso depending on grip and build."
        },
        {
          title: "8. Drive the Bar Up",
          description: "Press the bar explosively back up and slightly back toward the upper chest or shoulders, maintaining a smooth and efficient bar path."
        }
      ]
    },

    "lunge": {
        "name": "Lunge",
        "guide": "this is a step by step on how to perform a lunge",
        //"image": lungeImage,
        "steps": [
        {
            title: "1. Grip the Weights",
            description: "Hold dumbbells at your sides with a neutral grip"
        },
        {
            title: "2. Set Your Feet",
            description: "Begin by standing tall with your feet hip-width apart. This stance ensures a stable base for initiating the first step and supports proper alignment as you move through the lunge pattern."
        },
        {
            title: "3. Create Full-Body Positioning",
            description: "Engage your core, draw your shoulder blades slightly together, and keep your chest upright. This positioning creates full-body tension and control before the first step."
        },
        {
            title: "4. Initiate the Step",
            description: "Take a controlled step forward, landing with your heel first. Keep your front foot pointed forward and aligned with your hip. As your foot contacts the ground, prepare to absorb the load by engaging your glutes and quads."
        },
        {
            title: "5. Control the Descent",
            description: "Lower your body until your back knee gently touches or hovers just above the ground. Your front knee should be roughly above your ankle, forming a 90-degree angle. Avoid letting the front knee collapse inward or shift excessively forward by pushing the front knee more to the outside."
        },
        {
            title: "6. Drive Through the Step",
            description: "Press through the heel of your front foot to rise up and bring your rear leg forward into the next step. Maintain core tension and balance as you transition, continuing the pattern in a smooth and controlled manner."
        }
        ]
    },

    "pullup": {
        "name": "Pull Up",
        "guide": "this is a step by step on how to perform a pull up",
        //"image": pullupImage,
        "steps": [
        {
            title: "1. Mount the Bar",
            description: "Step up to the bar using a box or support and position your hands slightly wider than shoulder-width using an overhand (pronated) grip. A wider grip emphasizes the upper lats and back, while a narrower grip involves the biceps and lower lats more."
        },
        {
            title: "2. Hang Free",
            description: "Step off the box or support so your body is suspended in the air."
        },
        {
            title: "3. Create Full-Body Positioning",
            description: "Engage your core and glutes to create a hollow body position. Pull your ribs down and tuck your pelvis slightly under to keep your body in one rigid line. Finally, pull the shoulders together to help stabilize the shoulder joint."
        },
        {
            title: "4. Initiate the Pull",
            description: "Drive your elbows down and back to lift your chest toward the bar. Keep your body tight and avoid using momentum—focus on a strong, controlled pull."
        },
        {
            title: "5. Control the Ascent",
            description: "Continue pulling until your chin clears the bar or your chest touches it. Keep your elbows close to your body and your neck neutral. Avoid craning your head to reach the bar—aim for height through strength, not positioning."
        },
        {
            title: "6. Control the Descent",
            description: "Lower yourself slowly and under control until your arms are fully extended. Resist the drop and maintain core and shoulder tension to protect your joints and prepare for the next rep with proper alignment."
        }
    ]
    }
  }

  // Dynamic function to render steps for any exercise
  function renderSteps(steps) {
    return steps.map((step, index) => (
      <div key={index}>
        <p className="stepTitle">{step.title}</p>
        <p>{step.description}</p>
        {step.image && (
          <img 
            src={step.image} 
            width="300px" 
            height="300px" 
            className="stepImage" 
            alt={`${step.title} illustration`}
          />
        )}
      </div>
    ));
  }

  // Modified function to display exercises in rows of 3
  function displayExercises() {
    const keys = Object.keys(data);
    
    return keys.map((item, index) => {
      return (
        <section className="card" key={index}>
          <button onClick={() => setPage(item)} className="title">
            {data[item].name}
          </button>
          <img src={data[item].image} className="image" alt={data[item].name}/>
        </section>
      )
    })
  }

  // Dynamic function to display any exercise page
  function displayExercisePage(exerciseKey) {
    const exercise = data[exerciseKey];
    
    return (
      <div className={`${exerciseKey}Page`}>
        <button onClick={() => setPage("exercises")} className="backButton">
          back
        </button>
        <h1 className="pageTitle">{exercise.name}</h1>
        <section>
          <article className="step">
            {renderSteps(exercise.steps)}
          </article>
        </section>
      </div>
    );
  }

  // Check if current page is an exercise (not the main exercises list)
  if (page !== "exercises" && data[page]) {
    return displayExercisePage(page);
  }

  return (
    <div className="exercises">
      {displayExercises()}
    </div>
  );
}

export default Exercises;