const API_ROOT = "https://api.stackexchange.com";

export const API_URLS = {
  featured: () =>
    `${API_ROOT}/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow`,
  week: () =>
    `${API_ROOT}/2.3/posts?fromdate=1703376000&todate=1703980800&order=desc&sort=activity&site=stackoverflow`,
  month: () =>
    `${API_ROOT}/2.3/posts?fromdate=1703376000&todate=1703980800&order=desc&sort=activity&site=stackoverflow`,
};
