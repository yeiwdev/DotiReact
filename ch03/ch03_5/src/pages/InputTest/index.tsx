import Basic from "./Basic";
import Border from "./Border";
import Color from "./Color";
import Size from "./Size";

export default function InputTest() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">InputTest</h2>
      <div className="mt-4">
        <Size />
        <Border />
        <Color />
        <Basic />
      </div>
    </section>
  );
}
