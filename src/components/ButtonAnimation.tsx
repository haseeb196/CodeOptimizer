import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const ButtonAnimation = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const toggleClass = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  const handleTransitionEnd = () => {
    toggleClass();
    addClass();
  };

  const addClass = () => {
    setIsFinished(true);
  };

  return (
    <div
      className={`button flex gap-1 ${isActive ? "active" : ""} ${
        isFinished ? "finished" : ""
      }`}
      onClick={toggleClass}
      onTransitionEnd={handleTransitionEnd}
    >
      <span className="loading">
        <i className="fas fa-spinner animate-spin"></i>
      </span>
      <span className="submit">Loading</span>
    </div>
  );
};

export default ButtonAnimation;
