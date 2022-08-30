import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../common/input";

function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="profile-form">
        <div className="seperator"></div>
        <div className="general">
          <div className="avatar">
            <span>M</span>
          </div>
          <div className="email">user email</div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name form-row">
            <Input
              id="firstName"
              name="firstName"
              register={register}
              errors={errors}
              label="First Name"
            />

            <Input
              id="lastName"
              label="Last name"
              name="lastName"
              register={register}
              errors={errors}
            />
          </div>

          <Input
            label="Contact name"
            type="text"
            id="contactName"
            name="contactName"
            register={register}
            errors={errors}
          />

          <Input
            label="Contact email"
            errors={errors}
            type="email"
            name="contactEmail"
            id="contactEmail"
            register={register}
          />

          <div>
            <button className="btn btn--blue btn--blue--disabled">
              All Saved
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileForm;
