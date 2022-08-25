import SectionTitle from "../common/sectionTitle";
import { ReactComponent as LinkSvg } from "../../assets/businessIntro/link.svg";
import * as images from "../../assets/businessIntro/businessProgramSection";

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
        Choose a program
        <br /> that fits you best
      </>
    ),
  };

  const businesses = [
    {
      title: <>Promote, earn, and&nbsp;grow</>,
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
      {/* <div>
        <img src={images.BlobSvg} alt="decor" />
      </div> */}
      <div className="section__container">
        <SectionTitle title={sectionDetails.title} size="h1" />

        <img src={images.ImageTablet} alt="business" />

        <div className="business-section__plans">
          <div className="business-plans">
            {businesses.map((business) => (
              <BusinessPlan key={business.title} details={business} />
            ))}
          </div>
          <div className="developer-plans">
            <BusinessPlan details={developerPlan} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessProgramSection;
