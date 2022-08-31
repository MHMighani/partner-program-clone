import { useInView } from "react-intersection-observer";

import "./highlight.scss";

function Highlight({ children, color }) {
  const { ref: magicSectionRef, inView } = useInView({
    trackVisibility: true,
    delay: 1000,
    triggerOnce: true,
  });

  return (
    <strong
      ref={magicSectionRef}
      className={`highlight ${color} ${inView ? "active" : ""}`}
    >
      {children}
    </strong>
  );
}

export default Highlight;
