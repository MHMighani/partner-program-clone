import EmailSignupForm from "./forms/emailSignupForm";
import SectionTitle from "./common/sectionTitle";
import heroImage from "../assets/hero-image.jpg";
import BlobSvg from "../assets/blog.svg";
import "./heroSection.scss";

function Stats({ number, comment }) {
  return (
    <div className="stats">
      <p className="stats__number">{number}</p>
      <p className="stats__comment">{comment}</p>
    </div>
  );
}

function ImageDescription({ info, link }) {
  return (
    <div className="hero-image__description">
      <span>
        <b>{info.title}</b>
        {info.company}
      </span>
      <a href={link.address} className="hero-image__link">
        {link.label}
      </a>
    </div>
  );
}

function HeroSection() {
  const title = (
    <>
      Let's become
      <br />
      Partners
    </>
  );
  return (
    <section className="section hero-section">
      <div className="section__container section__container--xl">
        <div className="decor">
          <img src={BlobSvg} alt="blob-background" />
        </div>
        <div className="hero-section__intro">
          <SectionTitle title={title} />

          <p className="hero-section__description">
            We have excellent communication products, you have your audience.
            Let’s&nbsp;conquer the market together.
          </p>

          <EmailSignupForm submitBtnText="Join Partner Program" />
          <div className="hero-section__stats">
            <Stats number="37,000" comment="businesses using our products" />
            <Stats number="1,500" comment="active Partners" />
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="hero" />
          <ImageDescription
            info={{ title: "Brandon Klayman,", company: " Conscious Commerce" }}
            link={{ address: "#", label: "Read success story >" }}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
