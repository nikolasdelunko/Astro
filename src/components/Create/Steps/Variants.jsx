import React, { useState, useEffect } from "react";
import { OnToggle, addGenre, $helpersStore } from "../../../store/storyStore";
import { useStore } from "@nanostores/react";

export default function Variants({ text }) {
  const [active, setActive] = useState(false);
  const { toggle } = useStore($helpersStore);

  console.log("Variants component", toggle);

  ///! tests
  useEffect(() => {
    if (toggle > 1) {
      setActive(false);
    }
  }, [active, toggle]);

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
            OnToggle();
            setActive(!active);
          }}
        >
          <p className="font-textSec text-[12px] text-text-color"> {text}</p>
        </div>
      )}
    </div>
  );
}
