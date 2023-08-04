import * as yup from "yup";

//default required field error
const isRequiredError = "This field is required";
const isNotTrimmedError = "This field must have no spaces before and after";
const isNotLowerCaseError = "This field must be written in lowercase";
const STR_REGEX = /^[a-zа-яё]+$/i;
const NUMBERS = /^[0-9]+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const STORY_BOOK_STEP1_SCHEMA = yup.object().shape({
  ThemeOfStory: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(3, "Must be longer than 3 characters")
    .max(30, "too long")
    .required(isRequiredError),
});

export const STORY_BOOK_STEP2_SCHEMA = yup.object().shape({
  FavoriteCharter: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(3, "Must be longer than 3 characters")
    .max(20, "Nice try, nobody has a last name that long")
    .required(isRequiredError),
  TimeOfSettings: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(6, "Must be longer than 6 characters")
    .max(30, "too long")
    .required(isRequiredError),
  PlaceOfSettings: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(6, "Must be longer than 6 characters")
    .max(30, "too long")
    .required(isRequiredError),
  AmountCharacter: yup
    .number()
    .min(1, "Must be longer than 1 number")
    .max(1000, "too big number")
    .required(isRequiredError),
  AutoPlot: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(5, "Must be longer than 5 characters")
    .max(100, "to long")
    .required(isRequiredError),
});

export const STORY_BOOK_STEP3_SCHEMA = yup.object().shape({
  CoverDesign: yup
    .string()
    .strict(true)
    .trim(isNotTrimmedError)
    .min(5, "Must be longer than 5 characters")
    .max(100, "to long")
    .required(isRequiredError),
});


export const CHECKOUT_STEP1 = yup.object().shape({
  FirstName: yup
    .string()
    .min(4, "Write Real Name")
    .max(50, "Too Long")
    .typeError("Write Real Name")
    .required(isRequiredError)
    .matches(STR_REGEX, "Invalid symbols, use only character"),
  LastName: yup
    .string()
    .min(4, "Write Real Name")
    .max(50, "Too Long")
    .typeError("Write Real Name")
    .required(isRequiredError)
    .matches(STR_REGEX, "Invalid symbols, use only character"),
  PhoneNumber: yup
    .string()
    .matches(phoneRegExp, "Please enter a valid phone number")
    .required(isRequiredError),
  Email: yup
    .string()
    .email("Invalid email")
    .strict(true)
    .required(isRequiredError)
    .email("Enter correct email"),
  DetailAddress: yup
    .string()
    .min(10, "Write Real Address")
    .max(50, "Too Long")
    .required(isRequiredError),
  DetailAddressOptional: yup
    .string()
    .min(10, "Write Real Address")
    .max(50, "Too Long"),
  City: yup.string().max(10, "Write Real city").required(isRequiredError),
  Postcode: yup
    .string()
    .matches(NUMBERS, "Must be only numbers")
    .max(6, "Not valid zip code")
    .min(4, "Not valid zip code")
    .required(isRequiredError),
});
