type RecaptchaVerifyResponse = {
  success?: boolean;
  ["error-codes"]?: string[];
};

const RECAPTCHA_SECRET_KEY = "6LcV06osAAAAAGiiLC0Tc13VNa0Dc8UX5s3itBKy";

export const verifyRecaptchaToken = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim() || RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return {
      success: false,
      message: "reCAPTCHA is not configured on the server.",
    };
  }

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret,
          response: token,
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return {
        success: false,
        message: "Unable to verify reCAPTCHA right now.",
      };
    }

    const result = (await response.json()) as RecaptchaVerifyResponse;

    if (!result.success) {
      return {
        success: false,
        message: "reCAPTCHA verification failed. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      message: "Unable to verify reCAPTCHA right now.",
    };
  }
};
