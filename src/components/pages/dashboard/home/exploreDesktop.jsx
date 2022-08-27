import { useState } from "react";

import explorer1 from "../../../../assets/dashboard/home/explorer-1.png";
import explorer2 from "../../../../assets/dashboard/home/explorer-2.png";
import explorer3 from "../../../../assets/dashboard/home/explorer-3.png";
import explorer4 from "../../../../assets/dashboard/home/explorer-4.png";
import explorer5 from "../../../../assets/dashboard/home/explorer-5.png";
import explorer6 from "../../../../assets/dashboard/home/explorer-6.png";

function LeftCard({ data = [] }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <input type="checkbox" />
          <span>{item.listTitle}</span>
        </div>
      ))}
    </div>
  );
}

function RightCard({ data }) {
  return (
    <div>
      <img src={data.image} alt={data.id} />
      <b>{data.contentTitle}</b>
      <p>{data.description}</p>
      <div>
        <button>{data.linkText}</button>
        {!data.last && <button>Next</button>}
      </div>
    </div>
  );
}

function ExploreDesktop() {
  const [isHidden, setIshidden] = useState(false);
  const [selected, setSelected] = useState(0);

  const data = [
    {
      id: "signin",
      listTitle: "Sign in to LiveChat Partner Program",
      contentTitle: "Welcome to LiveChat Partnerships 👋",
      description:
        " Explore the application and start growing your business with LiveChat Partner Program. ",
      linkText: "Let’s get started",
      image: explorer1,
    },
    {
      id: "discover",
      listTitle: "Discover our products",
      contentTitle: "Welcome to LiveChat Partnerships 👋",
      description:
        " Your clients and our products are a perfect match! See what products you can build your business with. ",
      linkText: "See our products",
      image: explorer2,
    },
    {
      id: "links",
      listTitle: "Get your referral links",
      contentTitle: "Get your referral link for selected product",
      description:
        "  Earn recurring revenue when you refer merchants to LiveChat, ChatBot or to our program itself.  ",
      linkText: "Get link",
      image: explorer3,
    },
    {
      id: "uptodate",
      listTitle: "Stay up to date",
      contentTitle: "Stay up to date, watch “The Bigger Picture",
      description:
        " Watch our video series, learn about new releases and get insights on how to implement them into your business. ",
      linkText: "Watch video",
      image: explorer4,
    },
    {
      id: "solution",
      listTitle: "Apply to Solution Program",
      contentTitle: "Apply to Solution Program",
      description:
        "  Earn recurring revenue from direct recommendations or resell LiveChat on your own terms. Receive badges and get listed on LiveChatExperts Marketplace. ",
      linkText: "Apply",
      image: explorer5,
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
    },
  ];

  const details = {
    title: "Explore Partner app",
  };

  return (
    <div className="explorer-desktop">
      <div className="header">
        <div className="title">{details.title}</div>
        <div onClick={() => setIshidden(!isHidden)}>
          {isHidden ? "Show" : "Hide"}
        </div>
      </div>
      {!isHidden && (
        <div>
          <LeftCard data={data} />
          <RightCard data={data[selected]} />
        </div>
      )}
    </div>
  );
}

export default ExploreDesktop;
