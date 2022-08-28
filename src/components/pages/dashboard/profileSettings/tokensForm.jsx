import tokenImage from "../../../../assets/dashboard/profile-settings/token.svg";

function TokensForm() {
  return (
    <div>
      <div>
        <p>
          API Token is a unique key that allows you to access the Partner
          Program API.
        </p>
      </div>
      <div>
        <label htmlFor="token"></label>
        <input type="text" />
      </div>
      <div>Your tokens</div>
      <div className="seperator"></div>
      <div>
        <img src={tokenImage} alt="token" />
        <span>You don't have any active API tokens yet</span>
      </div>
    </div>
  );
}

export default TokensForm;
