import axios from "axios";
import { objectToApiQuaryString } from "../utils/methods";

const ROOT_URL = "/api/jobs";

export default {
  getJobs(opts = {}) {
    return axios.get(`${ROOT_URL}${objectToApiQuaryString(opts)}`);
  },
  getJobById(jobId) {
    return axios.get(`${ROOT_URL}/${jobId}`);
  },
  createJob(payload) {
    return axios.post(`${ROOT_URL}`, payload);
  },
  updateJob(payload) {
    return axios.put(`${ROOT_URL}/${payload.id}`, payload.data);
  },
  deleteJob(jobId) {
    return axios.delete(`${ROOT_URL}/${jobId}`);
  },
};
