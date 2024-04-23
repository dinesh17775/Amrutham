import React from "react";

const data = [
  {
    text1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ea!",
    text2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium necessitatibus aperiam minus totam at unde.",
  },
  {
    img: "img_link_2",
  },
  {
    text1: "Lorem, ipsum dolor.",
    text2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore quae natus similique id ex.",
  },
  {
    text1: "Lorem, ipsum dolor.",
    text2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore quae natus similique id ex.",
  },
  {
    img: "img_link_5",
  },
  {
    text1: "Lorem, ipsum dolor.",
    text2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore quae natus similique id ex.",
  },
  {
    img: "img_link_7",
  },
  {
    text1: "Lorem, ipsum dolor.",
    text2:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolore quae natus similique id ex.",
  },
];

function AyurvedaProducts() {
  return (
    <div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ut!
        </p>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index} className="border-2 border-solid border-green-400">
            <div>
              {item.text1 && <p>{item.text1}</p>}
              {item.text2 && <p>{item.text2}</p>}
            </div>
            {index === 1 || index === 4 || index === 6 ? (
              <div>
                <img src={item.img} alt="" />
                <p>hi bro</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AyurvedaProducts;
