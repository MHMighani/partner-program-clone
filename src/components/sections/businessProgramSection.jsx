import SectionTitle from "../common/sectionTitle";
import { ReactComponent as LinkSvg } from "../../assets/businessIntro/link.svg";
import * as images from "../../assets/businessIntro/businessProgramSection";
import Highlight from "../common/highlight";

import "./businessProgramSection.scss";

function BusinessPlan({ details }) {
  const linkClass =
    details.type === "business"
      ? "btn btn--dark business-plan__link"
      : "developer-plan__link";
  return (
    <div className="business-plan">
      <div>
        <h3 className="business-plan__title">{details.title}</h3>
        <p className="business-plan__description">{details.description}</p>
      </div>

      <a href="/" className={linkClass}>
        {details.linkText}
      </a>
    </div>
  );
}

function BusinessProgramSection() {
  const sectionDetails = {
    title: (
      <>
        make your businesses
        <br /> <Highlight>our business</Highlight>
      </>
    ),
    titleDesktop: (
      <>
        Choose a program
        <br />
        that <Highlight>fits you best</Highlight>
      </>
    ),
  };

  const businesses = [
    {
      title: (
        <>
          Promote, earn, <br />
          and&nbsp;grow
        </>
      ),
      description:
        "Promote products that define excellent customer service. Monetize your audience by simply sharing a link.",
      linkText: "Affiliate Program",
      type: "business",
    },
    {
      title: "Become a solution provider",
      description:
        "Create licenses for your customers and offer services around them. Get training, support, and resources dedicated to helping your business grow.",
      linkText: "Solution Program",
      type: "business",
    },
  ];

  const developerPlan = {
    title: "Build and monetize apps",
    description:
      "Create new solutions and market them to our customer base of over 37,000 businesses.",
    linkText: (
      <>
        Visit Developer Program <LinkSvg />
      </>
    ),
    type: "developer",
  };

  return (
    <section className="section business-section">
      <div className="container container--xl">
        <div className="decor">
          <img
            className="decor__item decor__item--right decor__item--bottom"
            src={images.BlobSvg}
            alt="blob"
          />
        </div>
        <div className="business-section__body">
          <div className="image-wrapper desktop">
            <img
              className="image"
              src={images.ImageDestkop1}
              alt="smiling woman"
            />
          </div>
          <div className="content">
            <div className="business-section__title-desktop">
              <SectionTitle title={sectionDetails.titleDesktop} size="h2" />
            </div>
            <div className="business-section__title-mobile">
              <SectionTitle title={sectionDetails.title} size="h2" />
            </div>
            <img
              className="image-mobile"
              src={images.ImageTablet}
              alt="two people smiling"
            />
            <div className="business-plans">
              {businesses.map((business) => (
                <BusinessPlan key={business.title} details={business} />
              ))}
            </div>
          </div>
        </div>
        <div className="business-section__footer">
          <div className="plan-container">
            <BusinessPlan details={developerPlan} />
          </div>
          <div className="desktop-image">
            <img src={images.ImageDestkop2} alt="man talking" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessProgramSection;
