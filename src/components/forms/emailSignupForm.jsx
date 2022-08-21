import "./emailSignupForm.scss";

function EmailSignupForm({ submitBtnText }) {
  return (
    <form className="email-signup-form">
      <input
        type="email"
        className="email-input"
        placeholder="Enter your email"
      />
      <button className="btn btn--red">{submitBtnText}</button>
    </form>
  );
}

export default EmailSignupForm;
