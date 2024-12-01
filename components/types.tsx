import { Colors } from "@/constants/colors";

const Types = ({ type }: { type: string }) => {
  return (
    <div
      key={type}
      className={`rounded p-1 capitalize text-center `}
      style={{
        backgroundColor: `#${Colors[type.toLocaleUpperCase()]}`,
      }}
    >
      {type}
    </div>
  );
};

export default Types;
