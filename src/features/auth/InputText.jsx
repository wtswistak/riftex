function InputText({ value, setValue, isLoading, type }) {
  return (
    <>
      <label htmlFor={type} className="mb-1 capitalize">
        {type}
      </label>
      <input
        type={type}
        name={type}
        className="rounded-sm mb-3  p-1 bg-[var(--dark-gray)]"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isLoading}
        required
      />
    </>
  );
}

export default InputText;
