import ProgramsSummaryImage from "../../../../assets/dashboard/home/programs-summary.svg";
import ProgramsBenefitsImage from "../../../../assets/dashboard/home/program-benefits.svg";
import accessDirectoryImage from "../../../../assets/dashboard/home/access-directory.svg";

function Cards({ data }) {
  return data.map((item) => (
    <div className="card" key={item.id}>
      <div className="image-wrapper">
        <img className="card__image" src={item.image} alt={item.id} />
      </div>
      <div className="card__description">{item.description}</div>
    </div>
  ));
}

function Partnership() {
  const title = "Enrich our partnership";
  const cards = [
    {
      id: "programs summary",
      description:
        "Discover our Programs and gain new functionalities within the app.",
      image: ProgramsSummaryImage,
    },
    {
      id: "access directory",
      description:
        "Check our educational materials and make the most of our Partner Program.NEW!",
      image: accessDirectoryImage,
    },
    {
      id: "programs benefits",
      description:
        "Claim your programs’ benefits and discover new business opportunities.",
      image: ProgramsBenefitsImage,
    },
  ];
  return (
    <div className="partnership">
      <h5 className="partnership__title">{title}</h5>
      <div className="partnership__cards">
        <Cards data={cards} />
      </div>
    </div>
  );
}

export default Partnership;
