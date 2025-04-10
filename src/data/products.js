import React from 'react';

// Product Data
export const productData = [
  {
    id: 1,
    image: "/assets/img/shop/products/1.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 500,
    preDiscount: 678,
  },
  {
    id: 2,
    image: "/assets/img/shop/products/2.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 1000,
    preDiscount: 1200,
  },
  {
    id: 3,
    image: "/assets/img/shop/products/3.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 750,
    preDiscount: 800,
  },
  {
    id: 4,
    image: "/assets/img/shop/products/4.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 200,
    preDiscount: 300,
  },
  {
    id: 5,
    image: "/assets/img/shop/products/5.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 1800,
    preDiscount: 2300,
  },
  {
    id: 6,
    image: "/assets/img/shop/products/6.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 950,
    preDiscount: 1200,
  },
  {
    id: 7,
    image: "/assets/img/shop/products/7.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 1300,
    preDiscount: 1600,
  },
  {
    id: 8,
    image: "/assets/img/shop/products/8.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 2000,
    preDiscount: 1400,
  },
  {
    id: 9,
    image: "/assets/img/shop/products/9.png",
    categories: ["Clothing", "Glasses", "T-Shirts"],
    name: "Wall Clock Brown",
    price: 400,
    preDiscount: 590,
  },
];

// Tags Data
export const tags = [
  { id: 1, href: "#", name: "Courses" },
  { id: 2, href: "#", name: "Learn" },
  { id: 3, href: "#", name: "Online" },
  { id: 4, href: "#", name: "Education" },
  { id: 5, href: "#", name: "LMS" },
  { id: 6, href: "#", name: "Training" },
];

// Categories Data
export const categories = [
  { id: 1, href: "#", name: "Gym" },
  { id: 2, href: "#", name: "High School" },
  { id: 3, href: "#", name: "Primary" },
  { id: 4, href: "#", name: "School" },
  { id: 5, href: "#", name: "University" },
  { id: 6, href: "#", name: "College" },
];

// Product Component
const ProductList = () => {
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {productData.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <p>
              Pre-Discount Price: <s>${product.preDiscount.toFixed(2)}</s>
            </p>
            <div className="categories">
              {product.categories.map((category, index) => (
                <span key={index} className="category">{category}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;