const getLayoutIcon = (url: string) => {
  return new URL(`../assets/layout/${url}`, import.meta.url).href;
};
export default {
  getLayoutIcon,
};
