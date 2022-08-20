import { useState } from "react";
import "./hamburgerBtn.scss";

function HamburgerBtn({ onBtnClick }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleBtnClick() {
    setIsExpanded(!isExpanded);
    onBtnClick();
  }

  return (
    <div
      className={`hamburger-btn ${isExpanded ? "hamburger-btn--expanded" : ""}`}
      onClick={handleBtnClick}
    >
      <span className="hamburger-btn__text">
        {isExpanded ? "Close" : "Menu"}
      </span>

      <svg
        className="hamburger-btn__button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 17 16"
        width="20"
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M1 3.5h15" className="hamburger-btn__bar"></path>
          <path d="M1 8h15" className="hamburger-btn__bar"></path>
          <path d="M1 12.5h15" className="hamburger-btn__bar"></path>
        </g>
      </svg>
    </div>
  );
}

export default HamburgerBtn;
