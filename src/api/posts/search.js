import axiosManagement from "../axiosAuthenService";

export const getSearchPostData = (requestParams) => {
  const url = `post-service/posts/`;
  return axiosManagement.get(url, { params: requestParams });
};

export const getPostById = (pid) => {
  const url = `post-service/posts/${pid}`;
  return axiosManagement.get(url);
};
export const getSearchComplete = (search, category) => {
  const url = category
    ? `post-service/posts/search-autocomplete/?search=${search}&category=${category}`
    : `post-service/posts/search-autocomplete/?search=${search}`;

  return axiosManagement.get(url);
};
export const createPost = (data) => {
  const url = `post-service/posts/`;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axiosManagement.post(url, data, config);
};
export const editPost = ({id, title, description, price, quantity}) => {
  const data = {
    id,
    title,
    description,
    price,
    quantity
  };
  const url = `post-service/posts/${id}/`;
  return axiosManagement.put(url, data);
};
