import { useField } from "formik";
import { useRef } from "react";

export default function MyInput({ label, labelClassName, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label className={`${labelClassName ? labelClassName : "mylabel"}`}>{label}</label>
      <input {...field} {...props} />

      {meta.touched && meta.error ? <div className="form_error">{meta.error}</div> : ""}
    </>
  );
}

export function MySelect({ label, labelClassName, name, options, selectClassName }) {
  const [field, meta] = useField(name);

  return (
    <>
      <label
        className={`${labelClassName ? labelClassName : "mylabel"} font-medium`}
        htmlFor={name}
      >
        {label}
      </label>
      <select className={selectClassName} {...field}>
        {options.map((option) => (
          <option key={option.id} value={option.value} className=" border-b-2 border-gray-700">
            {option.name}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? <div className="form_error">{meta.error}</div> : ""}
    </>
  );
}

export function MyTextArea({ label, labelClassName, maxHeightPx, ...props }) {
  const textAreaRef = useRef(null);
  const [field, meta, helpers] = useField(props);
  useAutosizeTextArea(textAreaRef, field.value, maxHeightPx);

  return (
    <>
      <div className={`${labelClassName ? labelClassName : "mylabel"} font-medium`}>
        <label>{label}</label>
      </div>
      <textarea {...field} {...props} ref={textAreaRef} />
      {meta.touched && meta.error ? <div className="form_error">{meta.error}</div> : ""}
    </>
  );
}
