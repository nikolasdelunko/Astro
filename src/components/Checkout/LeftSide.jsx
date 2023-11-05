import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { CHECKOUT_STEP1 } from "../Steps/Settings/Schemes";
import { setStep, setUserData, checkoutStore } from "../../store/checkoutStore";

export default function LeftSide() {
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
          setUserData(values);
        }}
      >
        {({ handleSubmit, isValid, dirty }) => (
          <Form>
            <div className="left-0 flex max-w-[550px] gap-[32px] py-[32px] max-[420px]:flex-col">
              <div>
                <div className="start flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[12px] text-text-color">
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
                  className="h-[41px] w-[260px] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
                />
                <ErrorMessage
                  name="FirstName"
                  component="div"
                  className="text-[12px]"
                />
              </div>
              <div>
                <div className="start flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[12px] text-text-color">
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
                  className="h-[41px] w-[260px] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
                />
                <ErrorMessage
                  name="LastName"
                  component="div"
                  className="text-[12px]"
                />
              </div>
            </div>
            <div className="left-0 flex max-w-[550px] gap-[32px] py-[32px] max-[420px]:flex-col">
              <div>
                <div className="start flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[12px] text-text-color">
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
                  className="h-[41px] w-[260px] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
                />
                <ErrorMessage
                  name="Email"
                  component="div"
                  className="text-[12px]"
                />
              </div>
              <div>
                <div className="start relative flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[12px] text-text-color">
                    Phone Number
                  </h2>
                </div>
                <div className="absolute flex h-[41px] w-[41px] justify-center rounded-[8px] rounded-r-[1px]  border-[1px] border-[#C5C3C3] pl-[16px] text-center">
                  <p className="absolute left-[5px]  top-[10px] text-[14px] text-[#C5C3C3]">
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
                  className="h-[41px] w-[260px] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[56px]"
                />
                <ErrorMessage
                  name="PhoneNumber"
                  component="div"
                  className="text-[12px]"
                />
              </div>
            </div>
            <p className="text-mainText pt-[32px] text-[20px] font-normal text-[#C5C3C3]">
              Shipping Details
            </p>
            <div className="left-0 flex max-w-[550px]  flex-col py-[32px] max-[420px]:max-w-[260px]">
              <div className="start flex flex-col gap-[10px] pb-[17px]">
                <h2 className="font-textSec text-[12px] text-text-color">
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
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
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
                className="mt-[12px] h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage
                name="DetailAddressOptional"
                component="div"
                className="text-[12px]"
              />
            </div>
            <div className="left-0 flex max-w-[550px]  flex-col pb-[32px] max-[420px]:max-w-[260px]">
              <div className="start flex flex-col gap-[10px] pb-[17px]">
                <h2 className="font-textSec text-[12px] text-text-color">
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
                className="h-[41px] w-[100%] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
              />
              <ErrorMessage
                name="City"
                component="div"
                className="text-[12px]"
              />
            </div>
            <div className="left-0 flex max-w-[550px] gap-[32px] max-[420px]:flex-col">
              <div>
                <div className="start flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[12px] text-text-color">
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
                  className="h-[41px] w-[260px] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
                />
                <ErrorMessage
                  name="County"
                  component="div"
                  className="text-[12px]"
                />
              </div>
              <div>
                <div className="start flex flex-col gap-[10px] pb-[17px]">
                  <h2 className="font-textSec text-[12px] text-text-color">
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
                  className="h-[41px] w-[260px] rounded-[8px] border-[1px] border-[#C5C3C3] pl-[16px]"
                />
                <ErrorMessage
                  name="Postcode"
                  component="div"
                  className="text-[12px]"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-[10%] w-[35%] max-[420px]:bottom-[-80px] max-[420px]:w-[90%]">
              <button
                className="btn flex w-[100%]  items-center justify-center"
                disabled={!isValid && !dirty}
                type="submit"
                onClick={() => {
                  handleSubmit();
                  setStep(checkoutStore.step + 1);
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
