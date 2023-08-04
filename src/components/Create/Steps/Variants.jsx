import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toggle, addGenre } from "../../store/story/storySlice";

export default function Variants({ text }) {
  // const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  // const selectedFirst = useSelector((state) => state.story.toggle);

	//! dispatch

  ///! tests
  useEffect(() => {
    if (selectedFirst > 1) {
      setActive(false);
    }
  }, [active, selectedFirst]);

  return (
    <div>
      {active ? (
        <div
          className="cursor-pointer border-[1px] border-regular bg-regular rounded-[100px] px-[16px] py-[8px]"
          onClick={() => {
            setActive(!active);
          }}
        >
          <p className="font-textSec text-white text-[12px]"> {text}</p>
        </div>
      ) : (
        <div
          className="cursor-pointer border-[1px] border-regular rounded-[100px] px-[16px] py-[8px]"
          onClick={() => {
            // dispatch(addGenre(text));
            // dispatch(toggle());
            setActive(!active);
          }}
        >
          <p className="font-textSec text-text-color text-[12px]"> {text}</p>
        </div>
      )}
    </div>
  );
}
