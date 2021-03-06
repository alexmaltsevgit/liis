import React, { ChangeEvent } from "react";
import InputWrapper from "../InputWrapper/InputWrapper.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { hotelsActions } from "../../store/hotels/hotels.slice";
import { getDateByDaysOffset } from "../../utils/date";
import { defaultLimit } from "../../store/hotels/hotels.utils";

type SearchFormData = {
  location: string;
  date: string;
  daysCount: number;
};

const yesterday = getDateByDaysOffset(new Date(), -1);

const fixMinDaysCount = (e: ChangeEvent<HTMLInputElement>) => {
  if (parseInt(e.target.value) <= 0) e.target.value = "0";
};

const scheme = yup.object({
  location: yup
    .string()
    .required("Обязательное поле")
    .typeError("Некорректный ввод"),

  date: yup
    .date()
    .min(yesterday, "Слишком ранняя дата")
    .required("Обязательное поле")
    .typeError("Некорректный ввод"),

  daysCount: yup
    .number()
    .integer("Число должно быть целым")
    .positive("Число должно быть больше 0")
    .required("Обязательное поле")
    .typeError("Некорректный ввод"),
});

const SearchForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SearchFormData>({
    resolver: yupResolver(scheme),
    criteriaMode: "all",
    mode: "onSubmit",
  });

  const dispatch = useDispatch();

  const onSubmit = (formData: SearchFormData) => {
    const { location, date, daysCount } = formData;
    dispatch(
      hotelsActions.tryFetch({
        location,
        checkIn: date,
        daysCount: daysCount,
        limit: defaultLimit,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper label={"Локация"} mt={"0"} bold error={errors.location}>
        <input {...register("location")} type="text" />
      </InputWrapper>

      <InputWrapper
        label={"Дата заселения"}
        mt={"16px"}
        bold
        error={errors.date}
      >
        <input {...register("date")} type="date" />
      </InputWrapper>

      <InputWrapper
        label={"Количество дней"}
        mt={"20px"}
        bold
        error={errors.daysCount}
      >
        <input
          {...register("daysCount")}
          type="number"
          onChange={fixMinDaysCount}
        />
      </InputWrapper>

      <InputWrapper mt={"32px"}>
        <input type="submit" value={"Искать"} />
      </InputWrapper>
    </form>
  );
};

export default SearchForm;
