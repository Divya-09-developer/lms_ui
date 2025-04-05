import React from "react";

// Exporting the eventKeys array
export const eventKeys = [
  {
    id: 1,
    color: "red",
    text: "Hide site events",
    icon: "eye",
    textColor: "text-orange-1",
  },
  {
    id: 2,
    color: "orange",
    text: "Hide category events",
    icon: "eye",
    textColor: "text-orange-6",
  },
  {
    id: 3,
    color: "blue",
    text: "Hide course events",
    icon: "eye",
    textColor: "text-blue-4",
  },
  {
    id: 4,
    color: "blue",
    text: "Hide group events",
    icon: "eye",
    textColor: "text-blue-5",
  },
  {
    id: 5,
    color: "purple",
    text: "Hide user events",
    icon: "eye",
    textColor: "text-purple-4",
  },
  {
    id: 6,
    color: "green",
    text: "Hide other events",
    icon: "eye",
    textColor: "text-green-1",
  },
];

// Example usage of eventKeys in a React component
function EventKeyList() {
  return (
    <div className="event-keys-container">
      {eventKeys.map((event) => (
        <div key={event.id} className="event-key-item" style={{ color: event.textColor }}>
          <div className="event-icon">
            <i className={event.icon}></i>
          </div>
          <div className="event-text">
            <span style={{ color: event.color }}>{event.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EventKeyList;
