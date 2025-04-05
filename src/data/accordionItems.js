import React from "react";

// Exporting the accordionItems array
export const accordionItems = [
  {
    id: 1,
    question: "Do you offer discounts for students?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: 2,
    question: "Do you offer special pricing for big teams?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: 3,
    question: "What is the past experience of your teachers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: 4,
    question: "What is the course refund policy?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    id: 5,
    question: "Do you offer discounts for non-profits?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

// Example usage of accordionItems in a React component
function Accordion() {
  return (
    <div>
      {accordionItems.map((item) => (
        <div key={item.id} className="accordion-item">
          <h3 className="accordion-question">{item.question}</h3>
          <p className="accordion-answer">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
