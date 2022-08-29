import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function LeftCard({ data = [], handler }) {
  return (
    <div className="side">
      {data.map((item, index) => (
        <div onClick={() => handler(index)} className="side-item" key={item.id}>
          <input className="checkbox" type="checkbox" />
          <span>{item.listTitle}</span>
        </div>
      ))}
    </div>
  );
}

function RightCard({ data, nextHandler }) {
  return (
    <div className="main">
      <img className="image" src={data.image} alt={data.id} />
      <div className="content">
        <b className="title">{data.contentTitle}</b>
        <p className="description">{data.description}</p>
        <div className="buttons">
          <button className="btn btn--blue">{data.linkText}</button>
          {!data.last && (
            <button onClick={nextHandler} className="btn">
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ExploreDesktop({ data }) {
  const [isHidden, setIshidden] = useState(false);
  const [selected, setSelected] = useState(0);

  const details = {
    title: "Explore Partner app",
  };

  return (
    <div className="explorer-desktop">
      <div className="header">
        <div className="title">{details.title}</div>
        <div className="toggle-btn" onClick={() => setIshidden(!isHidden)}>
          {isHidden ? (
            <>
              Show <FaChevronDown />
            </>
          ) : (
            <>
              Hide <FaChevronUp />
            </>
          )}
        </div>
      </div>
      {!isHidden && (
        <div className="box">
          <LeftCard handler={(index) => setSelected(index)} data={data} />
          <RightCard
            data={data[selected]}
            nextHandler={() => setSelected((selected) => selected + 1)}
          />
        </div>
      )}
    </div>
  );
}

export default ExploreDesktop;
