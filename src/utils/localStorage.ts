export enum LocalStorageKeys {
  Favourite = "favourite",
}

export const addObjectToLocalStorage = (key: LocalStorageKeys, obj: object) => {
  return window.localStorage.setItem(key, JSON.stringify(obj));
};

export const getObjectFromLocalStorage = (
  key: LocalStorageKeys,
  fallback?: object
) => {
  return JSON.parse(window.localStorage.getItem(key) as string) ?? fallback;
};
