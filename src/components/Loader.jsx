const Loader = () => {
  return (
    <div className="loader">
     <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{ margin: 'auto', background: 'none', display: 'block' }}
    width="40px"
    height="40px"
    color="red"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#333"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        keyTimes="0;1"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
      
    </div>
  );
};

export default Loader;
