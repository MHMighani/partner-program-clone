import SectionTitle from "./common/sectionTitle";
import "./businessProgramSection.scss";

function BusinessPlan({ title, description, linkText }) {
  return (
    <div className="business-plan plan">
      <h3 className="plan__title">{title}</h3>
      <p className="plan__description">{description}</p>
      <a href="#" className="btn btn--dark business-plan__link">
        {linkText}
      </a>
    </div>
  );
}

function BusinessProgramSection() {
  const title = (
    <>
      Choose a program
      <br /> that fits you best
    </>
  );

  return (
    <section className="section business-section">
      <SectionTitle title={title} />
      <div className="business-section__plans">
        <BusinessPlan
          title="Promote, earn, and&nbsp;grow"
          description="Promote products that define excellent customer service. Monetize your audience by simply sharing a link."
          linkText="Affiliate Program"
        />
        <BusinessPlan
          title="Become a solution provider"
          description="Create licenses for your customers and offer services around them. Get training, support, and resources dedicated to helping your business grow."
          linkText="Solution Program"
        />
      </div>
      <div className="business-section__developer-plan"></div>
    </section>
  );
}

export default BusinessProgramSection;
