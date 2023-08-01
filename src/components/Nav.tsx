import art1 from "/art1.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32">
      <svg
        className="absolute bottom-0 left-1/2 -translate-x-1/2  "
        width="250"
        height="4"
        viewBox="0 0 250 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ pathLength: 1, opacity: 1 }}
          initial={{ pathLength: 0, opacity: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
          d="M2 2L428 1.99996"
          stroke="#282828"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="w-[50px] h-[50px]">
        <img src={art1} alt="Profile picture" className="rounded-full" />
      </div>
      <h1 className="text-lg font-bold">
        <a href="/">Hua.</a>
      </h1>
      <div className="space-y-1 cursor-pointer xl:hidden" onClick={()=>{
				setToggle(!toggle)
			}}>
        <span className="block h-0.5 w-8 bg-black"></span>
        <span className="block h-0.5 w-6 bg-black"></span>
        <span className="block h-0.5 w-4 bg-black"></span>
      </div>
    </nav>
  );
}
