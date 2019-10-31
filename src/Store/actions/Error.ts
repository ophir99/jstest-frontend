export const API_ERROR = "API_ERROR";

export const reportAPIError = (msg: string) => ({
  type: API_ERROR,
  payload: msg
});

export const dismissAPIError = () => ({
  type: "NO_API_ERROR"
});
