import React from 'react';

// Pricing Data
export const pricingData = [
  {
    type: "Basic",
    price: 0,
    period: "per month",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support",
    ],
  },
  {
    type: "Professional",
    price: 599.95,
    period: "per month",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support",
    ],
  },
  {
    type: "Business",
    price: 999.95,
    period: "per month",
    features: [
      "All Operating Supported",
      "Great Interface",
      "Allows encryption",
      "Face recognized system",
      "24/7 Full support",
    ],
  },
];

// Pricing Component
const PricingList = () => {
  return (
    <div className="pricing-list">
      <h2>Pricing Plans</h2>
      {pricingData.map((plan, index) => (
        <div key={index} className="pricing-item">
          <h3>{plan.type}</h3>
          <p className="price">${plan.price.toFixed(2)} {plan.period}</p>
          <ul>
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;