const getLayoutIcon = (url: string) => {
  return new URL(`../assets/layout/${url}`, import.meta.url).href;
};
const getVerifyImg= (url: string) => {
  return new URL(`../assets/verifyImg/${url}`, import.meta.url).href;
};
export default {
  getLayoutIcon,
  getVerifyImg,
};


