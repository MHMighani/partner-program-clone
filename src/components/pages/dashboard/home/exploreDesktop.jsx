import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";

function LeftCard({ data = [], handler, selected, onCheckBoxClick }) {
  return (
    <div className="side">
      {data.map((item, index) => (
        <div onClick={() => handler(index)} className="side-item" key={item.id}>
          <input
            onChange={() => onCheckBoxClick(item.id)}
            className="checkbox"
            type="checkbox"
            checked={item.checked}
            disabled={item.disabled}
          />
          <span className="side-item__label">
            <span>{item.listTitle}</span>
            {selected === index && <FaChevronRight />}
          </span>
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

function ExploreDesktop({ data, handleCheckItem, handleSelectItem }) {
  const [isHidden, setIshidden] = useState(false);
  const [selected, setSelected] = useState(0);

  const details = {
    title: "Explore Partner app",
  };

  const checkIfAllTasksChecked = (data) => {
    return data.slice(0, 6).every((item) => item.checked);
  };

  useEffect(() => {
    //check if all items are checked
    if (checkIfAllTasksChecked(data)) {
      setSelected(6);
    }
  }, [data]);

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
          <LeftCard
            selected={selected}
            handler={(index) => setSelected(index)}
            data={data.slice(0, 6)}
            onCheckBoxClick={handleCheckItem}
          />
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
