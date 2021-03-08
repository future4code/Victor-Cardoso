export const goHome = (history) => {
  history.push("/");
};

export const goToRegister = (history) => {
  history.push("/register");
};

export const goToLogin = (history) => {
  history.push("/login");
};

export const goToFeed = (history) => {
  history.push("/feed");
};

export const goToPostDetails = (history, postId) => {
  history.push(`/feed/${postId}`);
};
