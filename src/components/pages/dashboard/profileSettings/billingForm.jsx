function BillingForm() {
  return (
    <div className="billing-form">
      <div className="title">Payment information</div>
      <div className="seperator"></div>
      <div className="paypal">
        <div>Your PayPal address </div>
      </div>
      <div className="title">Invoicing Details</div>
      <div className="seperator"></div>
      <div className="text-gray">
        This data will be used for invoicing, whenever you want to withdraw
        money from Partner Program.
      </div>
      <div>
        <div>
          <label htmlFor=""> Company name / Full name</label>
          <input type="text" id="companyName" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" />
        </div>
        <div>
          <div>
            <label htmlFor="vatId">VAT ID (optional)</label>
            <input type="text" id="vatId" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" id="city" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="state">State (optional)</label>
            <input type="text" id="state" />
          </div>
          <div>
            <label htmlFor="zipCode">Zip code (optional)</label>
            <input type="text" id="zipCode" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillingForm;
