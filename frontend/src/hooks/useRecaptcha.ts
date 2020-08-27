import { useCallback } from "react";

const RECAPTCHA_CLIENT_KEY = process.env.REACT_APP_RECAPTCHA_CLIENT_KEY;

export const useRecaptcha = () => {
  const getToken = useCallback(async (action?: string) => {
    const token = await (window as any).grecaptcha.execute(RECAPTCHA_CLIENT_KEY!, {
      action,
    });
    return token;
  }, []);

  return {
    getToken,
  };
};