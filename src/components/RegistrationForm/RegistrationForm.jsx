import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import * as Yup from "yup";

const userSchema = Yup.object({
  name: Yup.string()
    .required("Ім'я - обов'язкове поле")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Ім'я може містити лише літери, апостроф, тире та пробіли.`
    ),
  email: Yup.string().required("Пошта - обов'язкове поле").email(),
  password: Yup.string()
    .required("Пароль - обов'язкове поле")
    .min(10, "Пароль має складатися мінімально з 10-и символів")
    .matches(/[0-9]/)
    .matches(/[a-z]/)
    .matches(/[A-Z]/),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Паролі мають співпадати"
  ),
});

export const RegistrationForm = () => {
  const { userType } = useParams();
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col px-[10px] md:px-[104px] gap-5 "
      >
        <legend className="">
          {userType === "user" ? "Акаунт користувача" : "Акаунт догсітера"}
        </legend>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Ім{`'`}я
          <TextField
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            placeholder="Введіть ім'я для вашого акаунту"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </label>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Електронна пошта
          <TextField
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            placeholder="Введіть електронну пошту"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </label>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Пароль
          <TextField
            placeholder="Введіть пароль"
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </label>
        <label className="flex flex-col gap-[5px] text-black font-semibold">
          Підтвердити пароль
          <TextField
            placeholder="Введіть пароль знову"
            className="placeholder:text-sm placeholder:font-normal border-2 border-gray rounded-lg py-[5px] pl-[10px]  w-full min-w-[280px] max-w-[422px]"
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
        </label>
        <label className="flex gap-2 text-black text-[14px]">
          <input
            type="checkbox"
            name=""
            className="appearance-none w-[20px] h-[20px] border-2 border-gray rounded-lg checked:bg-checked-input bg-contain"
          />
          <p className="max-w-[250px] md:max-w-none w-[392px]">
            <span className="leading-none">
              Я ознайомленний(-на) з{" "}
              <span className="underline text-main">Умовами</span> та
              згоден(-на) з{" "}
            </span>
            <span className="underline text-main">Правилами</span> використання
            сайту
          </p>
        </label>
        <button
          className="p-[10px] w-fit bg-main hover:bg-hover active:bg-white active:text-hover text-white self-center rounded-lg text-lg font-semibold mb-[20px]"
          type="submit"
        >
          Зареєструватися
        </button>
      </form>
    </>
  );
};
