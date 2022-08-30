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
        <div key={item.label} className="list-item">
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
  const btnLabel = "Widraw money";
  return (
    <div className="program-card balance">
      <CardTitle title="Balance" />
      <div className="desktop btn btn--link">{btnLabel}</div>

      <div className="values">
        <span>
          <span className="balance-value">$0.00</span>
        </span>
        <span>
          <span>total earnings</span>
          <span>$0.00</span>
        </span>
      </div>

      <div className="mobile">
        <button className="btn btn--outline">{btnLabel}</button>
      </div>
    </div>
  );
}

function AffiliateCard() {
  const getLinkLabel = "Get link";
  const campaignLabel = "Create a campaign";
  return (
    <div className="program-card affiliate">
      <CardTitle title="Affiliate" />
      <div className="desktop">
        <button className="btn btn--link">{getLinkLabel}</button>
        <button className="btn btn--link">{campaignLabel}</button>
      </div>
      <InlineList />
      <div className="mobile">
        <button className="btn btn--blue">{getLinkLabel}</button>
        <button className="btn btn--outline">{campaignLabel}</button>
      </div>
    </div>
  );
}

function SolutionCard() {
  const btnLabel = "Create a license";
  return (
    <div className="program-card solution">
      <CardTitle title="Solution" />
      <div className="desktop">
        <button className="btn btn--link">{btnLabel}</button>
      </div>
      <InlineList />
      <div className="mobile">
        <button className="btn btn--blue btn--blue--disabled">
          {btnLabel}
        </button>
      </div>
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
