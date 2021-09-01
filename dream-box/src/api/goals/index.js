import http from "@api/http";


export const addGoal = async (goal) => {
  const headers = addToken();
  const { data } = await http.post(`add-goal`, goal, headers);
  return data;
};

export function addToken(token = null) {
  const newToken = token || localStorage.getItem("TOKEN") || "";
  return {
    headers: { token: newToken },
  };
}