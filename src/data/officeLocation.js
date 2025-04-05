import React from 'react';

// Location Data
export const locationData = [
  {
    id: 1,
    location: "London",
    address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
    phoneNumber: "+(1) 123 456 7890",
    email: "hi@educrat.com",
  },
  {
    id: 2,
    location: "Paris",
    address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
    phoneNumber: "+(1) 123 456 7890",
    email: "hi@educrat.com",
  },
  {
    id: 3,
    location: "Los Angeles",
    address: "328 Queensberry Street, North Melbourne VIC 3051, Australia.",
    phoneNumber: "+(1) 123 456 7890",
    email: "hi@educrat.com",
  },
];

// Location Component
const LocationList = () => {
  return (
    <div className="location-list">
      <h2>Our Locations</h2>
      {locationData.map(location => (
        <div key={location.id} className="location-item">
          <h3>{location.location}</h3>
          <p><strong>Address:</strong> {location.address}</p>
          <p><strong>Phone:</strong> {location.phoneNumber}</p>
          <p><strong>Email:</strong> <a href={`mailto:${location.email}`}>{location.email}</a></p>
        </div>
      ))}
    </div>
  );
};

export default LocationList;