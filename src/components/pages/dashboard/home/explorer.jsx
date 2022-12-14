import ExploreDesktop from "./exploreDesktop";
import ExplorerMobile from "./explorerMobile";
import useIsDesktop from "../../../../hooks/useIsDesktop";

import explorer1 from "../../../../assets/dashboard/home/explorer-1.png";
import explorer2 from "../../../../assets/dashboard/home/explorer-2.png";
import explorer3 from "../../../../assets/dashboard/home/explorer-3.png";
import explorer4 from "../../../../assets/dashboard/home/explorer-4.png";
import explorer5 from "../../../../assets/dashboard/home/explorer-5.png";
import explorer6 from "../../../../assets/dashboard/home/explorer-6.png";
import finished from "../../../../assets/dashboard/home/finished.png";
import { useState } from "react";

const data = [
  {
    id: "signin",
    listTitle: "Sign in to LiveChat Partner Program",
    contentTitle: "Welcome to LiveChat Partnerships ๐",
    description:
      " Explore the application and start growing your business with LiveChat Partner Program. ",
    linkText: "Letโs get started",
    first: true,
    image: explorer1,
    checked: true,
    disabled: true,
  },
  {
    id: "discover",
    listTitle: "Discover our products",
    contentTitle: "Welcome to LiveChat Partnerships ๐",
    description:
      " Your clients and our products are a perfect match! See what products you can build your business with. ",
    linkText: "See our products",
    image: explorer2,
    checked: false,
    disabled: false,
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
    disabled: false,
  },
  {
    id: "uptodate",
    listTitle: "Stay up to date",
    contentTitle: "Stay up to date, watch โThe Bigger Picture",
    description:
      " Watch our video series, learn about new releases and get insights on how to implement them into your business. ",
    linkText: "Watch video",
    image: explorer4,
    checked: false,
    disabled: false,
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
    disabled: false,
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
    disabled: false,
  },
  {
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
    last: true,
    image: finished,
  },
];

function Explorer() {
  const [exploreData, setExploreData] = useState(data);

  const isDesktop = useIsDesktop();

  const handleCheckItem = (id) => {
    setExploreData((exploreData) =>
      exploreData.map((item) => {
        if (item.id === id) {
          return { ...item, checked: !item.checked };
        }
        return { ...item };
      })
    );
  };

  return isDesktop ? (
    <ExploreDesktop handleCheckItem={handleCheckItem} data={exploreData} />
  ) : (
    <ExplorerMobile data={exploreData} />
  );
}

export default Explorer;
