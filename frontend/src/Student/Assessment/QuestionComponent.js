import React, { useState } from 'react';

const Question = ({ title, questions }) => {
  return (
    <div>
      <h2>{title}</h2>
      {questions &&
        questions.map((question, index) => (
          <div key={index}>
            <h5>Question {index + 1}</h5>
            <p style={{fontSize:"20px"}}>{question}</p>
          </div>
        ))}
    </div>
  );
};

const QuestionComponent = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const componentsData = [
    {
      title: "Gross Motor Activities",
      questions: ["Holds head erect when in sitting or standing position", "Sits without support", "Walks 5 feet", "Pushes or pulls furniture for rearrangement", "Walks upstairs and downstairs, alternating feet (may use wall or handrail for support)"],
    },
    {
      title: "Fine Motor Activities",
      questions: ["Makes a stack of 3 cans, or tiffin carrier containers or wooden blocks", "Uses, a spoon to stirsugar /salt to mix a drink", "Opens the door, operating door knob / latch / handle", "Pours liquid from a pitcher into a tumbler without spilling", "Carries a filled paper cup without crushing, tipping orspilling."],
    },
   {
        title: "Meal Motor Activities",
        questions: ["Drinks without spilling, mouthful from a glass or cup with assistance", "Differentiates between edible and non-edible substances", " Uses spoon / hand to pick up and eat mixed food", "Swallows soft foods that do not require chewing", " Chewssolid food"],
      },{
        title: "Dressing",
        questions: ["Extends and withdraws arms and legs as required while being dressed and undressed", "Unbuttons(shirt button, press buttons, hooks)", "Puts on shirt / blouse", " Offers little or no resistance while being dressed and undressed", "Selects clothing appropriate to seasonal / weather conditions and to different occasions."],
      },{
        title: "Toileting",
        questions: ["Question A?", "Question B?", "Question C?", "Question D?", "Question E?"],
      },{
        title: "Expressive Language",
        questions: ["Question A?", "Question B?", "Question C?", "Question D?", "Question E?"],
      },{
        title: "Social Interaction",
        questions: ["Question A?", "Question B?", "Question C?", "Question D?", "Question E?"],
      },{
        title: "Reading",
        questions: ["Question A?", "Question B?", "Question C?", "Question D?", "Question E?"],
      },{
        title: "Writing",
        questions: ["Question A?", "Question B?", "Question C?", "Question D?", "Question E?"],
      },{
        title: "Time",
        questions: ["Question A?", "Question B?", "Question C?", "Question D?", "Question E?"],
      },
      
    // Add more sets of questions as needed
  ];

  const nextComponent = () => {
    setCurrentComponentIndex((prevIndex) => (prevIndex === componentsData.length - 1 ? 0 : prevIndex + 1));
  };

  const prevComponent = () => {
    setCurrentComponentIndex((prevIndex) => (prevIndex === 0 ? componentsData.length - 1 : prevIndex - 1));
  };

  const currentComponent = componentsData[currentComponentIndex];

  return (
    <div className='question'>
     
      <Question title={currentComponent.title} questions={currentComponent.questions} />
      <div>
        <button                 className="btn btn-dark rounded-pill py-sm-2 px-sm-3 me-2 animated slideInLeft"
 onClick={prevComponent}>Back</button>
        <button                 className="btn btn-primary rounded-pill py-sm-2 px-sm-3 me-2 animated slideInLeft"
 onClick={nextComponent}>Next</button>
      </div>
    </div>
  );
};

export default QuestionComponent;
