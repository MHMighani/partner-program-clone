import { useState } from "react";

import explorer1 from "../../../../assets/dashboard/home/explorer-1.png";
import explorer2 from "../../../../assets/dashboard/home/explorer-2.png";
import explorer3 from "../../../../assets/dashboard/home/explorer-3.png";
import explorer4 from "../../../../assets/dashboard/home/explorer-4.png";
import explorer5 from "../../../../assets/dashboard/home/explorer-5.png";
import explorer6 from "../../../../assets/dashboard/home/explorer-6.png";
import finished from "../../../../assets/dashboard/home/finished.png";

const data = [
  {
    id: "signin",
    listTitle: "Sign in to LiveChat Partner Program",
    contentTitle: "Welcome to LiveChat Partnerships 👋",
    description:
      " Explore the application and start growing your business with LiveChat Partner Program. ",
    linkText: "Let’s get started",
    image: explorer1,
    checked: false,
  },
  {
    id: "discover",
    listTitle: "Discover our products",
    contentTitle: "Welcome to LiveChat Partnerships 👋",
    description:
      " Your clients and our products are a perfect match! See what products you can build your business with. ",
    linkText: "See our products",
    image: explorer2,
    checked: false,
  },
  {
    id: "links",
    listTitle: "Get your referral links",
    contentTitle: "Get your referral link for selected product",
    description:
      "  Earn recurring revenue when you refer merchants to LiveChat, ChatBot or to our program itself.  ",
    linkText: "Get link",
    image: explorer3,
    checked: false,
  },
  {
    id: "uptodate",
    listTitle: "Stay up to date",
    contentTitle: "Stay up to date, watch “The Bigger Picture",
    description:
      " Watch our video series, learn about new releases and get insights on how to implement them into your business. ",
    linkText: "Watch video",
    image: explorer4,
    checked: false,
  },
  {
    id: "solution",
    listTitle: "Apply to Solution Program",
    contentTitle: "Apply to Solution Program",
    description:
      "  Earn recurring revenue from direct recommendations or resell LiveChat on your own terms. Receive badges and get listed on LiveChatExperts Marketplace. ",
    linkText: "Apply",
    image: explorer5,
    checked: false,
  },
  {
    id: "license",
    listTitle: "Create first license for client",
    contentTitle: "Create first license for client",
    description:
      "   Setting up new licenses in Partner App is easy. Create one for your client or simply run a quick test!  ",
    linkText: "Apply to Solution Partner Program",
    last: true,
    image: explorer6,
    checked: false,
  },
];

const congratsCardData = {
  id: "congrats",
  listTitle: "Congrats!",
  contentTitle: "Congrats! You know the App inside out!",
  description: (
    <>
      Got any questions?
      <br />
      Chat with support or shoot us email.
    </>
  ),
  linkText: "Finish onboarding",
  last: false,
  image: finished,
};

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

function ExploreDesktop() {
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
          {isHidden ? "Show" : "Hide"}
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
