const ArrowPrev = ({ empty = false }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
    >
      <g clipPath="url(#clip0_442_368)">
        <circle cx="18" cy="18" r="18" fill="#EBB268" fillOpacity="0.8" />
        <path
          d="M21.125 27.1004L12.7 18.7004C12.6 18.6004 12.5293 18.4921 12.488 18.3754C12.446 18.2587 12.425 18.1337 12.425 18.0004C12.425 17.8671 12.446 17.7421 12.488 17.6254C12.5293 17.5087 12.6 17.4004 12.7 17.3004L21.125 8.87539C21.3583 8.64206 21.65 8.52539 22 8.52539C22.35 8.52539 22.65 8.65039 22.9 8.90039C23.15 9.15039 23.275 9.44206 23.275 9.77539C23.275 10.1087 23.15 10.4004 22.9 10.6504L15.55 18.0004L22.9 25.3504C23.1333 25.5837 23.25 25.8711 23.25 26.2124C23.25 26.5544 23.125 26.8504 22.875 27.1004C22.625 27.3504 22.3333 27.4754 22 27.4754C21.6667 27.4754 21.375 27.3504 21.125 27.1004Z"
          fill={empty ? "#6F6F6F" : "#2D061B"}
        />
      </g>
      <defs>
        <clipPath id="clip0_442_368">
          <rect width="36" height="36" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowPrev;
