const API_ROOT = "https://api.stackexchange.com";
console.log("API_ROOT", API_ROOT);
export const API_URLS = {
  posts: () =>
    `${API_ROOT}/2.3/posts?order=desc&sort=activity&site=stackoverflow&filter=!*Mg4PjfdPJ8lx)WJ`,
};
