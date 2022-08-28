function ProfileForm() {
  return (
    <div className="profile-form">
      <div className="general">
        <div className="profile-picture"></div>
        <div className="email"></div>
      </div>
      <form>
        <div className="name">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="firstName">Last name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
        </div>
        <div className="contactName">
          <label htmlFor="contactName">Contact name</label>
          <input type="text" id="contactName" name="contactName" />
        </div>
        <div className="contactEmail">
          <label htmlFor="contactEmail">Contact email</label>
          <input type="email" name="contactEmail" id="contactEmail" />
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
