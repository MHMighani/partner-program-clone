import EmailSignupForm from "../forms/emailSignupForm";

function MobileAuthLinks() {
  return (
    <div className="mobile-auth-links">
      <EmailSignupForm submitText="Join now" />

      <p className="login">
        <a href="#" className="login-link">
          Already a partner? <span className="login__text">Log in</span>
        </a>
      </p>
    </div>
  );
}

export default MobileAuthLinks;
