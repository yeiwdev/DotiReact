import * as C from "./chance";
import * as I from "./image";

export type IUser = {
  uuid: string;
  name: string;
  jobTitle: string;
  email: string;
  avatar: string;
};

export const makeUser = ({
  uuid,
  name,
  jobTitle,
  email,
  avatar,
}: IUser): IUser => ({
  uuid,
  name,
  jobTitle,
  email,
  avatar,
});

export const makeRandomUser = (): IUser => {
  const uuid = C.randomUUID();
  const name = C.randomName();
  const jobTitle = C.randomJobTitle();
  const email = C.randomEmail();
  const avatar = I.randomAvatar();

  return makeUser({ uuid, name, jobTitle, email, avatar });
  // return makeUser({ C.randomUUID(), C.randomName(), C.randomJobTitle(), C.randomEmail(), I.randomAvatar() });
  // 위 내용은, 생략되었지만, uuid: uuid, name: name, 이런 내용이므로 잘못된 문법이라고 볼 수 있다. 그냥 객체가 아닌 객체 리터럴이기 때문이다
};

// export type IUser = {
//   uuid: string;
//   name: string;
//   jobTitle: string;
//   email: string;
//   avatar: string;
// };

// export const makeUser = (
//   uuid: string,
//   name: string,
//   jobTitle: string,
//   email: string,
//   avatar: string
// ): IUser => ({
//   uuid,
//   name,
//   jobTitle,
//   email,
//   avatar,
// });

// export const makeRandomUser = (): IUser => {
//   return makeUser(
//     C.randomUUID(),
//     C.randomName(),
//     C.randomJobTitle(),
//     C.randomEmail(),
//     I.randomAvatar()
//   );
// };
