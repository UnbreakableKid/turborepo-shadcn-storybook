import { Button } from "ui";

export default function Page() {
  return (
    <div className="container flex flex-col gap-5">
      <h1 className="text-red-700">App</h1>
      <div>
        <Button>Hello</Button>
      </div>
    </div>
  );
}
