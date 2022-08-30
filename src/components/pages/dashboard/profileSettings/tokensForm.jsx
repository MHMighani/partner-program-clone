import tokenImage from "../../../../assets/dashboard/profile-settings/token-form-pic.svg";

function TokensForm() {
  return (
    <div className="token-form">
      <div>
        <div className="seperator"></div>
        <p className="text-gray">
          API Token is a unique key that allows you to access the Partner
          Program API.
        </p>
      </div>
      <div className="form-row">
        <div className="form-wrapper">
          <label className="label" htmlFor="token">
            Name
          </label>
          <input className="input" type="text" />
        </div>
        <button className="btn btn--outline">Create token</button>
      </div>
      <div className="title">Your tokens</div>
      <div className="seperator"></div>
      <div className="token-form__footer">
        <img className="image" src={tokenImage} alt="token" />
        <span className="text">You don't have any active API tokens yet</span>
      </div>
    </div>
  );
}

export default TokensForm;
