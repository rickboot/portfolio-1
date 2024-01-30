export const isValidString = (data: unknown, maxLength: number) => {
  if (typeof data === 'string' && data.length <= maxLength) {
    return true;
  }
  return false;
};

export const getErrorMessage = (error: unknown) => {
  let message = 'Unknown error';

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  }

  return message;
};
