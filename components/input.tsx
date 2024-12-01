import { ChangeEvent } from 'react';

type IInputProps = {
  label?: string;
  type?: string;
  value?: string;
  name?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type,
  value,
  name,
  onChange,
}: IInputProps) {
  return (
    <div className="flex flex-col">
      <label className="text-lg font-semibold" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className="w-full h-12 px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-0"
        type={type}
        id={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
