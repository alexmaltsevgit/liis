import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputWrapper from "../InputWrapper/InputWrapper.component";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user/user.slice";

type SignInFormData = {
  login: string;
  password: string;
};

const scheme = yup
  .object({
    login: yup.string().email("Невалидная почта").required("Обязательное поле"),
    password: yup
      .string()
      .min(8, "Минимум 8 символов")
      .required("Обязательное поле"),
  })
  .required();

const SignInForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>({
    resolver: yupResolver(scheme),
    criteriaMode: "all",
    mode: "onSubmit",
  });

  const dispatch = useDispatch();

  const onSubmit = (formData: SignInFormData) => {
    const { login, password } = formData;
    dispatch(userActions.tryLogIn({ login, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper label={"Логин"} error={errors.login} mt={"32px"}>
        <input {...register("login")} type="text" />
      </InputWrapper>

      <InputWrapper label={"Пароль"} error={errors.password} mt={"24px"}>
        <input {...register("password")} type="password" />
      </InputWrapper>

      <InputWrapper mt={"32px"}>
        <input type="submit" />
      </InputWrapper>
    </form>
  );
};

export default SignInForm;
