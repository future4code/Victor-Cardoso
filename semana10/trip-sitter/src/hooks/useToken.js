export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};

// TO DO: removeToken
export const removeToken = () => {
  localStorage.removeItem("token");
};
