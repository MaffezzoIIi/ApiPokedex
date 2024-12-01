import { Colors } from "@/constants/colors";

export default function Status({
  base_stat,
  name,
}: {
  base_stat: number;
  name: string;
}) {
  return (
    <div key={name}>
      <span
        className="capitalize p-1 rounded"
        style={{
          backgroundColor: Colors[name],
          width: base_stat * 1.3,
        }}
      >
        {name}: <span>{base_stat}</span>
      </span>
    </div>
  );
}
