import rightArrowSvg from "../../../../assets/dashboard/right-arrow.svg";

function InlineList() {
  const itemList = [
    { label: "paid", amount: 0 },
    { label: "trials", amount: 0 },
    { label: "expired", amount: 0 },
  ];

  return (
    <div className="inline-list">
      {itemList.map((item) => (
        <div className="list-item">
          <span>{item.amount}</span>
          {item.label}
        </div>
      ))}
    </div>
  );
}

function CardTitle({ title }) {
  return (
    <div className="program-card__title">
      <div>{title}</div>
      <img className="right-arrow" src={rightArrowSvg} alt="right arrow" />
    </div>
  );
}

function BalanceCard() {
  return (
    <div className="program-card">
      <CardTitle title="Balance" />
      <span>
        <span>$0.00</span>
      </span>
      <div>
        <span>total earnings</span>
        <span>
          <span>$0.00</span>
        </span>
      </div>

      <div>
        <button>withdraw money</button>
      </div>
    </div>
  );
}

function AffiliateCard() {
  return (
    <div className="program-card">
      <div>
        <CardTitle title="Affiliate" />
        <InlineList />
      </div>
    </div>
  );
}

function SolutionCard() {
  return (
    <div className="program-card">
      <CardTitle title="Solution" />
      <InlineList />
      <button>Create a license</button>
    </div>
  );
}

function Programs() {
  const programs = [
    {
      id: "balance",
      title: "Balace",
    },
    {
      id: "affiliate",
      title: "Affiliate Program",
    },
    {
      id: "solution",
      title: "Solution Program",
    },
  ];

  function ProgramCardsMobile() {
    return (
      <>
        <BalanceCard />
        <AffiliateCard />
        <SolutionCard />
      </>
    );
  }

  return (
    <div className="programs-wrapper">
      <div className="programs">
        <ProgramCardsMobile />
      </div>
    </div>
  );
}

export default Programs;
