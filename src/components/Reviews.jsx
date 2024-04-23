import React from "react";
import { v4 as uuidv4 } from "uuid";

const consultations = [
  {
    id: uuidv4(),
    purpose: "Consulted for Skin",
    name: "Sophie Moore",
    location: "Mumbai",
    starsGiven: 4,
    date: "17/02/2024",
    text1: "One of a kind service",
    text2:
      "Excellent service, highly recommended. Great results, very satisfied!",
  },
  {
    id: uuidv4(),
    purpose: "Consulted for Hair",
    name: "Sophie Moore",
    location: "Mumbai",
    starsGiven: 4,
    date: "17/02/2024",
    text1: "One of a kind service",
    text2:
      "Fantastic experience, skilled professionals. Delighted with the outcome!",
  },
  {
    id: uuidv4(),
    purpose: "Consulted for Hair",
    name: "Sophie Moore",
    location: "Mumbai",
    starsGiven: 4,
    date: "17/02/2024",
    text1: "One of a kind service",
    text2:
      "Amazing service, exceeded expectations. Will definitely return for more!",
  },
];

function Reviews() {
  return (
    <div>
      <p>Stories from our valued customers</p>
      {consultations.map((item, index) => {
        return (
          <div key={item.id} className="border-2 border-solid border-red-400">
            <div>
              <p>{item.purpose}</p>
            </div>
            <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p>{item.location}</p>
                </div>
                <p>{item.date}</p>
              </div>
              {[...Array(item.starsGiven)].map((star, index) => (
                <span key={index}>*</span>
              ))}
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
