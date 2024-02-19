export const checkFieldsValidation = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (email === "") return "⚠️Please Enter Email";
  if (password === "") return "⚠️Please Enter Password";

  if (!isEmailValid) return "⚠️Email is not Valid. Check Format.";
  if (!isPasswordValid) return "⚠️Password is not Valid. Please Check Again.";

  return null;
};
