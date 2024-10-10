import { useMemo } from "react";
import { Subtitle, Title } from "../components";
import * as D from "../data";

export default function RadioInputTest() {
  const jobTitle = useMemo(() => D.makeArray(4).map(D.randomJobTitle), []); // 값을 캐싱하는 useMemo
  const radioInput = useMemo(
    () =>
      jobTitle.map((value, index) => (
        <label key={index} className="flex justify-start cursor-pointer label">
          <input
            type="radio"
            name="jobs"
            className="mr-4 radio radio-primary"
            defaultValue={value}
          />
          <span className="label-text">{value}</span>
        </label>
      )),
    [jobTitle]
  );
  return (
    <section className="mt-4">
      <Title>RadioInputTest</Title>
      <div className="flex flex-col justify-center mt-4">
        <Subtitle>What is your job?</Subtitle>
        <Subtitle>Seleted Job:</Subtitle>
        <div className="flex justify-center p-4 mt-4">
          <div className="flex flex-col mt-4">{radioInput}</div>
        </div>
      </div>
    </section>
  );
}
