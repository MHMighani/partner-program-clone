import React from "react";

function SectionTitle({ title, size = "h1" }) {
  return React.createElement(size, { className: "section__title" }, title);
}

export default SectionTitle;
