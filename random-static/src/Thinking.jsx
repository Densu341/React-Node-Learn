import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandTwitter,
} from "@tabler/icons-react";
import clsx from "clsx";

export default function () {
  return (
    <div className="bg-slate-900 place-content-center min-h-screen grid">
      <div className="flex gap-x-2">
        <Button type="submit" onClick={() => console.log("Login With Twitter")}>
          <IconBrandTwitter />
          Login
        </Button>
        <Button
          className="bg-orange-700"
          type="button"
          onClick={() => console.log("Login With Google")}
        >
          <IconBrandGoogle />
          Login
        </Button>
        <Button
          className="bg-black"
          type="button"
          onClick={() => console.log("Login With Github")}
        >
          <IconBrandGithub />
          Login
        </Button>
      </div>
    </div>
  );
}

function Button(props) {
  const { className = "bg-blue-600", children, text } = props;
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
