import React from "react";
import { Field } from "react-final-form";
import appContent from "../../../../appContent";
import Error from "./ErrorField/ErrorField";
import PropTypes from "prop-types";

const required = value => (value ? undefined : "Required");

const FieldWrapper = ({ name, componentSize, component }) => {
  const data = appContent;

  return (
    <div className={componentSize}>
      <label>{data[name]}</label>
      <Field
        name={name}
        component={component}
        type="text"
        validate={required}
      />
      <Error name={name} />
    </div>
  );
};

FieldWrapper.propTypes = {
  name: PropTypes.string,
  componentSize: PropTypes.string,
  component: PropTypes.string
};

export default FieldWrapper;
