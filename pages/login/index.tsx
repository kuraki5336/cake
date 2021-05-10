import React from "react";
import { useForm } from "react-hook-form";
import "./";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().length(5),
  lastName: yup.string().required(),
});

interface IFormInputs {
  firstName: string;
  lastName: string;
}
/** 表單驗證 */
const Login = () => {
  const {
    register,
    formState: { errors, touchedFields, dirtyFields },
    handleSubmit,
  } = useForm<IFormInputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  console.log("dirtyFields", dirtyFields);
  console.log("touchedFields", touchedFields);
  console.log(errors);
  dirtyFields.firstName;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>{errors.firstName?.type}453</p>
      <input {...register("firstName", { required: true })} />
      <p>{errors.firstName?.type === "required" && "First name is required"}</p>
      <p>
        {dirtyFields.firstName &&
          errors.firstName?.type === "length" &&
          "First name need length 5"}
      </p>
      <input {...register("lastName", { required: true })} />
      <p>{errors.lastName && "Last name is required"}</p>
      <input type="submit" />
    </form>
  );
};

export default Login;
