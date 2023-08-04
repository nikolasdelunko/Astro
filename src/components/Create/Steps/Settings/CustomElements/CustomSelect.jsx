import React from "react";
import { useFormikContext } from "formik";

export default function CustomSelect({ field, form, options, ...rest }) {
  const { setTouched, setFieldValue } = useFormikContext();
  const { name, placeholder } = field;
  return (
    <select
      className="w-[100%] h-[41px] pl-[16px] border-[#C5C3C3] border-[1px] rounded-[8px]"
      options={options}
      getOptionLabel={(options) => options}
      onBlur={() => setTouched({ [name]: true })}
      onChange={(_, value) => setFieldValue(name, value)}
    >
      {options.map((el) => (
        <option value={el} key={Math.random(0, 1)}>
          {el}
        </option>
      ))}
    </select>
  );
}
