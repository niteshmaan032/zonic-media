import { RECAPTCHA_MIN_SCORE } from "@/shared/recaptcha";

type RecaptchaVerifyResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  ["error-codes"]?: string[];
};

export const verifyRecaptchaToken = async (
  token: string,
  expectedAction?: string,
) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();

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

    if (expectedAction && result.action !== expectedAction) {
      return {
        success: false,
        message: "reCAPTCHA action mismatch. Please try again.",
      };
    }

    if (
      typeof result.score !== "number" ||
      result.score < RECAPTCHA_MIN_SCORE
    ) {
      return {
        success: false,
        message: "reCAPTCHA score was too low. Please try again.",
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
