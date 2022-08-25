import SectionTitle from "../common/sectionTitle";

import "./partnersLogos.scss";

function Logo({ svgPath }) {
  return (
    <div className="logo-container">
      <img src={svgPath} alt="" />
    </div>
  );
}

function PartnersLogos() {
  const sectionDetails = {
    title: (
      <>
        37000 in over <br /> 150 countries grow with our products
      </>
    ),
  };
  // get all svg paths from the brands folder
  const reqSvgs = require.context(
    "../../assets/businessIntro/partnersLogos",
    true,
    /\.svg$/
  );
  const svgs = reqSvgs.keys().map((path) => reqSvgs(path));

  return (
    <section className="section partners-logos-section">
      <div className="section__container">
        <SectionTitle size="h3" title={sectionDetails.title} />
        <div className="partners-logos-section__logos">
          {svgs.map((svg) => (
            <Logo key={svg} svgPath={svg} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersLogos;
