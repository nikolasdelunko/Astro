import React, { useState, useEffect } from "react";
import { toggle, addGenre, helpersStore } from "../../../store/storyStore";

export default function Variants({ text }) {
  const [active, setActive] = useState(false);
  const selectedFirst = helpersStore.get();
	
	console.log("Variants component", selectedFirst.toggle)

  ///! tests
  useEffect(() => {
    if (selectedFirst.toggle > 1) {
      setActive(false);
    }
  }, [active, selectedFirst.toggle]);

  return (
    <div>
      {active ? (
        <div
          className="cursor-pointer rounded-[100px] border-[1px] border-regular bg-regular px-[16px] py-[8px]"
          onClick={() => {
            setActive(!active);
          }}
        >
          <p className="font-textSec text-[12px] text-white"> {text}</p>
        </div>
      ) : (
        <div
          className="cursor-pointer rounded-[100px] border-[1px] border-regular px-[16px] py-[8px]"
          onClick={() => {
            addGenre(text);
            toggle();
            setActive(!active);
          }}
        >
          <p className="font-textSec text-[12px] text-text-color"> {text}</p>
        </div>
      )}
    </div>
  );
}
