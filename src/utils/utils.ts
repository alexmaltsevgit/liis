export const hasScrollbar = (element: HTMLElement | null) => {
  if (element) return element?.scrollHeight > element?.clientHeight;
  return false;
};
