import Programs from "./programs";
import Performance from "./performance";
import Partnership from "./partnership";

import "./home.scss";

function Home() {
  return (
    <section className="section">
      <div className="home-section">
        <Programs />
        <Performance />
        <Partnership />
      </div>
    </section>
  );
}

export default Home;
