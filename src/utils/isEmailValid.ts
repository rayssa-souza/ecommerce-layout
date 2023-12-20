const isEmailValid = (email: string) => {
  const emailRegex = new RegExp("[a-z0-9]+@[a-z0-9]+.[a-z]{2,3}");
  const emailValidation = emailRegex.test(email);
  return emailValidation;
};

export default isEmailValid;
