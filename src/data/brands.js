import React from "react";

// Exporting the brands array
export const brands = [
  "/assets/img/clients/1.svg",
  "/assets/img/clients/2.svg",
  "/assets/img/clients/3.svg",
  "/assets/img/clients/4.svg",
  "/assets/img/clients/5.svg",
  "/assets/img/clients/6.svg",
];

// Example usage of brands in a React component
function BrandList() {
  return (
    <div className="brand-container">
      {brands.map((brand, index) => (
        <div key={index} className="brand-item">
          <img src={brand} alt={`Brand ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default BrandList;
