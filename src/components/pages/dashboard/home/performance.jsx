import affiliateSvg from "../../../../assets/dashboard/home/affiliate.svg";
import solutionSvg from "../../../../assets/dashboard/home/solution.svg";

function Cards({ data }) {
  return data.map((item) => (
    <div className="card-wrapper" id={item.id} key={item.id}>
      <div className="card">
        <img className="card__image" src={item.image} alt={item.id} />
        <h2 className="card__title">{item.title}</h2>
        <div className="card__description">{item.description}</div>
        <div className="card__link">
          <button className="link-button">{item.linkText}</button>
        </div>
      </div>
    </div>
  ));
}

function Performance() {
  const details = {
    title: "Performance over time",
  };

  const cards = [
    {
      id: "affiliate program",
      title: "You don't have any affiliate licenses yet",
      description:
        "Get your link or create a campaign, get new licenses, and see how they perform over time.",
      image: affiliateSvg,
      linkText: "Get link",
    },
    {
      id: "solution",
      title: "Solution Program",
      description:
        "Create and customize product accounts for your customers. Manage payments and monitor performance of your licenses.",
      image: solutionSvg,
      linkText: "Explore",
    },
  ];

  return (
    <div className="performance">
      <h5 className="performance__title">{details.title}</h5>
      <div className="performance__cards">
        <Cards data={cards} />
      </div>
    </div>
  );
}

export default Performance;
