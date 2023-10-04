function InputText({ value, setValue, isLoading, type }) {
  return (
    <>
      <label htmlFor={type} className="mb-1">
        {type}
      </label>
      <input
        type={type}
        id={type}
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
