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
  console.log("search", search);
  console.log("cate", category);

  const url = category
    ? `posts/search-autocomplete/?search=${search}&category=${category}`
    : `posts/search-autocomplete/?search=${search}`;

  return axiosPostService.get(url);
};
