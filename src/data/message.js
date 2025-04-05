import React, { useState } from 'react';

// Accordion Items Data
export const accordionItems = [
  {
    id: 1,
    title: "Starred",
    content: [
      {
        id: 2,
        name: "Darlene Robertson",
        message: "Hello",
        time: "35 mins",
        imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png",
      },
      {
        id: 1,
        name: "Darlene Robertson",
        message: "Hello",
        time: "35 mins",
        imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png",
      },
    ],
  },
  {
    id: 2,
    title: "Group",
    content: [
      {
        id: 1,
        name: "Darlene Robertson",
        message: "Hello",
        time: "35 mins",
        imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png",
      },
      {
        id: 2,
        name: "Darlene Robertson",
        message: "Hello",
        time: "35 mins",
        imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png",
      },
      {
        id: 3,
        name: "Darlene Robertson",
        message: "Hello",
        time: "35 mins",
        imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png",
      },
    ],
  },
  {
    id: 3,
    title: "Private",
    content: [
      {
        id: 1,
        name: "Darlene Robertson",
        message: "Hello",
        time: "35 mins",
        imageSrc: "/assets/img/dashboard/right-sidebar/messages/1.png",
      },
    ],
  },
];

// Accordion Component
const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {accordionItems.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            <h3>{item.title}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              {item.content.map((message) => (
                <div key={message.id} className="message">
                  <img src={message.imageSrc} alt={message.name} />
                  <div className="message-details">
                    <h4>{message.name}</h4>
                    <p>{message.message}</p>
                    <span>{message.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;