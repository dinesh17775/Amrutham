import React from "react";
import { v4 as uuidv4 } from "uuid";

const FooterElements = [
  { id: uuidv4(), title: "Information" },
  { id: uuidv4(), title: "About Us" },
  { id: uuidv4(), title: "Terms and Conditions" },
  { id: uuidv4(), title: "Privacy Policy" },
  { id: uuidv4(), title: "Privacy Policy for Mobile Apps" },
  { id: uuidv4(), title: "Shipping and Returns Policy" },
  { id: uuidv4(), title: "International Delivery" },
  { id: uuidv4(), title: "For Businesses, Hotels and Resorts" },
];

function Footer() {
  return (
    <div>
      {FooterElements.map((item, index) => {
        return (
          <p className={`${index === 0 ? "font-bold" : ""}`}>{item.title}</p>
        );
      })}
    </div>
  );
}

export default Footer;
