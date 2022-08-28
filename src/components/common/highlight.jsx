import { useInView } from "react-intersection-observer";

import "./highlight.scss";

function Highlight({ children, color }) {
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
      className={`highlight ${color} ${
        entry?.time > 1000 && inView ? "active" : ""
      }`}
    >
      {children}
    </strong>
  );
}

export default Highlight;
