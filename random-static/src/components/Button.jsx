import clsx from "clsx";

export default function Button({
  className = "bg-blue-600",
  children,
  text,
  ...props
} = props) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "[&>svg]:w-5 [&>svg]:h-5 [&>svg]:stroke-1 flex items-center gap-x-2 rounded-lg px-4 py-2 text-white"
      )}
    >
      {text || children}
    </button>
  );
}
