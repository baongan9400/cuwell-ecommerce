import axiosPostService from "api/axiosPostService";

export const getSearchPostData = (requestParams) => {
  const url = `posts/`;
  return axiosPostService.get(url, { params: requestParams });
};

export const getPostById = (pid) => {
  const url = `posts/${pid}`;
  return axiosPostService.get(url);
};
export const getSearchComplete = (search, category) => {

  const url = category
    ? `posts/search-autocomplete/?search=${search}&category=${category}`
    : `posts/search-autocomplete/?search=${search}`;

  return axiosPostService.get(url);
};
export const createPost = (data) => {
  const url = `posts/`; 
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
  console.log("data create", data);
  return axiosPostService.post(url, data, config);
};
