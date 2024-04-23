import React from "react";
import { v4 as uuidv4 } from "uuid";

const appointments = [
  {
    id: uuidv4(),
    title: "Make Appointment",
    text: "Schedule your appointment with our experienced team to address your healthcare needs efficiently. We prioritize your convenience and well-being.",
  },
  {
    id: uuidv4(),
    title: "Consultations",
    text: "Book a consultation session to discuss your concerns and queries with our knowledgeable professionals. We offer personalized advice tailored to your specific health requirements.",
  },
  {
    id: uuidv4(),
    title: "Treatment Planning",
    text: "Develop a comprehensive treatment plan in collaboration with our specialists to achieve your health goals effectively. We consider your unique circumstances and preferences to ensure optimal outcomes.",
  },
  {
    id: uuidv4(),
    title: "Maintenance",
    text: "Continue your journey towards wellness with our maintenance services designed to support your ongoing health needs. We provide regular check-ups and adjustments to preserve your well-being.",
  },
];

function Approach() {
  return (
    <div>
      <div>
        <p>Lorem, ipsum dolor.</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos earum
          dolor quod itaque totam asperiores numquam, perspiciatis iure et
          facere necessitatibus pariatur vel ipsum fuga?
        </p>
      </div>
      {appointments.map((item, index) => {
        return (
          <div key={item.id}>
            <div>
              <p>{index + 1}</p>
            </div>
            <p>{item.title}</p>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Approach;
