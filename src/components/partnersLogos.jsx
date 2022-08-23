import SectionTitle from "./common/sectionTitle";

function Logo({ svgPath }) {
  return (
    <div>
      <img src={svgPath} alt="" />
    </div>
  );
}

function PartnersLogos() {
  // get all svg paths from the brands folder
  const reqSvgs = require.context("../assets/partnersLogos", true, /\.svg$/);
  const svgs = reqSvgs.keys().map((path) => reqSvgs(path));

  return (
    <section className="section partners-logos-section">
      <SectionTitle title="" />
      <div className="logos">
        {svgs.map((svg) => (
          <Logo key={svg} svgPath={svg} />
        ))}
      </div>
    </section>
  );
}

export default PartnersLogos;
