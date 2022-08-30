import Popup from "reactjs-popup";
import { useState, useEffect } from "react";
import Dots from "react-carousel-dots";

function ExploreTrigger() {
  return (
    <div className="explorer-mobile__trigger">Get to know Partner Program</div>
  );
}

function ExplorerModal({ item, selected, handleNext }) {
  return (
    <div className="explorer-mobile__body">
      <Dots length={6} visible={6} active={selected} />
      <div key={item.id} className="card">
        <b>{item.contentTitle}</b>
        <img className="card__image" src={item.image} alt={item.title} />
        <p className="card__description">{item.description}</p>

        <button onClick={item.first && handleNext} className="btn btn--blue">
          {item.linkText}
        </button>

        {!item.first && !item.last && (
          <button onClick={handleNext} className="btn btn--outline">
            next
          </button>
        )}

        {/* last item onboarding button */}
        {item.last && (
          <button className="btn btn--outline">Finish onboarding</button>
        )}
      </div>
    </div>
  );
}

function ExplorerMobile({ data }) {
  const [selected, setSelected] = useState(0);

  return (
    <Popup
      trigger={
        <div className="explorer-mobile">
          <ExploreTrigger />
        </div>
      }
    >
      {(close) => (
        <div className="explorer-mobile__modal">
          <button className="explorer-mobile__closeBtn" onClick={close}>
            &times;
          </button>
          <ExplorerModal
            handleNext={() => setSelected(selected + 1)}
            selected={selected}
            item={data[selected]}
          />
        </div>
      )}
    </Popup>
  );
}

export default ExplorerMobile;
