import SectionSeperator from "../../assets/businessIntro/section-seperator";
import SectionTitle from "../common/sectionTitle";

import "./partnersSection.scss";

function Plan({ details }) {
  return (
    <div>
      <h3>{details.title}</h3>
      <p>{details.description}</p>
    </div>
  );
}

function PartnersSection() {
  const sectionDetails = {
    title: (
      <>
        Together,
        <br />
        we’re stronger
      </>
    ),
    description:
      "You don’t have to look for a new direction for your business on your own. Join forces with us, and let growth opportunities find you.",
    linkLabel: "Join Partner Program",
  };

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

  return (
    <section className="section partners-section">
      <div className="section__container">
        <div className="section__intro">
          <SectionTitle size="h2" title={sectionDetails.title} />
          <p className="section__summary">{sectionDetails.description}</p>
        </div>
        <img src="" alt="" />
      </div>
      <SectionSeperator />
      <div className="partners-section__plans">
        {plans.map((plan) => (
          <Plan key={plan.title} details={plan} />
        ))}
        <div className="partners-section__link">
          <a href="/" className="btn btn--red">
            {sectionDetails.linkLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
