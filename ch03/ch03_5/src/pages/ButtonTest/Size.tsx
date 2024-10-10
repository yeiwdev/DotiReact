import { Button } from "../../theme/daisyui";

export default function Size() {
  return (
    <section className="mt-4">
      <h2 className="text-3xl font-bold text-center">Basic</h2>
      <div className="flex mt-4 justify-evenly">
        <Button className="btn-lg btn-primary">BTN-LG</Button>
        <Button className="btn-md btn-primary">BTN-md</Button>
        <Button className="btn-sm btn-primary">BTN-sm</Button>
        <Button className="btn-xs btn-primary">BTN-xs</Button>
      </div>
    </section>
  );
}
