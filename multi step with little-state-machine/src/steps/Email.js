import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import cn from "classnames";

const Schema = yup.object().shape({
  email: yup.string().required().email("Enter valid email please"),
  name: yup.string().required("Name is required"),
});

const EmailStep = (props) => {
  // get form on Submit handler from parent component
  const { onSubmit, email, name } = props;
  // apply validations schema to react-hook-form form object
  const { errors, register, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
    defaultValues: {
      email,
      name
    }
  });

  // you can check all validations errors in console
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <h2>Enter your details</h2>
      </div>
      <div className="form-group">
        {/* check validation errors */}
        {errors.email && (
          <h4 className="invalid-msg">{errors.email.message}</h4>
        )}
        <input
          // make input invalid if get email validation errors
          className={cn(errors.email && "input-invalid")}
          name="email"
          ref={register}
          placeholder="Your email"
        />
      </div>
      <div className="form-group">
        {errors.name && (
          <h4 className="invalid-msg">{errors.name.message}</h4>
        )}
        <input
          // make input invalid if get name validation errors
          className={cn(errors.name && "input-invalid")}
          name="name"
          ref={register}
          placeholder="Your name"
        />
      </div>
      <div className="form-group">
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default EmailStep;
``
