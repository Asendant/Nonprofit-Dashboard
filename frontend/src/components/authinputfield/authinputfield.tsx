interface Props {
  id: string;
  label: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type: string;
  placeholder: string;
}

const AuthInputField = (props: Props) => {
  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setText(e.currentTarget.value);
  };

  return (
    <div className="space-y-1.5">
      <label htmlFor={props.id} className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
        {props.label}
      </label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={updateText}
        className="
          w-full h-10 rounded-md
          bg-white/70 dark:bg-neutral-900/60
          border border-neutral-300/80 dark:border-neutral-700
          px-3 text-sm
          placeholder:text-neutral-400 dark:placeholder:text-neutral-500
          shadow-inner
          focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/60
          transition
        "
      />
    </div>
  );
};

export default AuthInputField;