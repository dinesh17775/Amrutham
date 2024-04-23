import React from "react";
import { v4 as uuidv4 } from "uuid";

// Array with objects
const dataArray = [
  {
    id: uuidv4(),
    text1: "Lorem ipsum dolor sit amet",
    text2:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    img: "/", // Placeholder image link
  },
  {
    id: uuidv4(),
    text1: "Duis aute irure dolor in reprehenderit ",
    text2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img: "/", // Placeholder image link
  },
  {
    id: uuidv4(),
    text1: "Lorem ipsum dolor sit amet,",
    text2:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    img: "/", // Placeholder image link
  },
];

function AyurvedaInfo() {
  return (
    <div className="border-2 border-solid border-red-500">
      <div className="border-2 border-solid border-black">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vel
          omnis cumque, repellendus obcaecati quisquam!
        </p>
      </div>
      <div>
        <div>
          {dataArray.map((item) => {
            return (
              <div>
                <div>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img src="" alt="" />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
          est possimus ad enim quasi aliquid quibusdam? Dolores labore adipisci
          deserunt laudantium inventore doloribus sequi. Voluptatibus quidem,
          ullam recusandae vitae neque accusantium alias nisi ratione iste! Qui
          dignissimos, sunt sint dolores culpa at facere, cupiditate
          voluptatibus, eos necessitatibus delectus? Officia, soluta.
        </div>
        <div>
          {dataArray.map((item) => {
            return (
              <div>
                <div>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AyurvedaInfo;
