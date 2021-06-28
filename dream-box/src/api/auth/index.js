import http from "@api/http";

export const sentFormForReg = async (from) => {
  const { data } = await http.post("registration", from);
  return data;
};
export const activate = async (getparams) => {
  const { data } = await http.post("activate", getparams);
  return data;
};
export const checkLogin = async (login) => {
  const { data } = await http.get(`checkLogin/${login}`);
  return data;
};
export const checkEmail = async (email) => {
  const { data } = await http.get(`checkEmail/${email}`);
  return data;
};
export const logIn = async (user) => {
  const { data } = await http.post(`log-in/`, user);
  return data;
};

export const checkUser = async () => {
  const token = addToken();
  const { data } = await http.get(`check-user/`, token);
  return data;
};

export const removeAccount = async () => {
  const token = addToken();
  const { data } = await http.delete(`remove-user`, token);
  return data;
};

export function addToken() {
  return {
    headers: localStorage.getItem("TOKEN")
      ? { token: localStorage.getItem("TOKEN") }
      : "",
  };
}
