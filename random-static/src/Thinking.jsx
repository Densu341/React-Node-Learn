import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Button from "./components/Button";
import Card from "./components/Card";

export default function () {
  return (
    <div className="bg-slate-100 place-content-center min-h-screen grid">
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
      <Card>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In alias
        deserunt, deleniti saepe quae nostrum officiis vel hic quibusdam quas
        cumque animi quod beatae porro odio laudantium? Cum iure modi iusto
        excepturi id numquam praesentium similique, exercitationem vel ullam
        nam? Reiciendis doloremque tempore ex harum veritatis temporibus
        blanditiis incidunt sed!
      </Card>
    </div>
  );
}
