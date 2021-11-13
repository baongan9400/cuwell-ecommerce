import axiosPostService from "api/axiosPostService";

const categoryApi = {  
    getAllCategoriesData: () => {
        const url = `categories/`; 
        return axiosPostService.get(url, {});
    }
}

export default categoryApi;