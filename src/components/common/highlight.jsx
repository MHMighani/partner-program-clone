import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./highlight.scss";

function Highlight({ children }) {
  const {
    ref: magicSectionRef,
    inView,
    entry,
  } = useInView({
    trackVisibility: true,
    delay: 1000,
  });

  return (
    <strong
      ref={magicSectionRef}
      className={`highlight ${
        entry?.time > 1000 && entry?.isVisible ? "active" : ""
      }`}
    >
      {children}
    </strong>
  );
}

export default Highlight;
