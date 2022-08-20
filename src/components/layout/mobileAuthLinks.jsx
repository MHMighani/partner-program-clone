function MobileAuthLinks() {
  return (
    <div className="mobile-auth-links">
      <form className="signup-form">
        <input type="email" placeholder="Enter your email" />
        <button className="btn auth-link red-btn">Join now</button>
      </form>

      <p className="login">
        <a href="#" className="login-link">
          Already a partner? <span className="login__text">Log in</span>
        </a>
      </p>
    </div>
  );
}

export default MobileAuthLinks;
