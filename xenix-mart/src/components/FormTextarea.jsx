const FormTextarea = ({
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = "",
}) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`border rounded px-3 py-2 resize-none ${className}`}
    />
  );
};

export default FormTextarea;
