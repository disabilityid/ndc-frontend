// Function to set a cookie with a specific name, value, and expiration in days
export const setCookie = (name: string, value: string, days: number): void => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
};

export const getCookie = (name: string): string | null => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    // Remove leading spaces and check if cookie starts with the target name
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
};
