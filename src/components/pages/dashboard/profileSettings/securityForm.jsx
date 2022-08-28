function SecurityForm() {
  return (
    <div>
      <div>
        <div>
          <label htmlFor="currentPassowrd">Current password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="newPassword">Current password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" />
        </div>
      </div>
      <button className="btn btn--blue">change password</button>
    </div>
  );
}

export default SecurityForm;
