import { selector } from "recoil";
import { userState } from "./atoms";

export const loggedInState = selector({
  key: "loggedInState",
  get: props => {
    const user = props.get(userState);
    if (user) return true;
    return false;
  },
});

export const userIdState = selector({
  key: "userIdState",
  get: ({ get }) => {
    const user = get(userState);
    return user._id;
  },
});
