function AppIntroCard({ introDetails }) {
  return (
    <div className="app-intro-card">
      <div className="intro">
        {introDetails.logo}
        <p className="intro__description">{introDetails.description}</p>
        <a href={introDetails.linkAddress} className="btn btn--dark">
          {introDetails.linkLabel}
        </a>
      </div>
      <div className="app-preview">{introDetails.image}</div>
    </div>
  );
}

export default AppIntroCard;
