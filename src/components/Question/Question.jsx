import React from "react";
import Window from "./Window";

const textData = [
  {
    name: "How does the AI-powered storybook creator work?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "Can I see a preview of my book before it's printed?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "What is the cost of creating a book?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "Can I create a book for a gift?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "How can I contact customer service if I have any questions?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "What kind of stories can I create with CrazyPrints?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "How long does it take to receive my book?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "Can I make changes to the story or illustrations after they have been generated?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "Do you ship internationally?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
  {
    name: "What kind of printing methods do you use?",
    text: "Our AI algorithms generate unique stories and illustrations based on your interests and preferences. You can choose from a wide variety of genres and themes, and our team of developers and illustrators will use that information to create a one-of-a-kind book just for you.",
  },
];

export default function Question() {
  return (
    <div className="pt-[145px] max-[420px]:pt-[48px] pb-[178px] max-[420px]:pb-[48px] flex flex-col justify-center items-center max-[420px]:items-start">
      <div className=" max-[420px]:w-[100%]">
        <h2 className="text-regular text-[48px] font-mainText max-[420px]:px-[10%] max-[420px]:text-[24px]">
          Frequently asked questions
        </h2>
      </div>
      <div className="flex flex-wrap justify-center z-10">
        <div className="flex flex-col">
          {textData
            .map((el) => (
              <Window name={el.name} text={el.text} key={Math.random(0, 1)} />
            ))
            .slice(0, textData.length / 2)}
        </div>
        <div>
          <div className="flex flex-col">
            {textData
              .map((el) => (
                <Window name={el.name} text={el.text} key={Math.random(0, 1)} />
              ))
              .slice(textData.length / 2)}
          </div>
        </div>
      </div>
    </div>
  );
}
