import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { CHECKOUT_STEP1 } from "../Steps/Settings/Schemes";
import { useDispatch, useSelector } from "react-redux";
import { setStep, setUserData } from "../../store/checkout/checkoutSlice";

export default function LeftSide() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.checkout.step);
  return (
    <div>
      <Formik
        initialValues={{
          FirstName: "",
          LastName: "",
          Email: "",
          PhoneNumber: "",
          DetailAddress: "",
          DetailAddressOptional: "",
          City: "",
          County: "",
          Postcode: "",
        }}
        validationSchema={CHECKOUT_STEP1}
        onSubmit={(values) => {
          dispatch(setUserData(values));
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="max-w-[550px] left-0 flex gap-[32px] py-[32px] max-[420px]:flex-col">
              <div>
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[12px]">
                    First Name
                  </h2>
                </div>
                <Field
                  component="input"
                  data-testid="FirstName"
                  name="FirstName"
                  label="FirstName"
                  type="text"
                  placeholder="John"
                  className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
                />
                <ErrorMessage
                  name="FirstName"
                  component="div"
                  className="text-[12px]"
                />
              </div>
              <div>
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[12px]">
                    Last Name
                  </h2>
                </div>
                <Field
                  component="input"
                  data-testid="LastName"
                  name="LastName"
                  label="LastName"
                  type="text"
                  placeholder="Doe"
                  className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
                />
                <ErrorMessage
                  name="LastName"
                  component="div"
                  className="text-[12px]"
                />
              </div>
            </div>
            <div className="max-w-[550px] left-0 flex gap-[32px] py-[32px] max-[420px]:flex-col">
              <div>
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[12px]">
                    Email
                  </h2>
                </div>
                <Field
                  component="input"
                  data-testid="Email"
                  name="Email"
                  label="Email"
                  type="text"
                  placeholder="Johndoe@example.com"
                  className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
                />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="text-[12px]"
                />
              </div>
              <div>
                <div className="flex flex-col gap-[10px] start pb-[17px] relative">
                  <h2 className="font-textSec text-text-color text-[12px]">
                    Phone Number
                  </h2>
                </div>
                <div className="absolute w-[41px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-r-[1px]  rounded-[8px] text-center flex justify-center">
                  <p className="text-[14px] text-[#C5C3C3]  absolute top-[10px] left-[5px]">
                    +44
                  </p>
                </div>
                <Field
                  component="input"
                  data-testid="PhoneNumber"
                  name="PhoneNumber"
                  label="PhoneNumber"
                  type="text"
                  placeholder="Phone Number"
                  className="w-[260px] h-[41px] pl-[56px] border-[#C5C3C3] border-[1px] rounded-[8px]"
                />
                <ErrorMessage
                  name="PhoneNumber"
                  component="div"
                  className="text-[12px]"
                />
              </div>
            </div>
            <p className="text-mainText text-[#C5C3C3] text-[20px] pt-[32px] font-normal">
              Shipping Details
            </p>
            <div className="max-w-[550px] left-0 flex  flex-col py-[32px] max-[420px]:max-w-[260px]">
              <div className="flex flex-col gap-[10px] start pb-[17px]">
                <h2 className="font-textSec text-text-color text-[12px]">
                  Detail Address
                </h2>
              </div>
              <Field
                component="input"
                data-testid="DetailAddress"
                name="DetailAddress"
                label="DetailAddress"
                type="text"
                placeholder="Detail Address"
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage
                name="DetailAddress"
                component="div"
                className="text-[12px]"
              />
              <Field
                component="input"
                data-testid="DetailAddressOptional"
                name="DetailAddressOptional"
                label="DetailAddressOptional"
                type="text"
                placeholder="Detail Address Optional"
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px] mt-[12px]"
              />
              <ErrorMessage
                name="DetailAddressOptional"
                component="div"
                className="text-[12px]"
              />
            </div>
            <div className="max-w-[550px] left-0 flex  flex-col pb-[32px] max-[420px]:max-w-[260px]">
              <div className="flex flex-col gap-[10px] start pb-[17px]">
                <h2 className="font-textSec text-text-color text-[12px]">
                  City
                </h2>
              </div>
              <Field
                component="input"
                data-testid="City"
                name="City"
                label="City"
                type="text"
                placeholder="Liverpool"
                className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
              />
              <ErrorMessage
                name="City"
                component="div"
                className="text-[12px]"
              />
            </div>
            <div className="max-w-[550px] left-0 flex gap-[32px] max-[420px]:flex-col">
              <div>
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[12px]">
                    County
                  </h2>
                </div>
                <Field
                  component="input"
                  data-testid="County"
                  name="County"
                  label="County"
                  type="text"
                  placeholder="Merseyside"
                  className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
                />
                <ErrorMessage
                  name="County"
                  component="div"
                  className="text-[12px]"
                />
              </div>
              <div>
                <div className="flex flex-col gap-[10px] start pb-[17px]">
                  <h2 className="font-textSec text-text-color text-[12px]">
                    Postcode
                  </h2>
                </div>
                <Field
                  component="input"
                  data-testid="Postcode"
                  name="Postcode"
                  label="Postcode"
                  type="text"
                  placeholder="Postcode"
                  className="w-[260px] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
                />
                <ErrorMessage
                  name="Postcode"
                  component="div"
                  className="text-[12px]"
                />
              </div>
            </div>
            <div className="absolute right-[10%] bottom-0 w-[35%] max-[420px]:w-[90%] max-[420px]:bottom-[-80px]">
              <button
                className="btn flex items-center  w-[100%] justify-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  dispatch(setStep(step + 1));
                }}
              >
                Continue to Payment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
