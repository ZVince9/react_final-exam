import { atom } from "recoil";

export const deletingState = atom({
  key: "deletingState",
  default: [],
});

export const editedUserIdState = atom({
  key: "editedUserIdState",
  default: null,
});
