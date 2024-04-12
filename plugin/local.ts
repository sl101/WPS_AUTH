export const getFromLocalStorage = (key: string): any => {
  if (process.client) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};