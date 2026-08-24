export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePassword = (password: string, minLength = 6): boolean => {
  return password.length >= minLength;
};

export const validatePhoneNumber = (phone: string): boolean => {
  const regex = /^[\d+\s()-]{10,}$/;
  return regex.test(phone.replace(/\s/g, ''));
};

export const validateOTP = (otp: string, expected: string): boolean => {
  return otp.trim() === expected;
};

export const validatePasswordMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword && password.length > 0;
};

export const validateFullName = (name: string): boolean => {
  return name.trim().length >= 2;
};
