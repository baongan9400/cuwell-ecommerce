import axiosConfig from "api/axiosConfig";

export const getSearchPostData = (requestParams) => {
  const url = `post-service/posts/`;
  return axiosConfig.get(url, { params: requestParams });
};

export const getPostById = (pid) => {
  const url = `post-service/posts/${pid}`;
  return axiosConfig.get(url);
};
export const getSearchComplete = (search, category) => {
  const url = category
    ? `post-service/posts/search-autocomplete/?search=${search}&category=${category}`
    : `post-service/posts/search-autocomplete/?search=${search}`;

  return axiosConfig.get(url);
};
export const createPost = (data) => {
  const url = `post-service/posts/`;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axiosConfig.post(url, data, config);
};
