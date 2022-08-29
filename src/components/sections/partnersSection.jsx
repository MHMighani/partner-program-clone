import SectionSeperator from "../../assets/businessIntro/section-seperator";
import SectionTitle from "../common/sectionTitle";
import Highlight from "../common/highlight";

import partnersMobileImage from "../../assets/businessIntro/partnersSection/partners-mobile.png";
import partnersDesktopImage from "../../assets/businessIntro/partnersSection/partners-desktop.png";
import blobBottomLeft from "../../assets/businessIntro/partnersSection/blob-bottom-left.svg";
import blobBottomRight from "../../assets/businessIntro/partnersSection/blob-bottom-right.svg";
import blobTopRight from "../../assets/businessIntro/partnersSection/blob-top-right.svg";
import blobTopLeft from "../../assets/businessIntro/partnersSection/blob-top-left.svg";

import "./partnersSection.scss";

const plans = [
  {
    title: (
      <>
        Strengthen your <br /> online presence
      </>
    ),
    description:
      "By offering reliable products, you reinforce your brand and gain the credibility you need to attract more customers.",
  },
  {
    title: (
      <>
        Discover new <br /> revenue streams
      </>
    ),
    description:
      "Opening up to the online communication industry will help you to create additional product and service offerings.",
  },
  {
    title: (
      <>
        Grow your <br /> customer base
      </>
    ),
    description:
      "Have your business promoted among our audience and get even more exposure for your business.",
  },
];

function Plan({ details }) {
  return (
    <div className="partners-section__plan">
      <h3 className="title">{details.title}</h3>
      <p className="description">{details.description}</p>
    </div>
  );
}

function PartnersSection() {
  const sectionDetails = {
    title: (
      <>
        Together,
        <br />
        we’re <Highlight>stronger</Highlight>
      </>
    ),
    description:
      "You don’t have to look for a new direction for your business on your own. Join forces with us, and let growth opportunities find you.",
    linkLabel: "Join Partner Program",
  };

  return (
    <section className="section partners-section">
      <div className="container">
        <div className="decor">
          <img className="decor-item left" src={blobTopLeft} alt="blob decor" />
          <img
            className="decor-item right"
            src={blobTopRight}
            alt="blob decor"
          />
        </div>
        <div className="section__intro">
          <div>
            <SectionTitle size="h2" title={sectionDetails.title} />
            <p className="section__summary">{sectionDetails.description}</p>
          </div>

          <div className="image-wrapper">
            <img
              className="mobile-image"
              src={partnersMobileImage}
              alt="three people laughing"
            />
            <img
              className="desktop-image"
              src={partnersDesktopImage}
              alt="three people laughing"
            />
          </div>
        </div>
      </div>

      <SectionSeperator previousColor="#fff" nextColor="#f6f6f7" />
      <div className=" partners-section__plans">
        <div className="container">
          <div className="decor">
            <img
              src={blobBottomRight}
              className="decor-item right"
              alt="blob decor"
            />
            <img
              src={blobBottomLeft}
              className="decor-item left"
              alt="blob decor"
            />
          </div>
          <div className="plan-items">
            {plans.map((plan) => (
              <Plan key={plan.title} details={plan} />
            ))}
          </div>
          <div className="partners-section__link">
            <a href="/" className="btn btn--red">
              {sectionDetails.linkLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
