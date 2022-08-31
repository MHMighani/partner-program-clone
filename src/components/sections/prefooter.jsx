import EmailSignupForm from "../forms/emailSignupForm";
import SectionTitle from "../common/sectionTitle";

import BlobRight from "../../assets/businessIntro/blob-prefooter-right.svg";
import BlobLeft from "../../assets/businessIntro/blob-prefooter-left.svg";

import { ReactComponent as TickSvg } from "../../assets/businessIntro/tick.svg";

import "./prefooter.scss";

function Prefooter() {
  const sectionDetails = {
    title: "We can’t wait to see you succeed",
    benefits: ["Free membership", "Easy money withdrawl"],
  };

  return (
    <section className="prefooter-section">
      <div className="container">
        <div rol="presentation" className="decor">
          <img
            className="decor__item decor__item--left"
            src={BlobLeft}
            alt="blob decor left"
          />
          <img
            className="decor__item decor__item--right"
            src={BlobRight}
            alt="blob decor right"
          />
        </div>
        <div>
          <SectionTitle size="p" title={sectionDetails.title} />
          <EmailSignupForm submitBtnText="Let's team up" />
          <ul className="benefits-list">
            {sectionDetails.benefits.map((benefit) => (
              <li className="item" key={benefit}>
                <TickSvg className="tick-svg" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Prefooter;
