import { twMerge } from "tailwind-merge";

export default function Pointer(props: { name: string; color?: "red" | "blue" }) {
  const { name, color } = props;

  return (
    <div className="relative inline-block">
      {/* Mac-like Pointer */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path
          fill="white"
          d="M3 1L20 11L14 13L16 21L13 22L11 14L3 1Z"
          stroke="black"
          strokeWidth="1"
        />
      </svg>

      {/* Label */}
      <div className="absolute top-6 left-6 z-10">
        <div
          className={twMerge(
            "inline-flex rounded-full font-bold text-sm px-2 py-1 bg-blue-500 rounded-tl-none",
            color === "red" && "bg-red-500"
          )}
        >
          {name}
        </div>
      </div>
    </div>
  );
}
