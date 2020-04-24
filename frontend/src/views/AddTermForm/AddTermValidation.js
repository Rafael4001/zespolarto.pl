import * as Yup from "yup";

export const validationSchemaYup = Yup.object().shape({
  weddingDate: Yup.string()
    .min(2, "required more then 2 signs")
    .max(255, "Must be shorterr than 255")
    .required("pole jest wymagane"),

  weddingAddress: Yup.string()
    .min(2, "required more then 2 signs")
    .max(255, "Must be shorterr than 255")
    .required("pole jest wymagane"),

  weddingHotelName: Yup.string()
    .min(2, "required more then 2 signs")
    .max(255, "Must be shorterr than 255")
    .required("pole jest wymagane"),

  weddingStatus: Yup.string()
    .required("pole jest wymagane"),
})
