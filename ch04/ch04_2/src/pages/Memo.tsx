import { useMemo } from "react";
import { Avatar, Title } from "../components";
import * as D from "../data";
import { useOrCreate } from "./UseOrCreate";

export default function UseOrCreateTest() {
  const headTexts = useMemo<string[]>(
    () => [`NO.`, `NAME`, `JOB TITLE`, `EMAIL ADDRESS`],
    []
  );
  const users = useMemo<D.IUser[]>(
    () => D.makeArray(100).map(D.makeRandomUser),
    []
  );

  const head = useMemo(
    () => headTexts.map((text) => <th key={text}>{text}</th>),
    [headTexts]
  );
  const body = useMemo(
    () =>
      users.map((user, index) => (
        <tr key={user.uuid}>
          <th>{index + 1}</th>
          <td className="flex items-center">
            <Avatar src={user.avatar} size="1.5rem" />
            <p className="ml-2">{user.name}</p>
          </td>
          <td>{user.jobTitle}</td>
          <td>{user.email}</td>
        </tr>
      )),
    [users]
  );

  return (
    <section className="mt-4">
      <Title>Memo</Title>
      <div className="p-4 mt-4 overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>{head}</tr>
          </thead>
          <tbody>{body}</tbody>
        </table>
      </div>
    </section>
  );
}
