import Programs from "./programs";
import Performance from "./performance";
import Partnership from "./partnership";
import Explorer from "./explorer";

import "./home.scss";

function Home() {
  return (
    <section className="section">
      <div className="home-section">
        <div className="home-section__title">Home</div>
        <Explorer />
        <Programs />
        <Performance />
        <Partnership />
      </div>
    </section>
  );
}

export default Home;
