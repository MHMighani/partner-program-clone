function EmailForm() {
  const data = [
    {
      label: "Monthly summary",
      checked: true,
    },
    {
      label: "Solution Program weekly summary",
      checked: true,
    },
    {
      label: "Performance notifications",
      checked: true,
    },
  ];

  return (
    <div className="email-form">
      <div>
        {data.map((item) => {
          return (
            <div className="checkbox-form">
              <input type="checkbox" />
              <label className="label">{item.label}</label>
            </div>
          );
        })}
      </div>
      <button className="btn btn--blue btn--blue--disabled">Save</button>
    </div>
  );
}

export default EmailForm;
