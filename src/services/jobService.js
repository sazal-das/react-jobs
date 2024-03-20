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
};
