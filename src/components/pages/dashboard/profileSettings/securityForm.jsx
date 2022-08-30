import Input from "../../../common/input";
import { useForm } from "react-hook-form";

function SecurityForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    console.log(data);
  };

  const forms = [
    { label: "Current password", id: "currentPassword" },
    { label: "new password", id: "newPassword" },
    {
      id: "confirmNew",
      label: "Confirm new password",
    },
  ];
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        {forms.map((item) => (
          <div key={item.id}>
            <Input
              name={item.id}
              id={item.id}
              label={item.label}
              type="password"
              errors={errors}
              register={register}
            />
          </div>
        ))}
      </form>
      <button className="btn btn--blue">change password</button>
    </div>
  );
}

export default SecurityForm;
