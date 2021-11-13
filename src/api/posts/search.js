import axiosPostService from "api/axiosPostService";

export const getSearchPostData = (requestParams) => {
    console.log("api");
    const url = `posts/`; 
    return axiosPostService.get(url, { params: requestParams});
}

export const getPostById = (pid) => {
    const url = `posts/${pid}`; 
    return axiosPostService.get(url);
}