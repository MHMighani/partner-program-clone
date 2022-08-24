import EmailSignupForm from "./forms/emailSignupForm";
import SectionTitle from "./common/sectionTitle";
import { ReactComponent as TickSvg } from "../assets/tick.svg";

function Prefooter() {
  const sectionDetails = {
    title: "We can’t wait to see you succeed",
  };

  const benefits = ["Free membership", "Easy money withdrawl"];

  return (
    <>
      <SectionTitle title={sectionDetails.title} />
      <EmailSignupForm submitBtnText="Let's team up" />
      <ul className="benefits-list">
        {benefits.map((benefit) => (
          <li key={benefit}>
            <TickSvg />
            {benefit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Prefooter;
