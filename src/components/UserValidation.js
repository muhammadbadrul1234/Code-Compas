export const validateEmail = (email: string) => {
  let errors = null;
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

  if (!email) {
    errors = "Email required";
  } else if (!emailRegex.test(email)) {
    errors = "Email is invalid";
  }
  return errors;
};

export const validatePassword = (password: string) => {
  let errors = null;

  if (!password) {
    errors = "Password is required";
  } else if (password.length < 6) {
    errors = "Password needs to be 6 characters or more";
  }
  return errors;
};
