import { useForm } from "react-hook-form";
import Select from "react-select";
import Input from "../../../common/input";

function BillingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  const selectorOptions = [
    { value: "country-1", label: "country-1" },
    { value: "country-2", label: "country-2" },
    { value: "country-3", label: "country-3" },
  ];
  return (
    <div className="billing-form">
      <div className="title">Payment information</div>
      <div className="seperator"></div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="paypal">
            <Input
              errors={errors}
              label="Your PayPal address"
              id="paypal"
              name="paypal"
              register={register}
            />

            <span className="text-gray">
              This data will be used for invoicing, whenever you want to
              withdraw money from Partner Program.
            </span>
          </div>
          <div className="title">Invoicing Details</div>
          <div className="seperator"></div>
          <div className="text-gray">
            This data will be used for invoicing, whenever you want to withdraw
            money from Partner Program.
          </div>
          <div className="form-row radio-forms">
            <span className="label">Account type:</span>
            <div className="radio-wrapper">
              <input type="radio" name="accountType" id="individual-radio" />
              <label htmlFor="individual-radio" className="label">
                individual
              </label>
            </div>
            <div className="radio-wrapper">
              <input type="radio" name="accountType" id="business-radio" />
              <label htmlFor="business-radio" className="label">
                Business
              </label>
            </div>
          </div>
          <div>
            <div className="form-row">
              <Input
                label="Company name / Full name"
                name="companyName"
                id="companyName"
                register={register}
                errors={errors}
              />

              <div className="country-select">
                <Select options={selectorOptions} />
              </div>
            </div>

            <Input
              name="address"
              label="Address"
              errors={errors}
              register={register}
              id="address"
            />

            <div className="form-row">
              <Input
                name="vatId"
                label="VAT ID (optional)"
                id="vatId"
                errors={errors}
                register={register}
              />

              <Input
                name="city"
                label="City"
                id="city"
                errors={errors}
                register={register}
              />
            </div>
            <div className="form-row">
              <Input
                name="state"
                errors={errors}
                register={register}
                label="City"
                id="state"
              />

              <Input
                name="zipCode"
                errors={errors}
                register={register}
                id="zipCode"
                label="Zip code (optional)"
              />
            </div>
            <div>
              <button className="btn btn--blue btn--blue--disabled">
                All Saved
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BillingForm;
