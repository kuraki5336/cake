import React from "react";
import { useForm } from "react-hook-form";
import css from "./style.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { strAccountSchema } from "../../core/validation/index";

const schema = yup.object().shape({
  firstName: yup.string().concat(strAccountSchema({ title: "帳號" })),
  lastName: yup.string().required(),
  phone: yup
    .string()
    .matches(/^[0-9]*$/, "Invalid quantity")
    .length(10)
    .typeError("請輸入數字"),
});

interface IFormInputs {
  firstName: string;
  lastName: string;
  phone: number;
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.row}>
          <label htmlFor="firstName">firstName</label>
          <input {...register("firstName")} />
          <p>
            {errors.firstName?.type === "required" && "First name is required"}
          </p>
          <p>
            {dirtyFields.firstName &&
              errors.firstName?.type === "length" &&
              "First name need length 5"}
          </p>
        </div>

        <div className={css.row}>
          <label htmlFor="lastName">lastName</label>
          <input {...register("lastName")} />
          <p>{errors.lastName && "Last name is required"}</p>
        </div>

        <div className={css.row}>
          <label htmlFor="phone">phone</label>
          <input {...register("phone")} />
          <p>{errors.phone && errors.phone.message}</p>
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
