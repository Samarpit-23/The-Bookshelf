import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltrounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltrounds);
    return hashedPassword;
  } catch (e) {
    console.log(e);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
