import { useRef } from "react";

import "./emailSignupForm.scss";

function EmailSignupForm({ submitBtnText }) {
  const emailInputRef = useRef();

  // handle email submit
  function handleSubmit(e) {
    e.preventDefault();

    console.log(emailInputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit} className="email-signup-form">
      <input
        type="email"
        className="email-input"
        placeholder="Enter your email"
        ref={emailInputRef}
      />
      <button className="btn btn--red">{submitBtnText}</button>
    </form>
  );
}

export default EmailSignupForm;
