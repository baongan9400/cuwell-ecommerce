import axiosManagement from "../axiosAuthenService";

const reportApi = {
  getAllReportTypes: () => {
    const url = `post-service/report-types/`;
    return axiosManagement.get(url);
  },
  postReport: (body) => {
    const url = `post-service/post-reposts/`;
    return axiosManagement.post(url, body);
  },
};

export default reportApi;
