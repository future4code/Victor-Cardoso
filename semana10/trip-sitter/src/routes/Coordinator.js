export const goHome = (history) => {
  history.push("/");
};

export const goToSignUp = (history) => {
  history.push("/signUp");
};

export const goToSignIn = (history) => {
  history.push("/signIn");
};

export const goToApply = (history) => {
  history.push("/tripApply");
};

export const goToCreateTrip = (history) => {
  history.push("/createTrip");
};

export const goToTrips = (history) => {
  history.push("/dashboard/trips");
};

export const goToApplies = (history) => {
  history.push("/dashboard/applies");
};
