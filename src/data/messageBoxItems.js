import React from 'react';

// Info Items Data
export const infoItems = [
  {
    id: 1,
    bgClass: "bg-info-1",
    textClass: "text-info-2",
    icon: "x",
    message: "Info: User pending action",
  },
  {
    id: 2,
    bgClass: "bg-warning-1",
    textClass: "text-warning-2",
    icon: "x",
    message: "Info: User pending action",
  },
  {
    id: 3,
    bgClass: "bg-error-1",
    textClass: "text-error-2",
    icon: "x",
    message: "Info: User pending action",
  },
  {
    id: 4,
    bgClass: "bg-success-1",
    textClass: "text-success-2",
    icon: "x",
    message: "Info: User pending action",
  },
];

// Info Component
const InfoList = () => {
  return (
    <div className="info-list">
      {infoItems.map(item => (
        <div key={item.id} className={`info-item ${item.bgClass}`}>
          <span className={`icon ${item.textClass}`}>{item.icon}</span>
          <p className={item.textClass}>{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoList;