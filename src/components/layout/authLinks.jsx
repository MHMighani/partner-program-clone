function AuthLinks() {
  return (
    <div className="navbar__auth-links">
      <a href="/app" className="auth-link btn btn--white">
        Log in
      </a>
      <a href="/" className="auth-link btn btn--red">
        Join now
      </a>
    </div>
  );
}

export default AuthLinks;
