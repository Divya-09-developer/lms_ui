import React from "react";

// Exporting the steps array
export const steps = [
  {
    id: 1,
    icon: "icon-online-learning-4 text-64 text-green-1",
    title: "01. Learn",
    text: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
  },
  {
    id: 2,
    icon: "icon-graduation-1 text-64 text-green-1",
    title: "02. Graduate",
    text: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
  },
  {
    id: 3,
    icon: "icon-working-at-home-2 text-64 text-green-1",
    title: "03. Work",
    text: "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.",
  },
];

// Exporting the stepsTwo array
export const stepsTwo = [
  {
    id: 1,
    imageSrc: "/assets/img/home-3/works/1.svg",
    text: "Browse courses from our expert contributors.",
  },
  {
    id: 2,
    imageSrc: "/assets/img/home-3/works/2.svg",
    text: "Purchase quickly and securely.",
  },
  {
    id: 3,
    imageSrc: "/assets/img/home-3/works/3.svg",
    text: "That’s it! Start learning right away.",
  },
];

// React component for rendering the steps array
function StepsList() {
  return (
    <div className="steps-container">
      {steps.map((step) => (
        <div key={step.id} className="step-item">
          <i className={step.icon}></i> {/* Icon */}
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}

// React component for rendering the stepsTwo array
function StepsTwoList() {
  return (
    <div className="steps-two-container">
      {stepsTwo.map((step) => (
        <div key={step.id} className="step-two-item">
          <img src={step.imageSrc} alt={`Step ${step.id}`} /> {/* Image */}
          <p>{step.text}</p>
        </div>
      ))}
    </div>
  );
}

export { StepsList, StepsTwoList };
export default function App() {
  return (
    <div>
      <h2>Steps</h2>
      <StepsList />
      <h2>Steps Two</h2>
      <StepsTwoList />
    </div>
  );
}
