export const validateRecaptchaToken = (value: string | undefined) =>
  Boolean(value?.trim()) || "Please complete the reCAPTCHA verification.";
