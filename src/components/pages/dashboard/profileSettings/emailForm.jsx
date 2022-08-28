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
    <div>
      <div>
        {data.map((item) => {
          return (
            <div>
              <input type="checkbox" />
              <div>{item.label}</div>
            </div>
          );
        })}
      </div>
      <button className="btn btn--blue">Save</button>
    </div>
  );
}

export default EmailForm;
