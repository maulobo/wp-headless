import { isEmpty } from "lodash";

export const storeSession = (session) => {
  if (isEmpty(session)) {
    return null;
  }

  localStorage.setItem("x-wc-session", session);
  console.log(session);
};

export const getSession = () => {
  return localStorage.getItem("x-wc-session");
};
