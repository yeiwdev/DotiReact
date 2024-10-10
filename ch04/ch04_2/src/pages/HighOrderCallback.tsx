import { useCallback, useMemo } from "react";
import * as D from "../data";
import { Button } from "../theme/daisyui";

export default function HighOrderCallback() {
  const onClick = useCallback(
    (name: string) => () => alert(`${name} clicked`),
    []
  );

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="btn-primary btn-wide btn-xs"
          >
            {name}
          </Button>
        )),
    [onClick]
  );
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">HighOrderCallback</h2>
      <div className="mt-4">{buttons}</div>
    </section>
  );
}
