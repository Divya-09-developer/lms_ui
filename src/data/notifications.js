import React from 'react';

// Notifications Data
export const notifications = [
  {
    id: 1,
    imageSrc: "/assets/img/dashboard/actions/1.png",
    heading: "Your resume updated!",
    time: 1, // Assuming time is in hours
  },
  {
    id: 2,
    imageSrc: "/assets/img/dashboard/actions/2.png",
    heading: "You changed password",
    time: 1,
  },
  {
    id: 3,
    imageSrc: "/assets/img/dashboard/actions/3.png",
    heading: "Your account has been created successfully",
    time: 1,
  },
  {
    id: 4,
    imageSrc: "/assets/img/dashboard/actions/4.png",
    heading: "You applied for a job Front-end Developer",
    time: 1,
  },
  {
    id: 5,
    imageSrc: "/assets/img/dashboard/actions/5.png",
    heading: "Your course uploaded successfully",
    time: 1,
  },
];

// Notifications Component
const NotificationsList = () => {
  return (
    <div className="notifications-list">
      <h2>Notifications</h2>
      {notifications.map(notification => (
        <div key={notification.id} className="notification-item">
          <img src={notification.imageSrc} alt={notification.heading} />
          <div className="notification-details">
            <h3>{notification.heading}</h3>
            <p>{notification.time} hour{notification.time > 1 ? 's' : ''} ago</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsList;