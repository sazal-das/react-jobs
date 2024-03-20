import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import JobDetails from "../components/JobDetails";

const SingleJobPage = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>
      <JobDetails />
    </>
  );
};

export default SingleJobPage;
