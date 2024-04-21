export const getFromLocalStorage = (key: string): string => {
  if (import.meta.client) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return '';
};
