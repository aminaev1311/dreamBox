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

export const checkUser = async (newToken) => {
  const token = addToken(newToken);
  const { data } = await http.get(`check-user/`, token);
  return data;
};

export const updateUser = async (user) => {
  const headers = addToken();
  const { data } = await http.put(`update-user`, user, headers);
  return data;
};

export const updateUserPassword = async (passwords) => {
  const headers = addToken();
  const { data } = await http.put(`update-user-password`, passwords, headers);
  return data;
};

export const sendEmailRestorePassword = async (email) => {
  const { data } = await http.post(`send-email-restore-password`, email);
  return data;
};

export const isToken = async (token) => {
  const { data } = await http.post(`is-token-restore-password/${token}`);
  return data;
};

export const changePassword = async (token, password) => {
  const { data } = await http.put(`change-password`, { token, password });
  return data;
};

export const removeAccount = async () => {
  const token = addToken();
  const { data } = await http.delete(`remove-user`, token);
  return data;
};

export function addToken(token = null) {
  const newToken = token || localStorage.getItem("TOKEN") || "";
  return {
    headers: { token: newToken },
  };
}
