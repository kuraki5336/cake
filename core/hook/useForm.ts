import React from "react";

import {
  useForm as _useForm,
  FieldValues,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";

type CustomUseFormReturn<T> = UseFormReturn<T> & {
  formState: { customDirtyFields?: any };
};

function useForm<
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object
>(
  props?: UseFormProps<TFieldValues, TContext>
): CustomUseFormReturn<TFieldValues> {
  const mode = props?.mode;
  if (props?.mode === "onBlur") {
    props.mode = "onChange";
  }
  const [, forceUpdate] = React.useState(0);
  /** 類別擴增 */
  const form: CustomUseFormReturn<TFieldValues> = _useForm(props);
  // initial
  form.formState.customDirtyFields = form.formState.customDirtyFields || {};

  const handleChanged = React.useCallback((event) => {}, []);

  //   function handleChanged(event: any) {
  //     const fields = form.formState.customDirtyFields;
  //     const target = event.target;
  //     fields[target.name] = !!(fields[target.name] || target.value);

  //     form.formState.customDirtyFields = fields;

  //     if (mode === "onBlur") {
  //       forceUpdate(Math.random());
  //     }
  //   }

  React.useEffect(() => {
    const fields = form.control.fieldsRef.current;
    console.log(fields);

    Object.keys(fields).forEach((key) => {
      if (mode === "onBlur") {
        (fields[key]?._f.ref as HTMLInputElement).onblur = (event) =>
          handleChanged(event);
      } else if (mode === "onChange" || mode === "onTouched") {
        (fields[key]?._f.ref as HTMLInputElement).oninput = (event) =>
          handleChanged(event);
      }
    });
  }, []);

  return form;
}

export default useForm;
