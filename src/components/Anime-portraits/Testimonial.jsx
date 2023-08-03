import React, { useState } from "react";
import ArrowNext from "../Theme/icons/ArrowNext";
import ArrowPrev from "../Theme/icons/ArrowPrev";
import Card from "../Testimonials/Card";

const data = [
  {
    text: `“With CrazyPrints, you can choose from a wide variety of genres and themes, so you'll never run out of new and exciting stories to create”.`,
    author: "Adam Smith",
  },
  {
    text: `“With CrazyPrints, you can choose from a wide variety of genres and themes, so you'll never run out of new and exciting stories to create”.`,
    author: "Adam Smith",
  },
  {
    text: `“With CrazyPrints, you can choose from a wide variety of genres and themes, so you'll never run out of new and exciting stories to create”.`,
    author: "Adam Smith",
  },
  {
    text: `“With CrazyPrints, you can choose from a wide variety of genres and themes, so you'll never run out of new and exciting stories to create”.`,
    author: "Adam Smith",
  },
  {
    text: `“With CrazyPrints, you can choose from a wide variety of genres and themes, so you'll never run out of new and exciting stories to create”.`,
    author: "Adam Smith",
  },
];

export default function Testimonial() {
  const [next, setNext] = useState(3);
  const [prev, setPrev] = useState(0);
  const [last, setLast] = useState(false);

  const increment = () => {
    if (data.length > next) {
      setNext(next + 3);
      setPrev(prev + 3);
    } else {
      setLast(true);
    }
  };

  const decrement = () => {
    if (next > 3) {
      setPrev(prev - 3);
      setNext(next - 3);
    } else {
      setLast(false);
      setPrev(0);
    }
  };

  return (
    <div className=" pb-[128px] px-[5%] max-[420px]:pb-[500px]">
      <div className="flex justify-between">
        <div>
          <h1 className="flex font-mainText pb-[8px] text-regular text-[32px]  max-[420px]:mx-[0%]  leading-[35px] max-[420px]:text-[24px] max-[420px]:leading-[32px]">
            Testimonial
          </h1>
          <h2 className="mb-[64px] max-w-[832px] max-[420px]:mb-[34px] font-main text-white text-[16px]  leading-[22px]  max-[420px]:text-[14px] max-[420px]:leading-[20px]">
            We have made the process as simple and convenient as possible
          </h2>
        </div>
        <div className="flex items-center gap-[16px] max-[420px]:items-start">
          <div
            className="cursor-pointer"
            onClick={() => {
              decrement();
            }}
          >
            <ArrowPrev empty={prev === 0 ? true : false} />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              increment();
            }}
          >
            <ArrowNext empty={last} />
          </div>
        </div>
      </div>
      <div className="flex gap-[32px] overflow-hidden ">
        {data.slice(prev, next).map((el) => (
          <Card
            text={el.text}
            leadingP={true}
            author={el.author}
            key={Math.random(0, 1)}
          />
        ))}
      </div>
    </div>
  );
}
