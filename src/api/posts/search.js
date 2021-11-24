import axiosPostService from "api/axiosPostService";

export const getSearchPostData = (requestParams) => {
  console.log("api");
  const url = `posts/`;
  return axiosPostService.get(url, { params: requestParams });
};

export const getPostById = (pid) => {
  const url = `posts/${pid}`;
  return axiosPostService.get(url);
};
export const getSearchComplete = (search, category) => {
  const url = category
    ? `posts/search-autocomplete/?search=${search}`
    : `posts/search-autocomplete/?search=${search}&category=${category}`;

  return axiosPostService.get(url);
};
