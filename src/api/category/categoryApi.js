import axiosConfig from "api/axiosConfig";

const categoryApi = {
  getAllCategoriesData: () => {
    const url = `post-service/categories/`;
    return axiosConfig.get(url, {});
  },
};

export default categoryApi;
